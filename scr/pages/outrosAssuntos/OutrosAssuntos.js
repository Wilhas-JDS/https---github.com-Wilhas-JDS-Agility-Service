import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput, StatusBar } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useNavigation } from "@react-navigation/native";
import { stylesMenu } from "../estilos/Styles";

export default function OutrosAssuntos() {
  const [selectedAssunto, setSelectedAssunto] = useState(null);
  const [observacao, setObservacao] = useState("");
  const [caixa, setCaixa] = useState("14");
  const placeholderAssunto = {
    label: "Selecione o Assunto",
    value: null,
    color: "#9EA0A4",
  };

  const assuntos = [
    { label: "Assunto 1", value: "Assunto 1" },
    { label: "Assunto 2", value: "Assunto 2" },
    { label: "Assunto 3", value: "Assunto 3" },
    // Adicione mais assuntos conforme necessário
  ];
  const navigation = useNavigation();
  const handleSolicitarAtendimento = () => {
    // Limpar os campos
    setSelectedAssunto(null);
    setObservacao("");
  };
  const styles = stylesMenu;

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        backgroundColor='#000000'
        barStyle="default"
      />
      <View style={styles.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Nº CAIXA: {caixa}</Text>
      </View>

      <RNPickerSelect
        placeholder={placeholderAssunto}
        items={assuntos}
        onValueChange={(value) => setSelectedAssunto(value)}
        value={selectedAssunto}
        style={styles.picker}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Observação"
        onChangeText={(text) => setObservacao(text)}
        value={observacao}
        multiline
      />

      <TouchableOpacity onPress={handleSolicitarAtendimento} style={styles.botaoFinailizaAt}>
        <Text style={styles.botaoTextoFinailizaAt}>Solicitar Atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Menu")} style={styles.botãoVoltar}>
        <Text style={styles.txtBotãoVoltar} >Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
