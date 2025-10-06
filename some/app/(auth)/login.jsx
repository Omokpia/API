import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View , StyleSheet} from "react-native"
import authStyles from "./styles"




const Login = () => {
    return(
        <SafeAreaView style={authStyles.container}>

            <View>
                
                <Text style={loginStyles.mainText}>Welcome to CynthPay</Text>
                <Text>Type in your mobile number to get started</Text>

            </View>

        </SafeAreaView>
    )
}

export default Login;



const loginStyles = StyleSheet.create({
    mainText:{
        fontFamily:"medium",
        color:"#030517",
        fontSize:20

    }
})