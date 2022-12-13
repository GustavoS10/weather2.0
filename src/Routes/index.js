import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../Components/Login/Login'
import Home from '../Components/HomeS/Home'
import Welcome from '../Components/Welcome/Welcome'
import Registro from "../Components/Registro/Registro";
import HomeScreen from "../Components";

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}