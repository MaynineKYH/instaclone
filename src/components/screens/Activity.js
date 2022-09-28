import { View, Text, ScrollView,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {FriendsProfileData} from '../screenComponents/Database'
const Activity = () => {
  return (
    <View style={{
      width:'100%',
      height:'100%',
      backgroundColor:'white'
    }}>
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        borderBottomWidth:0.5,
        borderBottomColor:'#DEDEDE',
        padding:10
      }}>
        Activity
      </Text>
      <ScrollView style={{
        margin:10
      }}>
        <Text style={{fontWeight:'bold'}}>This Week</Text>
        <View style={{flexDirection:'row',paddingVertical:10}}>
          {FriendsProfileData.slice(0,3).map((data,index)=>{
            return(
              <TouchableOpacity key={index}>
                <Text>{data.name}</Text>
              </TouchableOpacity>
            )
            })}
            <Text>Started following you</Text>
        </View>
        <Text style={{fontWeight:'bold'}}>Earlier</Text>
        {
          FriendsProfileData.slice(3,6).map((data, index)=>{
            return(
              <View key={index} style={{width:'100%'}}>
                <View style={{
                  flexDirection:'row',
                  justifyContent:'space-between',
                  alignItems:'center',
                  paddingVertical:20,
                  width:'100%'
                }}>
                <TouchableOpacity 
                  style={{
                    flexDirection:'row',justifyContent:'space-between', alignItems:'center', maxWidth:'64%'}}>
                  <Image 
                    source={data.profileImage} 
                    style={{
                      width:45, 
                      height:45, 
                      borderRadius:100, 
                      marginRight:10}}/>
                  <Text style={{fontSize:15}}>
                      <Text>
                        {data.name}
                      </Text>
                      , I'm hitman
                  </Text>
                </TouchableOpacity>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Activity

// 4 - 14:44