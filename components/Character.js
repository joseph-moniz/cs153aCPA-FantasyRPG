import React, { useState } from "react";
import { StyleSheet, Text,  View, Button } from "react-native";


const Character = (props) => {


  const characterName = props.characterName;
  const characterClass = props.characterClass;
  const level = 1;
  const exp = 0;
  const expForLevel = 200;
  let hp = 0;
  let attack = 0;
  let defense = 0;
  let magicalAttack = 0;
  let magicalDefense = 0;
  let speed = 0;
  const gearHead = "";
  const gearBody = "";
  const gearLegs = "";
  const gearFeet = "";
  const item1 = "";
  const item2 = "";

  let color = "";
  if (characterClass == "Warrior") {
    color = "orange";
  }
  else if (characterClass == "Tank") {
    color = "darkgreen";
  }
  else if (characterClass == "Mage") {
    color = "blue";
  }
  else if (characterClass == "Assassin") {
    color = "black";
  }
  else if (characterClass == "Cleric") {
    color = "purple";
  }

  if (characterClass == "Warrior") {
    hp = 12;
    attack = 7;
    defense = 7;
    magicalAttack = 4;
    magicalDefense= 4;
    speed = 6;
  }
  else if (characterClass == "Tank") {
    hp = 14;
    attack = 3;
    defense = 9;
    magicalAttack = 3;
    magicalDefense= 9;
    speed = 2;
  }
  else if (characterClass == "Mage") {
    hp = 10;
    attack = 3;
    defense = 3;
    magicalAttack = 10;
    magicalDefense= 6;
    speed = 8;
  }
  else if (characterClass == "Assassin") {
    hp = 10;
    attack = 10;
    defense = 3;
    magicalAttack = 5;
    magicalDefense= 3;
    speed = 9;
  }
  else if (characterClass == "Cleric") {
    hp = 11;
    attack = 2;
    defense = 4;
    magicalAttack = 8;
    magicalDefense= 8;
    speed = 7;
  }


    const imageList = [
    "https://i0.wp.com/static.wikia.nocookie.net/for-honor/images/c/ce/Aramusha.png/revision/latest?cb=20180725010631",
    "https://64.media.tumblr.com/5d88ffbd0562cab4bd1b101a256f2b09/f30f1daff6c77ebf-5b/s2048x3072/b8542811543f59f691a58acfe7fc011ef6d445b0.jpg",
    "https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png",
    "https://i.pinimg.com/736x/06/74/ba/0674bae096459ffde7b3f09547543ff7.jpg",
    "https://i.pinimg.com/originals/00/65/3d/00653d68b2eb0407ccc4967c60ad9ce8.jpg"
  ]

    let imageListIndex = 0;
    if (characterClass == "Warrior") {
      imageListIndex = 0;
    }
    else if (characterClass == "Tank") {
      imageListIndex = 1;
    }
    else if (characterClass == "Mage") {
      imageListIndex = 2;
    }
    else if (characterClass == "Assassin") {
      imageListIndex = 3;
    }
    else if (characterClass == "Cleric") {
      imageListIndex = 4;
    }

  return (
  <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{flex:0.5}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>
            {characterName}
          </Text>
        </View>
        <View style={{flex:0.5}}>
          <Text style={{fontSize:18}}>
            Class:
            <Text style={{color:color, fontWeight:'bold'}}> {characterClass}</Text>
          </Text>
        </View>
      </View>
      <View style={{flex:5, flexDirection:'row'}}>
        <View style={{flex:2.5}}>
          <img
          style={{width:'100%', height:'100%', backgroundColor:'lightgray'}}
          src={imageList[imageListIndex]}
          alt='new' />
        </View>
        <View style={{flex:2.5}}>
          <Text style={{fontSize:14, paddingHorizontal:15}}>
            Level: {level}{"\n"}
            Exp: {exp}/{expForLevel}{"\n"}
            HP: {hp}{"\n"}
            Attack: {attack}{"\n"}
            Defense: {defense}{"\n"}
            Magical Attack: {magicalAttack}{"\n"}
            Magical Defense: {magicalDefense}{"\n"}
            Speed: {speed}{"\n"}
            {"\n"}
            Head Gear: {gearHead}{"\n"}
            Body Gear: {gearBody}{"\n"}
            Leg Gear: {gearLegs}{"\n"}
            Foot Gear: {gearFeet}{"\n"}
            Item: {item1}{"\n"}
            Item: {item2}
          </Text>
        </View>
      </View>
  </View>

  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'darkgray',
    margin:"20px",
    padding:"20px",
    border: 'solid black',
  },
});

export default Character;
