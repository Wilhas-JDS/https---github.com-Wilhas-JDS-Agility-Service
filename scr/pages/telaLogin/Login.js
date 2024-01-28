import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, StatusBar } from "react-native";
import { stylesLogin } from "../estilos/Styles";

export default function Login({ navigation }) {
  const [numeroCaixa, setNumeroCaixa] = useState("");
  const [operador, setOperador] = useState("");

const handleLogin = () => {
 if (operador && numeroCaixa){
  navigation.navigate("Inicial", {numeroCaixa: numeroCaixa, operador: operador});
 } else{
  alert('Por favor, preencha todas informações!');
 }
 
};


  return (

      <View style={stylesLogin.container}>
        <StatusBar
        backgroundColor='#000000'
        barStyle="default"
      />
        <Image source={require("../../../assets/logo.png")}/>

      
        <Text style={stylesLogin.titulo}>Tela de Login</Text>

        <TextInput
          style={stylesLogin.input}
          placeholder="Nome do Operador"
          onChangeText={(text) => setOperador(text)}
          value={operador}
        />

        <TextInput
          style={stylesLogin.input}
          placeholder="Número do Caixa"
          onChangeText={(text) => setNumeroCaixa(text)}
          value={numeroCaixa}
        />

        <TouchableOpacity style={stylesLogin.button} onPress={handleLogin}>
          <Text style={stylesLogin.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    
  );
}
