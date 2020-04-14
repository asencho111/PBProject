import React from 'react'
import { Alert, View } from 'react-native'


//params: votename, list of full project objects
export default function voting(params){
  try{
       
    switch(/* voting name */){
      case "Ranking vote":
        return (
          <RankingVoteComponent props = {"highest rank permitted"}></RankingVoteComponent>
        )
      case "Preference vote":
        return (
          <Preferential props = {"number of preferences"}></Preferential>
        )      
      case "Yes/No vote":
        return (
          <View>
            <YesNo></YesNo>
          </View>
        )}
  } catch(e) {Alert.alert(e.message)}
}