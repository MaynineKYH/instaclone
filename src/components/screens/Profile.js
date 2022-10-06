import {
  View,
  Text
} from 'react-native'
import React from 'react'
import {
  ProfileBody,
  ProfileButtons
} from '../screenComponents/ProfileBody'

const Profile = () => {
  return ( <
    View style = {
      {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
      }
    } >
    <
    View style = {
      {
        width: '100%',
        padding: 10
      }
    } >
    <
    ProfileBody name = "User"
    accountName = "U_S_E_R"
    profileImage = {
      require('../../storage/images/batman.jpg')
    }
    followers = "3.6K"
    following = "335"
    post = "120" /
    >
    <
    ProfileButtons id = {
      0
    }
    name = "User"
    accountName = "U_S_E_R"
    profileImage = {
      require('../../storage/images/batman.jpg')
    }
    /> <
    /View> <
    /View>
  )
}

export default Profile