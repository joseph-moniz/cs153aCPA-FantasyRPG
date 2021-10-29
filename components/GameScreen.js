import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Character from './Character'
//import { usernameGlobal } from './global.js'

const GameScreen = ({ navigation, route }) => {
  const { username }=route.params;
  const { difficulty }=route.params;
  const { characterName }= route.params;
  const { characterClass }= route.params;

  let color = "";
  if (difficulty == "Easy") {
    color = "skyblue";
  }
  else if (difficulty == "Medium") {
    color = "green";
  }
  else if (difficulty == "Hard") {
    color = "red";
  }
  else {
    color = "darkred";
  }

  return (
    <View style={styles.container}>
      <View style={{flex:0.5, alignItems:'center'}}>
        <Text style={{fontSize:38, fontWeight:'bold'}}>
          {username}'s Profile
        </Text>
        <Text style={{fontSize:20, fontWeight:'bold'}}>
          Difficulty: <Text style={{color: color}}>{difficulty}</Text>
        </Text>
      </View>
      <View>
        <Text style={{fontSize:24, fontWeight:'bold'}}>
          Characters:
        </Text>
      </View>
      <View style={{flex:3, flexDirection:'row'}}>
        <View style={{flex:1}}>
          <Character characterName={characterName} characterClass={characterClass} />
        </View>
        <View style={{flex:2}}>
        </View>
      </View>
      <View style = {{flex:0.25, alignItems:'center'}}>
      <Button
        title="Home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
});

export default GameScreen
