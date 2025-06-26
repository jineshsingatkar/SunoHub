import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const RandomCallScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* User Avatar */}
      <Avatar.Image size={96} source={require('../assets/avatar-placeholder.png')} style={styles.avatar} />
      {/* Call Timer */}
      <Text style={styles.timer}>00:00</Text>
      {/* Emoji Reactions */}
      <View style={styles.emojiRow}>
        {/* TODO: Add emoji reaction buttons */}
        <Text>😀 😍 😢 😡</Text>
      </View>
      {/* Panic Button */}
      <Button mode="contained" color="#ef4444" style={styles.panicButton} onPress={() => {}}>Panic</Button>
      {/* End Call Button */}
      <Button mode="outlined" style={styles.endCallButton} onPress={() => {}}>End Call</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  avatar: { marginBottom: 24 },
  timer: { fontSize: 32, fontWeight: 'bold', marginBottom: 16 },
  emojiRow: { flexDirection: 'row', marginBottom: 24 },
  panicButton: { marginBottom: 16, width: 200 },
  endCallButton: { width: 200 },
});

export default RandomCallScreen; 