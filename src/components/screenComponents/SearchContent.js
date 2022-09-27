import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchContent = (props) => {

    const searchData = [
        {
            id:0,
            images:[
                require("../../storage/images/1.jpg"),
                require("../../storage/images/2.jpg"),
                require("../../storage/images/3.jpg"),
                require("../../storage/images/4.jpg"),
                require("../../storage/images/5.jpg"),
                require("../../storage/images/6.jpg")
            ]
        },
        {
            id:1,
            images:[
                require("../../storage/images/7.jpg"),
                require("../../storage/images/8.jpg"),
                require("../../storage/images/9.jpg"),
                require("../../storage/images/1.jpg"),
                require("../../storage/images/2.jpg"),
                require("../../storage/images/3.jpg")
            ]
        },
        {
            id:2,
            images:[
                require("../../storage/images/4.jpg"),
                require("../../storage/images/5.jpg"),
                require("../../storage/images/6.jpg"),
                require("../../storage/images/7.jpg"),
                require("../../storage/images/8.jpg"),
                require("../../storage/images/9.jpg")
            ]
        }
    ]

  return (
    <View>
      {
        searchData.map((data, index) =>{
            return(
                <>
                {
                    data.id === 0 ?
                    (
                        <View style={{
                            flexDirection:'row',
                            flexWrap:'wrap',
                            justifyContent:'space-between',
                        }}>
                            {data.images.map((imageData, imgIndex)=>{
                                    return(
                                        <TouchableOpacity 
                                        onPressIn={()=>props.data(imageData)}
                                        onPressOut={()=>props.data(null)}
                                        style={{paddingBottom:2}}>
                                            <Image source={imageData} style={{width:132, height:150}}/>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    ) : null}
                {
                    data.id === 1 ? (
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between',
                        }}>
                            <View style={{
                                flexDirection:'row',
                                flexWrap:'wrap',
                                width:272,
                                justifyContent:'space-between'
                            }}>
                            {
                                data.images.slice(0,4).map((imageData, imgIndex)=>{
                                    return(
                                        <TouchableOpacity 
                                        onPressIn={()=>props.data(imageData)}
                                        onPressOut={()=>props.data(null)}
                                        style={{paddingBottom:2}}>
                                        <Image source={imageData} style={{width:132, height:150}}/>
                                    </TouchableOpacity>
                                    )
                                })}
                            </View>
                            <TouchableOpacity
                            onPressIn={()=>props.data(data.images[5])}
                            onPressOut={()=>props.data(null)}
                            >
                                <Image source={data.images[5]}
                                style={{width:132, height:300}}/>
                            </TouchableOpacity>
                        </View>
                    ) : null
                }
                {
                    data.id === 2 ? (
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-between'
                        }}>
                            <TouchableOpacity 
                            style={{paddingRight:2}}
                            onPressIn={()=>props.data(data.images[2])}
                            onPressOut={()=>props.data(null)}
                            >
                                <Image source={data.images[2]}
                                style={{width:272, height:300}}/>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row',
                        flexWrap:'wrap', width:132, justifyContent:'space-between'}}>
                                {
                                    data.images.slice(0,2).map((imageData, imgIndex)=>{
                                        return(
                                            <TouchableOpacity 
                                            onPressIn={()=>props.data(imageData)}
                                            onPressOut={()=>props.data(null)}
                                            style={{paddingBottom:2}}>
                                                <Image source={imageData} style={{width:132, height:150}}/>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>

                        </View>
                    ) : null
                }
                </>
            )
    })}
    </View>
  )
}

export default SearchContent