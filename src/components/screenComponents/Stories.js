import { View, Text, StyleSheet,ScrollView,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const Stories = () => {

    const navigation = useNavigation();

    const storyInfo = [
        {
        id:1,
        name:'Your Story',
        image: require('../../storage/images/1.jpg')
        },{
        id:0,
        name:'Youngho',
        image: require('../../storage/images/2.jpg')
        },{
        id:0,
        name:'ilho',
        image: require('../../storage/images/3.jpg')
        },{
        id:0,
        name:'yeeho',
        image: require('../../storage/images/4.jpg')
        },{
        id:0,
        name:'samho',
        image: require('../../storage/images/9.jpg')
        },{
        id:0,
        name:'saho',
        image: require('../../storage/images/8.jpg')
        }
    ];

    return (
    
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
     style={{paddingVertical:20}} >
        {storyInfo.map((data,index)=>{
            return(
                <TouchableOpacity key={index} onPress={()=>navigation.push('Status',{
                    name: data.name,
                    image: data.image
                })}>
                    <View style={{flexDirection:'column',paddingHorizontal:8,
                        position:'relative'}}>
                        {data.id == 1 ? (
                        <View style={{
                            position:'absolute',
                            bottom:15,
                            right:10,
                            zIndex:1}}>
                            <Entypo name="circle-with-plus" style={{fontSize:20, color:"#405de6",backgroundColor:'white', borderRadius:100}}/>
                        </View>
                        ) :null}
                    <View style={{width:68, height:68, 
                    backgroundColor:'white', 
                    borderWidth:1.8, 
                    borderRadius:100,
                    borderColor:'#c13584',
                    justifyContent:'center',
                    alignItems:'center'}}>
                            <Image source={data.image} 
                            style={{resizeMode:'cover', 
                            width:'92%', height:'92%', 
                            borderRadius:100,
                            backgroundColor:'orange'}}/>
                    </View>
                    <Text style={{textAlign:'center',fontSize:10, opacity: data.id == 0 ? 1 : 0.5}}>{data.name}</Text>
                    </View>
                </TouchableOpacity>
            )
        })}
    </ScrollView>
  )
};

export default Stories