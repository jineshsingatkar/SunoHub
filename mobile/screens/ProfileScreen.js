import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const [nickname, setNickname] = useState('User123');
  const [language, setLanguage] = useState('en');
  const [avatar, setAvatar] = useState(null);

  // Placeholder for avatar selection
  const handleAvatarSelect = () => {
    // TODO: Open avatar picker
    setAvatar('https://placehold.co/100x100');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {/* Avatar */}
      <Avatar.Image
        size={80}
        source={avatar ? { uri: avatar } : require('../assets/avatar-placeholder.png')}
        style={{ alignSelf: 'center', marginBottom: 16 }}
      />
      <Button mode="outlined" onPress={handleAvatarSelect} style={{ marginBottom: 24 }}>
        Change Avatar
      </Button>
      {/* Nickname */}
      <TextInput
        label="Nickname"
        value={nickname}
        onChangeText={setNickname}
        style={styles.input}
      />
      {/* Language */}
      <TextInput
        label="Language"
        value={language}
        onChangeText={setLanguage}
        style={styles.input}
      />
      <Button mode="contained" onPress={() => {}} style={styles.button}>
        Update Profile
      </Button>
      {/* TODO: Add more profile fields and validation */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  input: { marginBottom: 12 },
  button: { marginTop: 16 },
});

export default ProfileScreen; 