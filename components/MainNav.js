import * as React from 'react';
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, TextInput, View, Button, Image} from 'react-native';

import AboutScreen from './About'
import GameScreen from './GameScreen'
import Profile from './Profile'
import Character from './Character'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
         <Stack.Screen
           name="About"
           component={AboutScreen}
         />

         <Stack.Screen
           name="Create Profile"
           component={CreateProfileScreen}
         />

         <Stack.Screen
           name="Game"
           component={GameScreen}
         />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fantasy Dungeon RPG Game </Text>
      </View>
      <View style={{flex:1.5, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', backgroundColor:'gray'}}>
        <Button
          title="About"
          onPress={() =>
            navigation.navigate('About')
          }
        />
        <Button
          title="New Game"
          color='darkgreen'
          onPress={() =>
            navigation.navigate('Create Profile')
          }
        />
      </View>

      <View style={{flex:8, flexDirection:'row'}}>
        <Image
            style={{width:'100%', resizeMode: 'contain', backgroundColor:'gray'}}
            source={{uri:'https://s1.1zoom.me/b5050/913/Castles_Dragons_448011_2560x1440.jpg'}}
        />
      </View>

      <View style={{flex:0.25, backgroundColor:'darkgray', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:12}}>Joseph Moniz</Text>
      </View>
    </View>
  );
};

const CreateProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');

  // const storedInfo = {name: name, difficulty: difficulty, characterName: characterName, characterClass: characterClass}
  //
  // useEffect(() => {getData()}
  //          ,[])
  //
  //  const storeData = async (value) => {
  //        try {
  //          const jsonValue = JSON.stringify(value)
  //          await AsyncStorage.setItem('profile_and_character_info', jsonValue)
  //        } catch (e) {
  //          console.dir(e)
  //        }
  //  }
  //
  //  const getData = async () => {
  //       try {
  //         // the '@profile_info' can be any string
  //         const jsonValue = await AsyncStorage.getItem('profile_and_character_info')
  //         let data = null
  //         if (jsonValue!=null) {
  //           data = JSON.parse(jsonValue)
  //           setName(data.name)
  //           setDifficulty(data.difficulty)
  //           setCharacterName(data.characterName)
  //           setCharacterClass(data.characterClass)
  //
  //         } else {
  //           setName("")
  //           setDifficulty("")
  //           setCharacterName("")
  //           setCharacterClass("")
  //         }
  //
  //       } catch(e) {
  //         console.log("error in getData")
  //         console.dir(e)
  //         // error reading value
  //       }
  //  }
  //
  //  const clearAll = async () => {
  //        try {
  //          await AsyncStorage.clear()
  //        } catch(e) {
  //          console.dir(e)
  //        }
  //  }

  return (
    <View style={styles.container}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'black'}}>
        <Text style={{fontSize:32, fontWeight:'bold', color:'white', alignItems:'center'}}>
          Create Profile
        </Text>
      </View>
      <View style={{flex:1, backgroundColor:'darkgray', padding:5}}>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:1, justifyContent:'center', padding:5}}>
            <Text style={{fontSize:14}}>
              Username:
            </Text>
          </View>
          <View style={{flex:1, justifyContent:'center'}}>
            <TextInput style={{fontSize:14}} placeholder="Enter Username"
            onChangeText={text => {setName(text)}}
            />
          </View>
          <View style={{flex:8}}>
          </View>
        </View>
        <View style={{flex:0.5, flexDirection:'row'}}>
          <View style={{flex:1, justifyContent:'center', padding:5}}>
            <Text style={{fontSize:14}}>
              Difficulty:
            </Text>
          </View>
          <View style={{flex:4, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Button
              title="Easy"
              color="skyblue"
              onPress={() =>
                setDifficulty("Easy")
              }
            />
            <Button
              title="Medium"
              color='green'
              onPress={() =>
                setDifficulty("Medium")
              }
            />
            <Button
              title="Hard"
              color='red'
              onPress={() =>
                setDifficulty("Hard")
              }
            />
            <Button
              title="Expert"
              color='darkred'
              onPress={() =>
                setDifficulty("Expert")
              }
            />
          </View>
          <View style={{flex:5}}>
          </View>
        </View>
      </View>


      <View style={{flex:0.5, backgroundColor:'lightgray', alignItems:'center'}}>
        <Text style={{fontSize:16, fontWeight:'bold', padding:5}}>
          Class for First Character!
        </Text>
      </View>

      <View style={{flex:6.5, backgroundColor:'lightgray'}}>
        <View style={{flex:0.25, flexDirection:'row'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
              title="Warrior"
              color='orange'
              onPress={() =>
                setCharacterClass("Warrior")
              }
            />
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
              title="Tank"
              color='darkgreen'
              onPress={() =>
                setCharacterClass("Tank")
              }
            />
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
              title="Mage"
              color='blue'
              onPress={() =>
                setCharacterClass("Mage")
              }
            />
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
              title="Assassin"
              color='black'
              onPress={() =>
                setCharacterClass("Assassin")
              }
            />
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button
              title="Cleric"
              color='purple'
              onPress={() =>
                setCharacterClass("Cleric")
              }
            />
          </View>
        </View>

        <View style={{flex:0.75, flexDirection:'row'}}>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
            <Text style={{fontSize:12}}>
              Strong balance of HP, Attack, Defense, and Speed. Low Magical Attack and Magical Defense.
            </Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
            <Text style={{fontSize:12}}>
              Very durable with high HP, Defense, Magical Defense, and crowd control. Low Speed
              and damage output.
            </Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
            <Text style={{fontSize:12}}>
              Extremely high Magical Attack with good Magical Defense and Speed.
              Low HP, Attack, and Defense.
            </Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
            <Text style={{fontSize:12}}>
              High Speed and exceptional Attack. Very poor HP, Defense, and Magical Defense.
            </Text>
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent:'center', padding:5}}>
            <Text style={{fontSize:12}}>
              Heals and protects allies with decent Magical Attack and Magical Defense. Low HP, Attack, and Defense.
            </Text>
          </View>
        </View>

        <View style={{flex:5, flexDirection:'row'}}>
          <View style={{flex:1, alignItems:'center'}}>
            <Image
              style={{width:'100%', height: '100%'}}
              source={require('../assets/warrior.png')}
            />
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            <Image
              style={{width:'100%', height: '100%'}}
              source={require('../assets/tank.jpg')}
            />
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            <Image
              style={{width:'100%', height: '100%'}}
              source={require('../assets/mage.png')}
            />
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            <Image
              style={{width:'100%', height: '100%'}}
              source={require('../assets/assassin.jpg')}
            />
          </View>
          <View style={{flex:1, alignItems:'center'}}>
            <Image
              style={{width:'100%', height: '100%'}}
              source={require('../assets/cleric.jpg')}
            />
          </View>
        </View>

      </View>

      <View style={{flex:0.5, flexDirection:'row', backgroundColor:'lightgray', padding:5}}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:14}}>
            Character Name:
          </Text>
        </View>
        <View style={{flex:3, justifyContent:'center'}}>
          <TextInput style={{fontSize:14}} placeholder="Enter Character Name"
          onChangeText={text => {setCharacterName(text)}}
          />
        </View>
        <View style={{flex:4, flexDirection:'row', justifyContent:'space-evenly'}}>
          <Button
            title="View Profile"
            onPress={() =>
              navigation.navigate('Game', {name: name, difficulty: difficulty, characterName: characterName, characterClass: characterClass})
            }
          />
          <Button
            title="Clear"
            onPress={() =>
              clearAll()
            }
          />
        </View>
        <View style={{flex:4}}>
        </View>
      </View>

    </View>

  );
};

// const GameScreen = ({ navigation, route }) => {
//   const { name } = route.params.name;
//   const { difficultySetting } = route.params.difficulty;
//   const { characterName } = route.params.characterName;
//   const { characterClass } = route.params.characterClass;
//
//   return (
//     <View style={styles.container}>
//       <View style={{fontSize:24}}>
//         <Text>{name}</Text>
//       </View>
//       <View style={{fontSize:24}}>
//         <Text>{difficultySetting}</Text>
//       </View>
//       <View style={{fontSize:24}}>
//         <Text>{characterName}</Text>
//       </View>
//       <View style={{fontSize:24}}>
//         <Text>{characterClass}</Text>
//       </View>
//     </View>
//   );
// };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
  },
  header: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    backgroundColor:'black'
  },
  headerText: {
    alignItems:'center',
    fontSize:48,
    fontWeight:'bold',
    color:'white'
  },
});

export default MyStack;
