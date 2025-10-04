import { Stack } from "expo-router"




const AuthLayout = () => {
    return(
        <Stack screenOptions={{headerShown:false}}>
            
            <Stack.Screen name="login"/>
            <Stack.Screen name="sign-up"/>
            <Stack.Screen name="verification"/>

        </Stack>
    )
}

export default AuthLayout;