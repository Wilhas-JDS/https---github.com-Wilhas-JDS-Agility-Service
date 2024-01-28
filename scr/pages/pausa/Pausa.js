import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { stylesMenu } from "../estilos/Styles";

export default function SolicitarPausa() {
  const [observacao, setObservacao] = useState("");
  const [caixa, setCaixa] = useState("14");
  const [tipoPausa, setTipoPausa] = useState("");

  const navigation = useNavigation();

  const handleSolicitarPausa = () => {
    // Adicione a lógica para enviar a solicitação de pausa para o fiscal de caixa

    // Limpar o campo de observação
    setObservacao("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nº CAIXA:{caixa}</Text>
      </View>
      
      <Text style={styles.titulo}>Solicitar Pausa</Text>

      <Picker
        selectedValue={tipoPausa}
        onValueChange={(itemValue) => setTipoPausa(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o tipo de pausa" value="" />
        <Picker.Item label="Pausa Alimentação" value="alimentacao" />
        <Picker.Item label="Pausa Banheiro" value="banheiro" />
      </Picker>

      <TextInput
        style={styles.textArea}
        multiline={true}
        placeholder="Observação (opcional)"
        value={observacao}
        onChangeText={(text) => setObservacao(text)}
      />

      <TouchableOpacity onPress={handleSolicitarPausa} style={styles.botaoSoliPausa}>
        <Text style={styles.botaoCbTexto}>
          Solicitar Pausa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.botaoSoliPausa}>Voltar</Text>
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
  botaoCbTexto: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: "center",
    height: 250,
    width: 'auto',
    padding: 50,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 5,
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    fontSize: 15,
  },
  botaoSoliPausa: {
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
});
