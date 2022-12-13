import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import * as Location from 'expo-location'
import MapView, { Marker} from 'react-native-maps'
// Styles
import styles from './style'

export default function Home() {
    const City = []
    const key = '005e1eb391604076adf211541221312'
    const [name, setName]               = useState(null)
    const [country, setCountry]         = useState(null)
    const [uTime, setUTime]             = useState(null)
    const [condition, setCondition]     = useState(null)
    const [temp, setTemp]               = useState(null)
    const [wind, setWind]               = useState(null)
    const [wDirection, setWD]           = useState(null)
    const [humidity, setHumi]           = useState(null)
    const [img, setImg]                 = useState('')
    // GeoLocation
    const [location, setLocation]       = useState(null);
    const [errorMsg, setErrorMsg]       = useState(null);
    const [lat, setLat]                 = useState(0);
    const [lon, setLon]                 = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      submit()
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const submit = ()=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${lat},${lon}&lang=pt`)
    .then((response) => {return (response.json())})
    .then(data=> dados(data))
  }
  const dados = (data) => {
    let str = data.current.condition.icon
    str = str.substring(2)
    setName(data.location.name);
    setCountry(data.location.country);
    setUTime(data.current.last_updated);
    setCondition(data.current.condition.text);
    setTemp(data.current.temp_c);
    setWind(data.current.wind_kph);
    setWD(data.current.wind_dir);
    setHumi(data.current.humidity)
    setImg(str)
  }

  return (
    <View style={styles.container}>
      {lat && lon && lat !== null && lon !== null ?
        <View style={styles.clima}>
          <Image style={styles.stretch} source={{uri:`https://${img}`}}/>
          <View style={styles.principal}>
            <Text style={styles.temp}>{temp} °C</Text>
            <Text style={styles.temp}>{condition}</Text>
          </View>
          <View>
            <Text style={styles.char}>Vento: {wind} kph</Text>
            <Text style={styles.char}>Humidade: {humidity}%</Text>
          </View>
        </View>
        :
        <Text style={styles.title}>Carregando status do clima da sua região, aguarde...</Text>
      }
      <View style={styles.clima2}>
        {lat && lon && lat !== null && lon !== null ? 
          <MapView style={styles.map}
          
            initialRegion={{
              latitude: lat,
              longitude: lon,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            >
              <Marker
                coordinate={{ latitude : lat , longitude : lon }}
              />
          </MapView>
          : 
          <Text style={styles.title}>Carregando mapa de sua localização, aguarde...</Text>
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}