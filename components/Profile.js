import React, { useState, useEffect } from "react";
import { StyleSheet, Text,  View, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = (props) => {

  const [username, setUsername] = useState(props.name);
  const [difficulty, setDifficulty] = useState(props.difficulty);

  const [color, setColor] = useState("");
  // if (props.difficulty == "Easy") {
  //   setColor("skyblue");
  // }
  // else if (props.difficulty == "Medium") {
  //   setColor("green");
  // }
  // else if (props.difficulty == "Hard") {
  //   setColor("red");
  // }
  // else {
  //   setColor("darkred");
  // }

  const storedInfo = {username: username, difficulty: difficulty, color: color}

  // useEffect(() => {getData()}
  //          ,[])

  useEffect(() => {
   if (props.difficulty == "Easy") {
     setColor("skyblue")
   }
   else if (props.difficulty == "Medium") {
     setColor("green")
   }
   else if (props.difficulty == "Hard") {
     setColor("red")
   }
   else {
     setColor("darkred")
   }
   //storeData(storedInfo)
  });

  // let color = "";
  // if (props.difficulty == "Easy") {
  //   color = "skyblue";
  // }
  // else if (props.difficulty == "Medium") {
  //   color = "green";
  // }
  // else if (props.difficulty == "Hard") {
  //   color = "red";
  // }
  // else {
  //   color = "darkred";
  // }

  // const getData = async () => {
  //      try {
  //        // the '@profile_info' can be any string
  //        const jsonValue = await AsyncStorage.getItem('profile_info')
  //        let data = null
  //        if (jsonValue!=null) {
  //          data = JSON.parse(jsonValue)
  //          setUsername(data.username)
  //          setDifficulty(data.difficulty)
  //          setColor(data.color)
  //
  //        } else {
  //          setUsername("")
  //          setDifficulty("")
  //          setColor("")
  //        }
  //
  //      } catch(e) {
  //        console.log("error in getData")
  //        console.dir(e)
  //        // error reading value
  //      }
  // }
  //
  // const storeData = async (value) => {
  //       try {
  //         const jsonValue = JSON.stringify(value)
  //         await AsyncStorage.setItem('profile_info', jsonValue)
  //       } catch (e) {
  //         console.dir(e)
  //       }
  // }
  //
  // const clearAll = async () => {
  //       try {
  //         await AsyncStorage.clear()
  //       } catch(e) {
  //         console.dir(e)
  //       }
  // }

  return (
  <View style={styles.container}>
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:38, fontWeight:'bold'}}>
        {username}'s Profile
      </Text>
      <Text style={{fontSize:16}}>
        Difficulty Setting:
        <Text style={{color:color, fontWeight:'bold'}}> {difficulty}</Text>
      </Text>
    </View>
    <View>
      <Text style={{fontSize:24, fontWeight:'bold'}}>
        Characters:
      </Text>
    </View>
  </View>

      );
    }
  const styles = StyleSheet.create ({
    container: {
      backgroundColor: 'darkgray',
      margin:"20px",
      padding:"20px",
    },
  });

export default Profile;
