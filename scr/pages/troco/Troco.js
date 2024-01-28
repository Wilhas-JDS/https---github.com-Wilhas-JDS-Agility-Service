import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import PickerModal from "react-native-picker-modal-view";

import { useNavigation } from "@react-navigation/native";




export default function Troco() {
  const [selectedValor, setSelectedValor] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [caixa, setCaixa] = useState("14");
  const navigation = useNavigation();


  const valor = [
    { Name: "R$ 5 (2x 2 + 1)", Value: "R$ 5 (2x 2 + 1)" },
    { Name: "R$ 10", value: "R$ 10" },
    { Name: "R$ 20", value: "R$ 20" },
    { Name: "R$ 50", value: "R$ 50" },
    { Name: "R$ 100", value: "R$ 100" },
    { Name: "R$ 200", value: "R$ 200" },
  ];
  const tipo = [
    { Name: "Cedula", Value: "Cedula" },
    { Name: "Moeda", Value: "Moeda" },
    { Name: "Misto", Value: "Misto" },
  ];

  

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor='#000000'
        barStyle="default"
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nº CAIXA: {caixa}</Text>
      </View>

      <PickerModal
        onSelected={(selected) => setSelectedValor(selected)}
        onBackButtonPressed={() => console.log('Back button pressed')}
        items={valor}
        sortingLanguage={'tr'}
        showToTopButton={true}
        selected={selectedValor}
        showAlphabeticalIndex={true}
        autoGenerateAlphabeticalIndex={true}
        selectPlaceholderText={'Selecione o Valor'}
        onEndReached={() => console.log('list ended...')}
        searchPlaceholderText={'Search...'}
        requireSelection={false}
        autoSort={false}
      />

      <PickerModal
        onSelected={(selected) => setSelectedTipo(selected)}
        onBackButtonPressed={() => console.log('Back button pressed')}
        items={tipo}
        sortingLanguage={'tr'}
        showToTopButton={true}
        selected={selectedTipo}
        showAlphabeticalIndex={true}
        autoGenerateAlphabeticalIndex={true}
        selectPlaceholderText={'Selecione o tipo'}
        onEndReached={() => console.log('list ended...')}
        searchPlaceholderText={'Search...'}
        requireSelection={false}
        autoSort={false}
      />

      <TouchableOpacity
        onPress={saveDataToFirebase}
        style={styles.botaoSoliAt}
      >
        <Text style={styles.botaoCbTexto}>
          Solicitar Atendimento
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Menu");
        }}
        style={styles.botaoVoltar}
      >
        <Text style={styles.textoBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#209A57',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 20,
  },
  botaoSoliAt: {
    backgroundColor: '#ca6500',
    padding: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  botaoCbTexto: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botaoVoltar: {
    backgroundColor: '#ca6500',
    padding: 20,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  textoBotaoVoltar: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'italic',
  },

  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    marginBottom: 20,
  },
});


