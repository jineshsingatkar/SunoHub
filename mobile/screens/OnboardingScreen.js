import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Avatar, HelperText, Dropdown } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Spanish', value: 'es' },
  // Add more languages as needed
];

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [language, setLanguage] = useState('en');
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState(null);

  // Placeholder for avatar selection
  const handleAvatarSelect = () => {
    // TODO: Open avatar picker
    setAvatar('https://placehold.co/100x100');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to SunoHub</Text>
      {/* Language Dropdown */}
      {/* Replace with a real dropdown in production */}
      <Text style={styles.label}>Select Language</Text>
      {/* TODO: Use a dropdown component */}
      <TextInput
        value={language}
        onChangeText={setLanguage}
        style={styles.input}
        placeholder="Language (e.g. en)"
      />
      {/* Nickname Input */}
      <Text style={styles.label}>Nickname</Text>
      <TextInput
        value={nickname}
        onChangeText={setNickname}
        style={styles.input}
        placeholder="Enter your nickname"
      />
      {/* Avatar Selector */}
      <Text style={styles.label}>Avatar</Text>
      <Avatar.Image
        size={64}
        source={avatar ? { uri: avatar } : require('../assets/avatar-placeholder.png')}
        style={{ alignSelf: 'center', marginBottom: 16 }}
      />
      <Button mode="outlined" onPress={handleAvatarSelect} style={{ marginBottom: 24 }}>
        Choose Avatar
      </Button>
      {/* Continue Button */}
      <Button mode="contained" onPress={() => navigation.replace('Dashboard')}>
        Continue
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center' },
  label: { marginTop: 12, marginBottom: 4, fontWeight: '600' },
  input: { marginBottom: 8 },
});

export default OnboardingScreen; 