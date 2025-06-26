/**
 * Voice Transcription Service
 *
 * Supports:
 * - Whisper (local inference via CLI)
 * - Google Cloud Speech-to-Text API
 * - Google Translate API
 *
 * Usage:
 *   const { transcribeWithWhisper, transcribeWithGoogleSTT, translateText } = require('./transcriptionService');
 *
 *   // To switch between Whisper and Google STT, call the desired function.
 *   // Example:
 *   const result = await transcribeWithWhisper('/path/to/audio.wav');
 *   const result = await transcribeWithGoogleSTT('/path/to/audio.wav');
 */

const { exec } = require('child_process');
const fs = require('fs');
const util = require('util');
const speech = require('@google-cloud/speech');
const { Translate } = require('@google-cloud/translate').v2;

const execAsync = util.promisify(exec);

// Whisper transcription (local CLI)
async function transcribeWithWhisper(audioFilePath) {
  try {
    // Assumes 'whisper' CLI is installed and in PATH
    const command = `whisper "${audioFilePath}" --model base --language en --output_format txt`;
    await execAsync(command);
    const txtPath = audioFilePath.replace(/\.[^/.]+$/, '.txt');
    const transcript = fs.readFileSync(txtPath, 'utf8');
    return { success: true, text: transcript.trim() };
  } catch (error) {
    return { success: false, error: `Whisper transcription failed: ${error.message}` };
  }
}

// Google Cloud Speech-to-Text
async function transcribeWithGoogleSTT(audioFilePath) {
  try {
    const client = new speech.SpeechClient();
    const file = fs.readFileSync(audioFilePath);
    const audioBytes = file.toString('base64');
    const audio = { content: audioBytes };
    const config = {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    };
    const request = { audio, config };
    const [response] = await client.recognize(request);
    const transcript = response.results.map(r => r.alternatives[0].transcript).join(' ');
    return { success: true, text: transcript.trim() };
  } catch (error) {
    return { success: false, error: `Google STT failed: ${error.message}` };
  }
}

// Google Translate
async function translateText(text, targetLang) {
  try {
    const translate = new Translate();
    const [translation] = await translate.translate(text, targetLang);
    return { success: true, translation };
  } catch (error) {
    return { success: false, error: `Translation failed: ${error.message}` };
  }
}

module.exports = {
  transcribeWithWhisper,
  transcribeWithGoogleSTT,
  translateText,
}; 