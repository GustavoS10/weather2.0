import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
      alignItems: "center",
      flex: 0.5,
      justifyContent: "center",
      marginTop: 30,
    },clima:{
      alignItems: "center",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    clima2:{
      flex:1,
    },
    principal:{
      width: "25%"
    },
    textButton:{
        fontSize:20,
        color:"#fff"
    },
    button:{
        backgroundColor: "#ff0043",
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
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
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
    },
    stretch: {
      width: 128,
      height: 128,
      resizeMode: 'stretch',
      backgroundColor: 'transparent'
    },
    temp:{
      fontSize: 30,
      fontWeight: "700"
    },
    char:{
      fontSize: 25,
      padding: 5,
      marginLeft: 20,
      color: "#696969"
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
});
export default styles