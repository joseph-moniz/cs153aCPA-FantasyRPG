import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Character from './Character'
import Enemy from './Enemy'
import BattleTemplate from '../containers/BattleTemplate'
//import Battle from './Battle'

const BattleScreen = ({ navigation, route }) => {
  const { characterName }= route.params;
  const { characterClass }= route.params;

  const [showAttackList, setShowAttackList] = useState(false);

  const renderItem = ({item}) => {
    let color = "";
    if (item.type == 'basic') {
      color = 'mediumaquamarine'
    }
    else if (item.type == 'attack') {
      color = 'salmon'
    }
    return (
      <View style={{flexDirection:'row', backgroundColor:color, marginVertical:5, alignItems:'center'}}>
        <TouchableOpacity>
          <Text style={{fontSize:18}}>{item.name}</Text>
        </TouchableOpacity>
     </View>
  )}

  const attackList = [
  {
    name: 'Basic Attack',
    type: 'basic',
    damage: 3,
    cost: 0
  },
  {
    name: 'Lunge',
    type: 'attack',
    damage: 8,
    cost: 3
  },
];

  let attackListView = "";
  if (showAttackList) {
    attackListView =
    <ScrollView>
      <FlatList
        data={attackList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </ScrollView>
  }


  let character2Class = "Cleric";
  if (characterClass == 'Cleric') {
    character2Class = 'Warrior';
  }

  const character1 =  <Character characterName={characterName} characterClass={characterClass} battleView = {true}/>
  const character2 =  <Character characterName='Ally' characterClass={character2Class} battleView = {true}/>
  const character3 =  <Character characterName='' characterClass='' battleView = {true}/>

  const enemy1 = <Enemy enemyName='Skeleton Warrior' enemyClass='Skeleton' battleView = {true}/>
  const enemy2 = <Enemy enemyName='Skeleton Archer' enemyClass='Skeleton' battleView = {true}/>
  const enemy3 = <Enemy enemyName='Plague Doctor' enemyClass='Plague Doctor' battleView = {true}/>



  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:20}}>
          Current move:
          <Text style={{fontWeight:'bold'}}> {characterName}</Text>
        </Text>
      </View>
      <View style={{flex:8}}>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:0.5, flexDirection:'row', backgroundColor:'lightgray'}}>
            <View style={{flex:0.33}}>
              {character1}
            </View>
            <View style={{flex:0.33}}>
              {character2}
            </View>
            <View style={{flex:0.33}}>
              {character3}
            </View>
          </View>
          <View style={{flex:0.5, flexDirection:'row', backgroundColor:'dimgray'}}>
            <View style={{flex:0.33}}>
              {enemy1}
            </View>
            <View style={{flex:0.33}}>
              {enemy2}
            </View>
            <View style={{flex:0.33}}>
              {enemy3}
            </View>
          </View>
        </View>
    </View>
    <View style={{flex:4, flexDirection:'row'}}>
      <BattleTemplate
        fightButton =
          <Button
            title="Fight"
            color='darkred'
            onPress={() =>
              setShowAttackList(!showAttackList)
            }
          />
        attackListView = {attackListView}
        itemButton =
          <Button
            title="Item"
            color='gold'
          />
        runButton =
          <Button
            title="Run"
            color='lightblue'
            onPress={() =>
              navigation.navigate('Home')
            }
          />
        />
      <View style={{flex:0.5}}>
        <View style={{flex:0.9, justifyContent:'center', alignItems:'center', padding:"5px", margin:"5px",backgroundColor:'white',
        border:'solid black'}}>
        </View>
      </View>
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

export default BattleScreen;
