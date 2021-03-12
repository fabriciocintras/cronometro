import React, {Component} from "react";
import { 
  View,
  Text, 
  StyleSheet, 
  Image, TouchableOpacity
} from "react-native";

 class App extends Component {
  render(){
    return(
      <View style={estilo1.alinharTexto}>
        <Image 
          style={{width:120, height:120}}
          source={require('./src/imagens/cronometropng.png')}
        />
        <Text >Ola Mundo!</Text>

        <View style ={estilo1.areaBotoes}>

          <TouchableOpacity style={estilo1.botoes}>
            <Text>Zerar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo1.botoes}>
            <Text>Vai!</Text>
          </TouchableOpacity>

        </View>

      </View> 
    )
  }
}

const estilo1 = StyleSheet.create({
  alinharTexto:{
    alignItems: "center",
    justifyContent:"center",
    flex:1
  },
  botoes:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'seagreen',
    height:40,
    margin:15,
    flex:1
  },
  areaBotoes:{
    flexDirection: 'row'
  }
})
export default App;