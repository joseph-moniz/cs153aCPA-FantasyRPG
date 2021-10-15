import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

import Profile from './Profile'
import Character from './Character'

const GameScreen = ({ navigation, route }) => {
  const { name }= route.params;
  const { difficulty }= route.params;
  const { characterName }= route.params;
  const { characterClass }= route.params;

  return (
    <View style={styles.container}>
      <Profile name={name} difficulty={difficulty} />
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
