import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, StatusBar, BackHandler } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from "../menu/Menu";
import { stylesInicial } from "../estilos/Styles";
import Login from "../telaLogin/Login";

const Stack = createStackNavigator();

export default function Inicial({ route, navigation }) {
  //const [caixa, setCaixa] = useState(numeroCaixa);
  const styles = stylesInicial;

  // Extrai as variáveis operador e numeroCaixa dos parâmetros de navegação
  const { operador, numeroCaixa } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={stylesInicial.titulo}>
        Tela Inicial
      </Text>

      <StatusBar
        backgroundColor='#000000' // Cor de fundo da barra de status
        barStyle="default" // Define a cor do texto da barra de status
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Operador(a): {operador}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Caixa: {numeroCaixa}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Menu");
          }}
          style={styles.botaoMenu}
        >
          <Text style={styles.textBotaoMenu}>MENU</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
       onPress={() => {
        navigation.navigate("Login");
        }}
        style={styles.botaoSair}
      >
        <Text style={stylesInicial.textBotaoSair}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
