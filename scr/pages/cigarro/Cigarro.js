import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput, StatusBar } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { stylesMenu } from "../estilos/Styles";

export default function Troco() {
  const [selectedMarca, setSelectedMarca] = useState(null);
  const [selectedTipo, setSelectedTipo] = useState(null);
  const [selectedQtd, setSelectedQtd] = useState(null);
  const [caixa, setCaixa] = useState("14");

  const placeholderMarca = {
    label: "Selecione a marca desejada",
    value: null,
    color: "#9EA0A4",
  };
  const placeholderTipo = {
    label: "Selecione o tipo",
    value: null,
    color: "#9EA0A4",
  };
  const placeholderQtd = {
    label: "Selecione a quantidade",
    value: null,
    color: "#9EA0A4",
  };

  const marca = [
    { label: "Lucky Strike", value: "Lucky Strike" },
    { label: "Marlboro", value: "Marlboro" },
    { label: "Dunhill", value: "Dunhill" },
    { label: "Camel", value: "Camel" },
    { label: "Parliament", value: "Parliament" },
  ];

  const tipo = [
    { label: 'Maço', value: "Maço" },
    { label: "Box", value: "Box" },
  ];

  const qtd = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
  ];

  const navigation = useNavigation();

  const handleSolicitarAtendimento = () => {
    // Adicione aqui a lógica para solicitar o atendimento

    // Limpar os campos
    setSelectedMarca(null);
    setSelectedTipo(null);
    setSelectedQtd(null);
  };

  return (
    <View style={stylesMenu.container}>
      <StatusBar
        backgroundColor='#000000'
        barStyle="default"
      />
      <View style={stylesMenu.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Nº CAIXA: {caixa}</Text>
      </View>

      <RNPickerSelect
        placeholder={placeholderMarca}
        items={marca}
        onValueChange={(value) => setSelectedMarca(value)}
        value={selectedMarca}
        style={stylesMenu.picker}
      />
      <RNPickerSelect
        placeholder={placeholderTipo}
        items={tipo}
        onValueChange={(value) => setSelectedTipo(value)}
        value={selectedTipo}
        style={stylesMenu.picker}
      />
      <RNPickerSelect
        placeholder={placeholderQtd}
        items={qtd}
        onValueChange={(value) => setSelectedQtd(value)}
        value={selectedQtd}
        style={stylesMenu.picker}
      />

      <TouchableOpacity onPress={handleSolicitarAtendimento} style={stylesMenu.botaoFinailizaAt}>
        <Text style={stylesMenu.botaoTextoFinailizaAt}>Solicitar Atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={stylesMenu.botãoVoltar}>
        <Text style={stylesMenu.txtBotãoVoltar} >Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
