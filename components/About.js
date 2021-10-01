
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About </Text>
      </View>
      <View style={{flex:1.5, backgroundColor:'darkgray', flexDirection:'row'}}>
        <View style={{flex:4, padding:10}}>
          <Text style={{fontSize:18}}>
          This game is a sword-and-sorcery turn-based RPG game. The player must build and level up a strong team of
          characters by fighting in dungeons and acquiring money and better loot and gear. Each dungeon consists of many rooms, consisting of puzzles,
          enemies, and minibosses, with a final boss at the end of the dungeon. The player beats the game by beating the final dungeon.
          </Text>
        </View>
        <View style={{flex:1}}>
        <Image
          style={{width:'100%', height: '100%'}}
          source={require('../assets/dungeon_castle.jpg')}
        />
        </View>
      </View>

      <View style={{flex:0.3, backgroundColor:'lightgray', flexDirection:'row', padding:10}}>
        <View style={{flex:0.7}}>
          <Text style={{fontSize:24, fontWeight:'bold', color:'darkred'}}>
            Combat
          </Text>
        </View>
        <View style={{flex:0.3, alignItems:'flex-start'}}>
          <img
          style={{width:'100%', height:'100%', backgroundColor:'lightgray'}}
          src='https://art.pixilart.com/e37e525c4bf9d0b.png'
          alt='new' />
        </View>
        <View style={{flex:9.4, backgroundColor:'lightgray'}}>
        </View>
      </View>

      <View style={{flex:1, backgroundColor:'lightgray', padding:10}}>
        <Text style={{fontSize:18}}>
          The combat system is turn based, with the character with the highest
          <Text style={{color:'skyblue', fontWeight:'bold'}}> speed </Text>
          stat moving first and so on. A full
          <Text style={{fontWeight:'bold'}}> turn </Text>
          ends when all characters on the screen take a turn. For each of the player's character's turns, the player can select to use a
          <Text style={{color:'brown', fontWeight:'bold'}}> basic attack</Text>
          , an
          <Text style={{color:'purple', fontWeight:'bold'}}> ability</Text>
          , or a
          <Text style={{color:'darkgreen', fontWeight:'bold'}}> combat item</Text>
          . Furthermore, there are two types of damage.
          <Text style={{color:'red', fontWeight:'bold'}}> Physical damage </Text>
          is done through basic attacks and some abilities and is calculated using Attack, while
          <Text style={{color:'blue', fontWeight:'bold'}}> magical damage </Text>
          is done through abilities and is calculated using Magical Attack.
          <Text style={{color:'orange', fontWeight:'bold'}}> Defense </Text>
          reduces damage taken from physical damage, and
          <Text style={{color:'hotpink', fontWeight:'bold'}}> Magical Defense </Text>
          reduces damage taken from magical damage.
          <Text style={{color:'green', fontWeight:'bold'}}> HP </Text>
          is the total health a character has, and the character is taken out when it reaches 0.
          <Text style={{color:'darkblue', fontWeight:'bold'}}> Mana </Text>
          is the resource used to cast abilities, which cost variable amounts of mana. An ability cannot be used if the character does
          not have enough mana to cast it.
        </Text>
      </View>

      <View style={{flex:0.3, backgroundColor:'darkgray', padding:10}}>
        <Text style={{fontSize:24, fontWeight:'bold'}}>
          Classes
        </Text>
      </View>

      <View style={{flex:1, backgroundColor:'darkgray', padding:10}}>
        <Text style={{fontSize:18}}>
          The game starts out with 5 different character classes, each with their own strengths, weaknesses, and abilities. At the end of each
          dungeon, the player will unlock a new character to be added to their team. Sometimes, the player can choose among several options to
          pick the class they want for their new character, but other times, the player is given a character that already has a class. More classes
          are unlocked as the player progresses through the game. For every class, the player can level up their character, which unlocks new
          abilities and traits for that class. For some upgrades, the player has to pick the path they want to choose, offering customization and
          unique subclasses for each class.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
  },
  headerText: {
    alignItems:'center',
    fontSize:48,
    fontWeight:'bold',
    color:'white'
  },
});

export default About;
