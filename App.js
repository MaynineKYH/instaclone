import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home'
import Search from './src/components/screens/Search'
import Reels from './src/components/screens/Reels'
import Activity from './src/components/screens/Activity'
import Profile from './src/components/screens/Profile'
import Ionic from 'react-native-vector-icons/Ionicons'
import Status from './src/components/screenComponents/Status';
import FriendProfile from './src/components/screenComponents/FriendProfile'

/* Android Emulator Pixel_3_XL_API_30 기준 */

export default function App() {

  
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const bottomTabScreen = ()=>{
    return(
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarHideOnKeyboard:true,
        tabBarShowLabel:false,
        headerShown:false,
        tabBarStyle:{
          height:50
        },
        tabBarIcon:({focus, size, colour})=>{
          let iconName;
          if(route.name === "Home"){
            iconName = focus ? "home-sharp" : "home-outline";
            size = focus ? size + 8 : size + 2 ;
          
          }else if(route.name=== "Search"){
            iconName = focus ? "search" : "ios-search-outline"
          
          }else if(route.name=== "Reels"){
            iconName = focus ? "caret-forward-circle" : "caret-forward-circle-outline"
          
          }else if(route.name=== "Activity"){
            iconName = focus ? "ios-heart" : "ios-heart-outline"
            
          }else if(route.name=== "Profile"){
            iconName = focus ? "ios-person-circle" : "ios-person-outline"
          }

          return <Ionic name={iconName} size={size} color={colour}/>
        }
      })}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Reels" component={Reels}/>
        <Tab.Screen name="Activity" component={Activity}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
        }}>
        <Stack.Screen name="bottom" component={bottomTabScreen}/>
        <Stack.Screen name="Status" component={Status}/>
        <Stack.Screen name="FriendProfile" component={FriendProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//https://webnautes.tistory.com/1422 깃헙참고


// mockpath module error )mockpath 중복으로 오류발생_ 하위폴더의 github 관련 repository 폴더 제거하면 모듈 실행됨 

//navigation route.params