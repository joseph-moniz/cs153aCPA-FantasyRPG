import React, { useState, useEffect } from "react";
import { StyleSheet, Text,  View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Character = (props) => {

  const imageList = [
  "https://i0.wp.com/static.wikia.nocookie.net/for-honor/images/c/ce/Aramusha.png/revision/latest?cb=20180725010631",
  "https://64.media.tumblr.com/5d88ffbd0562cab4bd1b101a256f2b09/f30f1daff6c77ebf-5b/s2048x3072/b8542811543f59f691a58acfe7fc011ef6d445b0.jpg",
  "https://www.belloflostsouls.net/wp-content/uploads/2021/03/wizard-level-up.png",
  "https://i.pinimg.com/736x/06/74/ba/0674bae096459ffde7b3f09547543ff7.jpg",
  "https://i.pinimg.com/originals/00/65/3d/00653d68b2eb0407ccc4967c60ad9ce8.jpg"
]

  const [characterName, setCharacterName] = useState(props.characterName);
  const [characterClass, setCharacterClass] = useState(props.characterClass);
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [expForLevel, setExpForLevel] = useState(200);
  const [hp, setHP] = useState(0);
  const [mana, setMana] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [magicalAttack, setMagicalAttack] = useState(0);
  const [magicalDefense, setMagicalDefense] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [gearHead, setGearHead] = useState("");
  const [gearBody, setGearBody] = useState("");
  const [gearLegs, setGearLegs] = useState("");
  const [gearFeet, setGearFeet] = useState("");
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");

  const [color, setColor] = useState("");
  const [imageListIndex, setImageListIndex] = useState(0);

  const storedInfo = {characterName: characterName, characterClass: characterClass, level: level, exp: exp, expForLevel: expForLevel,
                      hp: hp, mana: mana, attack: attack, defense: defense, magicalAttack: magicalAttack, magicalDefense: magicalDefense,
                      speed: speed, gearHead: gearHead, gearBody: gearBody, gearLegs: gearLegs, gearFeet: gearFeet, item1: item1, item2: item2,
                      color: color, imageListIndex: imageListIndex}

  useEffect(() => {getData()}
            ,[])

  useEffect(() => {
    getColor(characterClass)
    getStats(characterClass)
    getImageListIndex(characterClass)
    storeData(storedInfo)
  });

  // let color = "";
  // if (characterClass == "Warrior") {
  //   color = "orange";
  // }
  // else if (characterClass == "Tank") {
  //   color = "darkgreen";
  // }
  // else if (characterClass == "Mage") {
  //   color = "blue";
  // }
  // else if (characterClass == "Assassin") {
  //   color = "black";
  // }
  // else if (characterClass == "Cleric") {
  //   color = "purple";
  // }

  //CURRENT
  const getColor = (type) => {
    if (type == "Warrior") {
      setColor("orange")
    }
    else if (type == "Tank") {
      setColor("darkgreen")
    }
    else if (type == "Mage") {
      setColor("blue")
    }
    else if (type == "Assassin") {
      setColor("black")
    }
    else if (type == "Cleric") {
      setColor("purple")
    }
  }

  // if (characterClass == "Warrior") {
  //   hp = 12;
  //   mana = 8;
  //   attack = 8;
  //   defense = 8;
  //   magicalAttack = 4;
  //   magicalDefense= 4;
  //   speed = 6;
  // }
  // else if (characterClass == "Tank") {
  //   hp = 14;
  //   mana = 9;
  //   attack = 3;
  //   defense = 9;
  //   magicalAttack = 3;
  //   magicalDefense= 9;
  //   speed = 3;
  // }
  // else if (characterClass == "Mage") {
  //   hp = 10;
  //   mana = 10;
  //   attack = 3;
  //   defense = 3;
  //   magicalAttack = 10;
  //   magicalDefense= 6;
  //   speed = 8;
  // }
  // else if (characterClass == "Assassin") {
  //   hp = 10;
  //   mana = 8
  //   attack = 11;
  //   defense = 3;
  //   magicalAttack = 5;
  //   magicalDefense= 3;
  //   speed = 10;
  // }
  // else if (characterClass == "Cleric") {
  //   hp = 11;
  //   mana = 10;
  //   attack = 2;
  //   defense = 4;
  //   magicalAttack = 8;
  //   magicalDefense= 8;
  //   speed = 7;
  // }

  //CURRENT
  const getStats = (type) => {
    if (type == "Warrior") {
      setHP(12)
      setMana(8)
      setAttack(8)
      setDefense(8)
      setMagicalAttack(4)
      setMagicalDefense(4)
      setSpeed(6)
    }
    else if (type == "Tank") {
      setHP(14)
      setMana(9)
      setAttack(3)
      setDefense(9)
      setMagicalAttack(3)
      setMagicalDefense(9)
      setSpeed(3)
    }
    else if (type == "Mage") {
      setHP(10)
      setMana(10)
      setAttack(3)
      setDefense(3)
      setMagicalAttack(10)
      setMagicalDefense(6)
      setSpeed(8)
    }
    else if (type == "Assassin") {
      setHP(10)
      setMana(8)
      setAttack(11)
      setDefense(3)
      setMagicalAttack(5)
      setMagicalDefense(3)
      setSpeed(10)
    }
    else if (type == "Cleric") {
      setHP(11)
      setMana(10)
      setAttack(2)
      setDefense(4)
      setMagicalAttack(8)
      setMagicalDefense(8)
      setSpeed(7)
    }
  }

  //CURRENT
  const getImageListIndex = (type) => {
    let imageListIndex = 0;
    if (type == "Warrior") {
      setImageListIndex(0);
    }
    else if (type == "Tank") {
      setImageListIndex(1);
    }
    else if (type == "Mage") {
      setImageListIndex(2);
    }
    else if (type == "Assassin") {
      setImageListIndex(3);
    }
    else if (type == "Cleric") {
      setImageListIndex(4);
    }
  }


  // let imageListIndex = 0;
  // if (characterClass == "Warrior") {
  //   imageListIndex = 0;
  // }
  // else if (characterClass == "Tank") {
  //   imageListIndex = 1;
  // }
  // else if (characterClass == "Mage") {
  //   imageListIndex = 2;
  // }
  // else if (characterClass == "Assassin") {
  //   imageListIndex = 3;
  // }
  // else if (characterClass == "Cleric") {
  //   imageListIndex = 4;
  // }

   const storeData = async (value) => {
         try {
           const jsonValue = JSON.stringify(value)
           await AsyncStorage.setItem('character_info', jsonValue)
         } catch (e) {
           console.dir(e)
         }
   }

   const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('character_info')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setCharacterName(props.characterName)
            setCharacterClass(props.characterClass)
            setLevel(data.level)
            setExp(data.exp)
            setExpForLevel(data.expForLevel)
            setHP(data.hp)
            setMana(data.mana)
            setAttack(data.attack)
            setDefense(data.defense)
            setMagicalAttack(data.magicalAttack)
            setMagicalDefense(data.magicalDefense)
            setSpeed(data.speed)
            setGearHead(data.gearHead)
            setGearBody(data.gearBody)
            setGearLegs(data.gearLegs)
            setGearFeet(data.gearFeet)
            setItem1(data.item1)
            setItem2(data.item2)
            setColor(data.color)
            setImageListIndex(data.imageListIndex)
          } else {
            setCharacterName(props.characterName)
            setCharacterClass(props.characterClass)
            setLevel(1)
            setExp(0)
            setExpForLevel(200)
            setHP(0)
            setMana(0)
            setAttack(0)
            setDefense(0)
            setMagicalAttack(0)
            setMagicalDefense(0)
            setSpeed(0)
            setGearHead("")
            setGearBody("")
            setGearLegs("")
            setGearFeet("")
            setItem1("")
            setItem2("")
            setColor("")
            setImageListIndex(0)
          }

        } catch(e) {
          console.log("error in getData")
          console.dir(e)
          // error reading value
        }
   }

   const clearAll = async () => {
         try {
           await AsyncStorage.clear()
         } catch(e) {
           console.dir(e)
         }
   }



  return (
  <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{flex:2}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>
            {characterName}
          </Text>
        </View>
        <View style={{flex:1.5}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>
            Class:
            <Text style={{color:color}}> {characterClass}</Text>
          </Text>
        </View>
      </View>
      <View style={{flex:5.5, flexDirection:'row'}}>
        <View style={{flex:2.5}}>
          <img
          style={{width:'100%', height:'100%', backgroundColor:'lightgray'}}
          src={imageList[imageListIndex]}
          alt='new' />
        </View>
        <View style={{flex:3}}>
          <Text style={{fontSize:14, paddingHorizontal:15}}>
            <Text style={{fontWeight:'bold'}}>Level</Text>: {level}{"\n"}
            <Text style={{fontWeight:'bold'}}>Exp</Text>: {exp}/{expForLevel}{"\n"}
            <Text style={{fontWeight:'bold', color: 'green'}}>HP</Text>: {hp}{"\n"}
            <Text style={{fontWeight:'bold', color: 'darkblue'}}>Mana</Text>: {mana}{"\n"}
            <Text style={{fontWeight:'bold', color: 'red'}}>Attack</Text>: {attack}{"\n"}
            <Text style={{fontWeight:'bold', color: 'blue'}}>Defense</Text>: {defense}{"\n"}
            <Text style={{fontWeight:'bold', color: 'orange'}}>Magical Attack</Text>: {magicalAttack}{"\n"}
            <Text style={{fontWeight:'bold', color: 'hotpink'}}>Magical Defense</Text>: {magicalDefense}{"\n"}
            <Text style={{fontWeight:'bold', color: 'skyblue'}}>Speed</Text>: {speed}{"\n"}
            {"\n"}
            <Text style={{fontWeight:'bold'}}>Head Gear</Text>: {gearHead}{"\n"}
            <Text style={{fontWeight:'bold'}}>Body Gear</Text>: {gearBody}{"\n"}
            <Text style={{fontWeight:'bold'}}>Leg Gear</Text>: {gearLegs}{"\n"}
            <Text style={{fontWeight:'bold'}}>Foot Gear</Text>: {gearFeet}{"\n"}
            <Text style={{fontWeight:'bold'}}>Item</Text>: {item1}{"\n"}
            <Text style={{fontWeight:'bold'}}>Item</Text>: {item2}
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
