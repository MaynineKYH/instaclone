import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Post = () => {

    const postInfo = [{
        postTitle : 'youngs',
        postPersonImage : require('../../storage/images/1.jpg'),
        postImage : require('../../storage/images/4.jpg'),
        likes : 120,
        isLiked : false
    },{
        postTitle : 'youngho',
        postPersonImage : require('../../storage/images/2.jpg'),
        postImage : require('../../storage/images/8.jpg'),
        likes : 20,
        isLiked : false
    },{
        postTitle : 'ilho',
        postPersonImage : require('../../storage/images/3.jpg'),
        postImage : require('../../storage/images/2.jpg'),
        likes : 420,
        isLiked : false
    },{
        postTitle : 'yeeho',
        postPersonImage : require('../../storage/images/4.jpg'),
        postImage : require('../../storage/images/6.jpg'),
        likes :3,
        isLiked : false
    }];

  return (
    <View>
      {
        postInfo.map((data, index)=>{
            const [like, setLike] = useState(data.isLiked)
            return(
                <View key={index} style={{
                    paddingBottom:10,
                    borderBottomColor:'gray',
                    borderBottomWidth:0.1
                }}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        padding:15
                    }}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source={data.postPersonImage} style= {{width:40, height:40, borderRadius:100}}/>
                            <View style={{paddingLeft:5}}>
                                <Text style={{fontSize:15, fontWeight:'bold'}}>
                                    {data.postTitle}
                                </Text>
                            </View>
                        </View>
                        <Feather name="more-vertical" style={{fontSize:20}}  />
                    </View>
                    <View style={{
                        position:'relative',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image source={data.postImage} style={{width:'100%', height:400}}/>
                    </View>
                    <View style={{
                        flexDirection:'row', justifyContent:'space-between',
                        alignItems:'center',
                        paddingHorizontal:12,
                        paddingVertical:15
                    }}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <TouchableOpacity onPress={()=>setLike(!like)}>
                                <AntDesign name={like ? "heart" : "hearto"} style={{paddingRight:10, fontSize:20, color:like ? "red" : "Black"}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionic name="ios-chatbubble-outline" style={{fontSize:20, paddingRight:10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name="navigation"
                                style={{fontSize:20}}/>
                            </TouchableOpacity>
                        </View>
                        <Feather name="bookmark" style={{fontSize:20}}/>
                    </View>
                    <View style={{paddingHorizontal:15}}>
                        <Text>
                            {/*like ? "당신 외 " : ""*/}
                            { data.likes >0 ? "좋아요 " :""}
                            {like ? data.likes + 1 : data.likes}
                            { data.likes >0 ? "개" :""}
                        </Text>
                        <Text style={{fontWeight:'500', fontSize:14, paddingVertical:2}}>
                            가나다라
                        </Text>
                        <Text style={{opacity:0.4, paddingVertical:2}}>
                            View all comments
                        </Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={data.postPersonImage} style={{width:25, height:25, borderRadius:100, backgroundColor:'orange', marginRight:10}}/>
                                <TextInput placeholder='댓글을 입력하세요' style={{opacity:0.5}}/>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Entypo name='emoji-happy' style={{fontSize:15, color:'lightgreen',marginRight:10}}/>
                                <Entypo name='emoji-neutral' style={{fontSize:15, color:'pink', marginRight:10}}/>
                                <Entypo name='emoji-sad' style={{fontSize:15, color:'red'}}/>
                            </View>
                        </View>
                        
                    </View>
                </View>
            )
        })}
    </View>
  )
}

export default Post

// 1:21:19