import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const WriteConfessionScreen = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [mood, setMood] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Write Confession</Text>
      {/* Text Input Area */}
      <TextInput
        label="Your Confession"
        value={text}
        onChangeText={setText}
        multiline
        numberOfLines={4}
        style={styles.input}
      />
      {/* Category Dropdown (placeholder) */}
      <TextInput
        label="Category"
        value={category}
        onChangeText={setCategory}
        style={styles.input}
        placeholder="e.g. Love, Regret"
      />
      {/* Mood Dropdown (placeholder) */}
      <TextInput
        label="Mood"
        value={mood}
        onChangeText={setMood}
        style={styles.input}
        placeholder="e.g. Happy, Sad"
      />
      {/* Language Selector (placeholder) */}
      <TextInput
        label="Language"
        value={language}
        onChangeText={setLanguage}
        style={styles.input}
        placeholder="e.g. en, hi"
      />
      {/* Post Button */}
      <Button mode="contained" onPress={() => {}} style={styles.button}>
        Post
      </Button>
      {/* TODO: Add dropdowns for category, mood, and language in production */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: { marginBottom: 12 },
  button: { marginTop: 16 },
});

export default WriteConfessionScreen; 