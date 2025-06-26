import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Switch, Button, List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      {/* Change App Language */}
      <List.Section>
        <List.Subheader>App Language</List.Subheader>
        {/* TODO: Replace with dropdown */}
        <Button mode="outlined" onPress={() => {}}>Change Language (Current: {language})</Button>
      </List.Section>
      {/* Notification Preferences */}
      <List.Section>
        <List.Subheader>Notifications</List.Subheader>
        <View style={styles.row}>
          <Text>Enable Notifications</Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
      </List.Section>
      {/* Privacy Info */}
      <List.Section>
        <List.Subheader>Privacy</List.Subheader>
        <Text>We respect your privacy. Your data is secure and never shared.</Text>
      </List.Section>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 8 },
});

export default SettingsScreen; 