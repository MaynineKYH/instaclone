import { View,Image, Text,TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'


const EditProfile = ({route, navigation}) => {
  const {name, accountName, profileImage} = route.params;
  const TostMessage=()=>{
    ToastAndroid.show('프로필 수정 완료', ToastAndroid.SHORT);
  }
  return (
    <View style={{
      width:'100%',
      height:'100%',
      backgroundColor:'white'
    }}>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
      }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Ionic name='close-outline' style={{fontSize:35}}/>
        </TouchableOpacity>
        <Text style={{fontSize:16, fontWeight:'bold'}}>Edit profile</Text>
        <TouchableOpacity onPress={()=>{
          TostMessage();
          navigation.goBack()}}>
          <Ionic name='checkmark' style={{fontSize:35, color:'#3493D9'}}/>
        </TouchableOpacity>
      </View>
      <View style={{padding:20, alignItems:'center'}}>
        <Image source={profileImage} style={{width:80, height:80, borderRadius:100}}/>
        <Text style={{
          color:'#3493D9'
        }}>
          Change profile photo
        </Text>
      </View>
      <View style={{
        padding:10
      }}>
        <View  style={{paddingVertical:10}}>
          <Text style={{
            opacity:0.5
          }}>Name</Text>
          <TextInput placeholder='name' defaultValue={name} style={{
            fontSize:16,
            borderBottomWidth:1,
            borderColor:'#CDCDCD'
          }}/>
        </View>
        <View style={{paddingVertical:10}}>
          <Text style={{
            opacity:0.5
          }}>Username</Text>
          <TextInput placeholder='accountName' defaultValue={accountName} style={{
            fontSize:16,
            borderBottomWidth:1,
            borderColor:'#CDCDCD'
          }}/>
        </View>
        <View style={{paddingVertical:10}}>
          <Text style={{
            opacity:0.5
          }}>Website</Text>
          <TextInput placeholder='Website' style={{
            fontSize:16,
            borderBottomWidth:1,
            borderColor:'#CDCDCD'
          }}/>
        </View>
        <View style={{paddingVertical:10}}>
          <Text style={{
            opacity:0.5
          }}>Bio</Text>
          <TextInput placeholder='Bio' style={{
            fontSize:16,
            borderBottomWidth:1,
            borderColor:'#CDCDCD'
          }}/>
        </View>
      </View>
      <View>
        <Text style={{
          marginVertical:10, padding:10, color:'#3493D9', borderTopWidth:1, borderBottomWidth:1, borderColor:'#EFEFEF'
        }}>
          Switch to Professional accounts
        </Text>
        <Text style={{
          marginVertical:10, padding:10, color:'#3493D9', borderTopWidth:1, borderBottomWidth:1, borderColor:'#EFEFEF'
        }}>
          Personal information setting
        </Text>
      </View>
    </View>
  )
}

export default EditProfile