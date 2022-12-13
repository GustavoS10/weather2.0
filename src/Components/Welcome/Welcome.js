import { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Animatable
import * as Animatable from 'react-native-animatable'

//Navigation
import { useNavigation } from '@react-navigation/native';

// Styles
//import styles from './style'

export default function Welcome() {
  const Navigation = useNavigation()
  return (
    <View style={Styles.container}>
        <View style={Styles.cotainerLogo}>
          <Animatable.Image
            animation="flipInY"
            source={require('../../assets/cloud2.png')}
            style={{width: '100%', height: "60%"}}
            resizeMode= 'contain'
          />
        </View>
        <Animatable.View delay={600} animation="fadeInUp" style={Styles.container2}>
          <Text style={Styles.title}>
            Acorde pela manhã conferindo todas as informações do tempo em sua cidade com apenas alguns cliques!
          </Text>
          <Text style={Styles.text}>
            WeatherApp, monitore as informações climáticas da sua região, com um aplicativo fácil de se usar, feito por Gustavo Sovrani
          </Text>
          <TouchableOpacity style={Styles.button} onPress={()=> Navigation.navigate("Login")}>
            <Text style={Styles.btnText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      <StatusBar style="auto" />
    </View>
  );
}

const Styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#38a69d",
    paddingTop: 50
  },
  containerLogo:{
    flex:2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#38a69d"
  },
  container2:{
    flex:1,
   backgroundColor: "#ffffff",
   borderTopLeftRadius: 25,
   borderTopRightRadius: 25,
   paddingStart: "5%",    
   paddingEnd: "5%",    
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    marginTop:28,
    marginBottom: 12
  },
  button:{
    position: 'absolute',
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    justifyContent:"center",
    bottom: "15%",
    alignItems:"center"
  },
  btnText:{
    fontWeight:"bold",
    color:"#fff",
    fontSize: 18
  }

})