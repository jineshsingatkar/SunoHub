import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const VoiceConfessionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Voice Confession</Text>
      {/* Record Button */}
      <Button mode="contained" onPress={() => {}} style={styles.button}>Record</Button>
      {/* Playback + Delete (placeholder) */}
      <View style={styles.audioRow}>
        <Button mode="outlined" onPress={() => {}}>Play</Button>
        <Button mode="text" onPress={() => {}} color="#ef4444">Delete</Button>
      </View>
      {/* Transcription Preview */}
      <View style={styles.transcriptionBox}>
        <Text>Transcription preview will appear here...</Text>
      </View>
      {/* Translate Dropdown (placeholder) */}
      <Button mode="outlined" onPress={() => {}} style={styles.button}>Translate</Button>
      {/* Post Button */}
      <Button mode="contained" onPress={() => {}} style={styles.button}>Post</Button>
      {/* TODO: Implement actual recording, playback, transcription, and translation */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  button: { marginVertical: 8 },
  audioRow: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 },
  transcriptionBox: { backgroundColor: '#f3f4f6', borderRadius: 8, padding: 16, marginVertical: 8 },
});

export default VoiceConfessionScreen; 