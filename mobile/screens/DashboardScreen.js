import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Card, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  // Placeholder data
  const onlineUsers = 12;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      {/* Online Users Count */}
      <Card style={styles.card}>
        <Card.Content>
          <Text>Online Users: {onlineUsers}</Text>
        </Card.Content>
      </Card>
      {/* Action Buttons */}
      <Button mode="contained" style={styles.button} onPress={() => {}}>Start Random Call</Button>
      <Button mode="outlined" style={styles.button} onPress={() => {}}>Write Confession</Button>
      <Button mode="outlined" style={styles.button} onPress={() => {}}>Record Voice Confession</Button>
      <Button mode="outlined" style={styles.button} onPress={() => {}}>Join Public Room</Button>
      {/* Story Feed Preview */}
      <Text style={styles.sectionTitle}>Story Feed</Text>
      {/* TODO: Render story feed preview here */}
      <View style={styles.storyFeedPlaceholder}>
        <Text>Story feed preview goes here...</Text>
      </View>
      {/* Bottom Navigation Placeholder */}
      <View style={styles.bottomNav}>
        <Text>Bottom Navigation (Home, Rooms, Profile, Settings)</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: { marginBottom: 16 },
  button: { marginBottom: 8 },
  sectionTitle: { marginTop: 24, fontWeight: 'bold' },
  storyFeedPlaceholder: { height: 80, backgroundColor: '#f3f4f6', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginVertical: 8 },
  bottomNav: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 56, backgroundColor: '#e5e7eb', justifyContent: 'center', alignItems: 'center' },
});

export default DashboardScreen; 