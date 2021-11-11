import React from "react";
import {View} from 'react-native'


const BattleTemplate = ({fightButton, attackListView, itemButton, runButton}) => {
  return (
    <View style={{flex:0.5, flexDirection:'row'}}>
      <View style={{flex:0.2, alignItems:'center', padding:10}}>
        {fightButton}
      </View>
      <View style={{flex:0.2, alignItems:'center', padding:10}}>
        {attackListView}
      </View>
      <View style={{flex:0.2, alignItems:'center', padding:10}}>
        {itemButton}
      </View>
      <View style={{flex:0.2, alignItems:'center', padding:10}}>
      </View>
      <View style={{flex:0.2, alignItems:'center', padding:10}}>
        {runButton}
      </View>
    </View>

  )
}

export default BattleTemplate
