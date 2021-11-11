import React, { useState, useEffect } from "react";
import { StyleSheet, Text,  View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Enemy = (props) => {

  const imageList = [
  "https://pm1.narvii.com/6749/a27053ce5d0a0b01814cb0e8ca4279327b1371edv2_hq.jpg",
  "https://64.media.tumblr.com/9fdfe173f115a73ab2069cc19cca32ec/tumblr_oz4rsunph01tibuboo1_1280.jpg",
  "https://i.pinimg.com/originals/3f/28/1e/3f281e7ecc4332a213337efd82e61872.jpg",
]

  const [enemyName, setEnemyName] = useState("");
  const [enemyClass, setEnemyClass] = useState("");
  const [level, setLevel] = useState(1);
  const [currHP, setCurrHP] = useState(0);
  const [maxHP, setMaxHP] = useState(0);
  const [currMana, setCurrMana] = useState(0);
  const [maxMana, setMaxMana] = useState(0);
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

  const storedInfo = {enemyName: enemyName, enemyClass: enemyClass, level: level, currHP: currHP, maxHP: maxHP, currMana: currMana,
                      maxMana: maxMana, attack: attack, defense: defense, magicalAttack: magicalAttack, magicalDefense: magicalDefense,
                      speed: speed, gearHead: gearHead, gearBody: gearBody, gearLegs: gearLegs, gearFeet: gearFeet, item1: item1, item2: item2,
                      color: color, imageListIndex: imageListIndex}

  useEffect(() => {getData()}
            ,[])

  useEffect(() => {
    setEnemyName(props.enemyName)
    setEnemyClass(props.enemyClass)
    assignColor(enemyClass)
    assignStats(enemyName)
    assignImageListIndex(enemyName)
    storeData(storedInfo)
  });

  //CURRENT
  const assignColor = (type) => {
    if (type == "Skeleton") {
      setColor("black")
    }
    else if (type == "Plague Doctor") {
      setColor("purple")
    }
  }


  //CURRENT
  const assignStats = (type) => {
    if (type == "Skeleton Archer") {
      setCurrHP(7)
      setMaxHP(7)
      setCurrMana(4)
      setMaxMana(4)
      setAttack(6)
      setDefense(2)
      setMagicalAttack(2)
      setMagicalDefense(2)
      setSpeed(6)
    }
    else if (type == "Skeleton Warrior") {
      setCurrHP(9)
      setMaxHP(9)
      setCurrMana(4)
      setMaxMana(4)
      setAttack(4)
      setDefense(4)
      setMagicalAttack(2)
      setMagicalDefense(4)
      setSpeed(4)
    }
    else if (type == "Plague Doctor") {
      setCurrHP(10)
      setMaxHP(10)
      setCurrMana(10)
      setMaxMana(10)
      setAttack(4)
      setDefense(4)
      setMagicalAttack(10)
      setMagicalDefense(4)
      setSpeed(5)
    }
  }

  //CURRENT
  const assignImageListIndex = (type) => {
    if (type == "Skeleton Archer") {
      setImageListIndex(0);
    }
    else if (type == "Skeleton Warrior") {
      setImageListIndex(1);
    }
    else if (type == "Plague Doctor") {
      setImageListIndex(2);
    }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('enemy_info', jsonValue)
        } catch (e) {
          console.dir(e)
        }
  }

  const getData = async () => {
       try {
         // the '@profile_info' can be any string
         const jsonValue = await AsyncStorage.getItem('enemy_info')
         let data = null
         if (jsonValue!=null) {
           data = JSON.parse(jsonValue)
           setEnemyName(data.enemyName)
           setEnemyClass(data.enemyClass)
           setLevel(data.level)
           setCurrHP(data.currHP)
           setMaxHP(data.maxHP)
           setCurrMana(data.currMana)
           setMaxMana(data.maxMana)
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
           setEnemyName("")
           setEnemyClass("")
           setBattleView(false)
           setLevel(1)
           setCurrHP(0)
           setMaxHP(0)
           setCurrMana(0)
           setMaxMana(0)
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

  const battleView = props.battleView;

  let enemyView = "";
  if (battleView == false) {
    enemyView =
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{flex:2}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>
            {enemyName}
          </Text>
        </View>
        <View style={{flex:1.5}}>
          <Text style={{fontSize:16, fontWeight:'bold'}}>
            Class:
            <Text style={{color:color}}> {enemyClass}</Text>
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
            <Text style={{fontWeight:'bold', color: 'green'}}>HP</Text>: {currHP}/{maxHP}{"\n"}
            <Text style={{fontWeight:'bold', color: 'darkblue'}}>Mana</Text>: {currMana}/{maxMana}{"\n"}
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
  }

  else {
    if (enemyName != '' && enemyClass != '') {
      enemyView =
      <View style={styles.container2}>
	      <View style={{flex:1}}>
          <View style={{flex:0.5}}>
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:0.5}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:color}}>
                  {enemyName}
                </Text>
              </View>
              <View style={{flex:0.5}}>
                <Text style={{fontSize:14}}>
                  Lvl: {level}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex:0.5}}>
            <View style={{flex:1, flexDirection:'row'}}>
              <View style={{flex:0.5}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'green'}}>
                  HP: {currHP}/{maxHP}
                </Text>
              </View>
              <View style={{flex:0.5}}>
                <Text style={{fontSize:14, fontWeight:'bold', color:'darkblue'}}>
                  Mana: {currMana}/{maxMana}
                </Text>
              </View>
            </View>
          </View>
   	    </View>

        <View style={{flex:2.5}}>
          <img
          style={{width:'100%', height:'100%', backgroundColor:'lightgray'}}
          src={imageList[imageListIndex]}
          alt='new' />
        </View>
      </View>
    }
    else {
      enemyView =
      <View style={{flex:1}}>
      </View>
    }
  }



  return (
      enemyView
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'darkgray',
    margin:"20px",
    padding:"20px",
    border: 'solid black',
  },
  container2: {
    backgroundColor: 'darkgray',
    padding:"5px",
    margin:"10px",
    border: 'solid black',
  },
});

export default Enemy;
