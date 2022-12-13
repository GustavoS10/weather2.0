import { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Firebase configs
import Firebase from '../../../config/connection'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

//Router
import { useNavigation } from '@react-navigation/native';

//Animatable
import * as Animatable from 'react-native-animatable'

// Styles
import styles from './style'



export default function Login() {

  const Navigation = useNavigation()

  const [user, setUser]       = useState('')
  const [password, setPass]   = useState('')
  const [btnText, setBtnT]    = useState('Login')
  const [btnText2, setBtnT2]  = useState('Register')

  const entrar = async () =>{
    setBtnT("Redirecionando...")
    try {
      let credenciais = await signInWithEmailAndPassword(getAuth(), user, password)
      if(credenciais){
        Navigation.navigate("HomeScreen")
        setTimeout(()=>{
          setBtnT("Login")
        },3000)
      }
    } catch (Exception) {
      alert("E-mail ou Senha inválidos, revise-os ou cadastre-se [!]")
      setTimeout(()=>{
        setBtnT("Login")
      },1000)
    }
  }


  return (
    <View style={styles.container}>
        <Animatable.Text delay={600} animation="fadeInDown" style={styles.title}>
            Faça seu login!
        </Animatable.Text>
        <Animatable.Text delay={600} animation="fadeInDown" style={styles.subtitle}>
            Ou crie sua conta
        </Animatable.Text>
        <Animatable.View delay={800} animation="fadeInUp" style={styles.form}>
          {/*<Image
          source={require('../../assets/Lock.png')}
          style={{width: "60%", height: "40%"}}
          />*/}
          <TextInput style={styles.formInput} required placeholder='Digite seu user' onChangeText={setUser} value={user}/>
          <TextInput style={styles.formInput} required placeholder='Digite sua senha' onChangeText={setPass} value={password} />
          <TouchableOpacity style={styles.button} onPress={entrar}>
            <Text style={styles.textButton}>{btnText}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=> Navigation.navigate("Registro")}>
            <Text style={styles.textButton}>{btnText2}</Text>
          </TouchableOpacity>
        </Animatable.View>
      <StatusBar style="auto" />
    </View>
  );
}