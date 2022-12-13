import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';

export default function Search() {
    const City = []
    const key = '005e1eb391604076adf211541221312'
    const [query, setQuery]             = useState('')
    const [name, setName]               = useState(null)
    const [country, setCountry]         = useState(null)
    const [uTime, setUTime]             = useState(null)
    const [condition, setCondition]     = useState(null)
    const [temp, setTemp]               = useState(null)
    const [wind, setWind]               = useState(null)
    const [wDirection, setWD]           = useState(null)
    // Modal
    const [modalVisible, setModalVisible] = useState(false);

    const submit = ()=>{
      fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&lang=pt`)
      .then((response) => {return (response.json())})
      .then(data=> dados(data))
    }
    const dados = (data) => {
      City.push(data)
      setName(data.location.name);
      setCountry(data.location.country);
      setUTime(data.current.last_updated);
      setCondition(data.current.condition.text);
      setTemp(data.current.temp_c);
      setWind(data.current.wind_kph);
      setWD(data.current.wind_dir);
      setModalVisible(!modalVisible);
    }
  
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View style={styles.form}>
        <TextInput style={styles.formInput} onChangeText={setQuery} value={query} required placeholder='Digite a localização!'></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.textButton}>Procurar</Text>
      </TouchableOpacity>
      <View style={styles.container2}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Em {name}-{country}, está {condition}, 
                temperatura de {temp}°C, com ventos de {wind} Kph,
                vindos da direção {wDirection}!</Text>
              <Text style={styles.modalUpdate}>Last local update: {uTime}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={submit}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      marginTop:30,
      alignItems: "center",
      justifyContent:"center",
    },container2:{
      marginTop:30,
      alignItems: "center",
      justifyContent:"center",
      backgroundColor: "#c2c2c2",
    },
    textButton:{
        fontSize:20,
        color:"#fff"
    },
    button:{
        backgroundColor: "#38a69d",
        borderRadius:50,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30
    },
    title:{
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 70,
        marginTop: 100,
    },
    cont:{
        height:"100%",
        position: "absolute",
        left: 0,
        right:0,
        bottom:0,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#000"
    },
    text:{
        justifyContent: "center",
        alignItems:"center",
        fontSize: 20,
        width:"85%",
        margin: 10
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: '#000',
      opacity: 0.9
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#ff0043",
      padding: 20
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 20,
      fontWeight:"bold"
    },
    modalUpdate:{
      textAlign: "center",
      fontSize: 20,
      fontWeight:"bold",
      color: "#ff0043"
    }
  });
