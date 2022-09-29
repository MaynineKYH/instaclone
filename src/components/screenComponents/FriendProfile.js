import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import ProfileBody from './ProfileBody'

const FriendProfile = ({route, navigation}) => {
    const {name, profileImage, follow ,following, followers, post} = route.params;
    return (
    <View style={{width:'100%', height:'100%', backgroundColor:'white', padding:10}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}> 
            <Ionic name="arrow-back" style={{fontSize:20, color:'black'}}/>
        </TouchableOpacity>
            <View 
                style={{flexDirection:'row',  justifyContent:'space-between',alignItems:'center', width:'92%'}}>
                    <Text style={{fontSize:15, marginLeft:10, fontWeight:'bold'}}>
                    {name}
                    </Text>
                <Feather name="more-vertical" style={{fontSize:20, color:'black'}}/>
            </View>
        </View>
      <ProfileBody 
       name={name}
       profileImage={profileImage}
       post={post}
       followers={followers}
       following={following}
       />
    </View>
  )
}

export default FriendProfile

//import 주의 ! 