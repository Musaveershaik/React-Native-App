import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello, welcome to your app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Makes SafeAreaView take up the full height of the screen
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background for the safe area
  },
  container: {
    flex: 1, // Fills the available space
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // White background for the container
  },
  text: {
    color: 'white',
    backgroundColor: 'blue',
    padding: 15,
    fontSize: 18, // Larger text size for better readability
    borderRadius: 8, // Rounded corners for the text background
  },
});
