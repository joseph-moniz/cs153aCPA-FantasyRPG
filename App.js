import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import MainNav from './components/MainNav.js'
import About from './components/About.js'
//import Profile from './components/Profile.js'
import Character from './components/Character.js'
import GameScreen from './components/GameScreen.js'

export default function App() {
  return (
    <MainNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
