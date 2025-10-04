import { Stack } from "expo-router";
import Splash from "./splash";
import { useEffect, useState } from "react";
import {useFonts} from 'expo-font';




export default function RootLayout() {

  const [showSplash, setShowSplash] = useState(true)

  const [loaded, error] = useFonts( {

    regular: require('../assets/fonts/morrison/hinted-Morrison-Regular.otf'),
    bold: require('../assets/fonts/morrison/hinted-Morrison-Bold.otf'),
    light: require('../assets/fonts/morrison/hinted-Morrison-Light.otf'),
    medium: require('../assets/fonts/morrison/hinted-Morrison-Medium.otf'),
    semibold: require('../assets/fonts/morrison/hinted-Morrison-SemiBold.otf'), 

  })

  useEffect(() =>{

    setTimeout(() =>{

      setShowSplash(false)

    }, 5000)

  })

  if(showSplash){
    return<Splash/>
  }


  return(

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="(auth)"/>


    </Stack>

  )
}
