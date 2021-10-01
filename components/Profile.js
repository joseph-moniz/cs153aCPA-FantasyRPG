import React, { useState } from "react";
import { StyleSheet, Text,  View } from "react-native";


const Profile = (props) => {
  const  username = props.name;
  const  difficulty = props.difficulty;
  let color = "";
  if (props.difficulty == "Easy") {
    color = "skyblue";
  }
  else if (props.difficulty == "Medium") {
    color = "green";
  }
  else if (props.difficulty == "Hard") {
    color = "red";
  }
  else {
    color = "darkred";
  }

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
