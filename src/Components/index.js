import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Components
import Home from './HomeS/Home';
import Search from './Search/Search'

const Tab = createMaterialBottomTabNavigator();
export default function HomeScreen() {
  return (
       <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
             let iconName;

             {
               if (route.name === 'Home') {
                 iconName = focused
                   ? 'home-outline'
                   : 'home-outline';
               } else if (route.name === 'Search') {
                 iconName = focused ? 'search-outline' : 'search-outline';
               } else if (route.name === 'Weeks') {
                 iconName = focused ? 'calendar-outline' : 'calendar-outline';
               } else if (route.name === 'Comment') {
                 iconName = focused ? 'alert-circle-outline' : 'alert-circle-outline';
               }

             // You can return any component that you like here!
               return <Ionicons name={iconName} size={20} color={color} />;
             }
           },
           tabBarActiveTintColor: 'tomato',
           tabBarInactiveTintColor: 'gray',
         })}
         initialRouteName="Home"
         activeColor="#FFF"
         inactiveColor="#c1c1c1" 
         barStyle={{backgroundColor: "#38a69d", height: 60 }}>
         <Tab.Screen name="Home" component={Home}/>
         <Tab.Screen name="Search" component={Search}/>
       </Tab.Navigator>
  );
}
