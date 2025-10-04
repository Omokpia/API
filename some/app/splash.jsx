import { SafeAreaView } from "react-native-safe-area-context"

import { Image } from "react-native"



const Splash = () => {
    return (
        <SafeAreaView style={{backgroundColor:"#001E63", flex:1, 
        alignItems:'center', justifyContent:'center'}}>


            <Image style={{height:64,width:257, alignSelf:'center'}} 
            source={require('../assets/images/splash.png')}/>

        </SafeAreaView>
    )
}

export default Splash