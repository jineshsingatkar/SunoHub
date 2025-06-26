import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const participants = [
  { id: '1', nickname: 'Alice', avatar: null },
  { id: '2', nickname: 'Bob', avatar: null },
  // Add more participants as needed
];

const PublicRoomScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Public Room</Text>
      {/* Mic Request Button */}
      <Button mode="contained" onPress={() => {}} style={styles.button}>Request Mic</Button>
      {/* Participant List */}
      <Text style={styles.sectionTitle}>Participants</Text>
      <FlatList
        data={participants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.participantRow}>
            <Avatar.Image size={40} source={item.avatar ? { uri: item.avatar } : require('../assets/avatar-placeholder.png')} />
            <Text style={styles.nickname}>{item.nickname}</Text>
          </View>
        )}
        style={styles.list}
      />
      {/* Emoji Reactions */}
      <View style={styles.emojiRow}>
        <Text>😀 😍 😢 😡</Text>
      </View>
      {/* Panic Button */}
      <Button mode="contained" color="#ef4444" style={styles.panicButton} onPress={() => {}}>Panic</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  button: { marginBottom: 16 },
  sectionTitle: { fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  list: { marginBottom: 16 },
  participantRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  nickname: { marginLeft: 12 },
  emojiRow: { flexDirection: 'row', marginBottom: 16 },
  panicButton: { marginTop: 8 },
});

export default PublicRoomScreen; 