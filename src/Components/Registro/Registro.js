import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import SvgUri from 'react-native-svg-uri'
// import * as Svg from 'react-native-svg';
// import Svg, { Path } from 'react-native-svg';
import Firebase from '../../../config/connection'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//Router
import { useNavigation } from '@react-navigation/native';

//Animatable
import * as Animatable from 'react-native-animatable'

// Styles
import styles from './style'

export default function Registro() {
    const Navigation = useNavigation()
    const [user, setUser]         = useState('')
    const [password, setPass]     = useState('')
    const [btnText, setBtnT]      = useState('Register')

    const registro = async () =>{
        setBtnT("Redirecionando...")
        
        try {
          let credenciais = await createUserWithEmailAndPassword(getAuth(), user, password)
          if(credenciais){
            Navigation.navigate("Login")
            setTimeout(()=>{
              setBtnT("Register")
            },3000)
          }
      } catch (Exception) {
        alert("Erro ao cadastre-se [!]")
        setTimeout(()=>{
          setBtnT("Register")
        },1000)
      }

    }


  return (
    <View style={styles.container}>
        <Animatable.Text delay={600} animation="fadeInDown" style={styles.title}>
            Faça seu registro!
        </Animatable.Text>
        <Animatable.View delay={600} animation="fadeInUp" style={styles.form}>
          <TextInput style={styles.formInput} required placeholder='Digite seu e-mail' onChangeText={setUser} value={user}/>
          <TextInput style={styles.formInput} required placeholder='Digite sua senha' onChangeText={setPass} value={password} />
          <TouchableOpacity style={styles.button} onPress={registro}>
            <Text style={styles.textButton}>{btnText}</Text>
          </TouchableOpacity>
        </Animatable.View>
      <StatusBar style="auto" />
    </View>
  );
}