import { View, Text, Image } from 'react-native'
import React from 'react'

const ProfileBody = ({
    name,
    post,
    profileImage,
    accountName,
    followers,
    following
}) => {
  return (
    <View>
      {accountName ? null : (
            <View>
                <View>
                    <Image source={profileImage} style={{
                        resizeMode : 'cover',
                        width:80,
                        height:80,
                        borderRadius:100,
                    }}/>
                    <Text style={{
                        paddingVertical:5,
                        fontWeight:'bold'
                    }}>
                    {name}
                    </Text>
                </View>
            </View>
        )
      }
    </View>
  )
}

export default ProfileBody

//4 - 4:34