import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { stylesCancelamento, stylesMenu } from "../estilos/Styles";

export default function SolicitarPausa(route) {
  const [observacao, setObservacao] = useState("");
  const [tipoPausa, setTipoPausa] = useState("");
  const navigation = useNavigation();
  const handleSolicitarCacelamento = () => {
    // lógica para enviar a solicitação de pausa para o fiscal de caixa
    // Limpar o campo de observação
    setObservacao("");
     // Limpar o campo de seleção do topo de pausa
    setTipoPausa("");
  };
  const styles =stylesCancelamento ;

  const { operador, numeroCaixa } = route.params || {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/logoSub.png')} />
        <Text style={styles.titulo}>Tela de Cancelamento</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Operador(a): {operador}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Caixa: {numeroCaixa}</Text>
      </View>



      <Picker
        selectedValue={tipoPausa}
        onValueChange={(itemValue) => setTipoPausa(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o tipo de cancelamento" value="" />
        <Picker.Item label="Cancelar Produto(os)" value="Produto(os)" />
        <Picker.Item label="Cancelar Compra" value="Compra" />
      </Picker>

      <TextInput
        style={styles.textArea}
        multiline={true}
        placeholder="Observação (opcional)"
        value={observacao}
        onChangeText={(text) => setObservacao(text)}
      />

      <TouchableOpacity onPress={handleSolicitarCacelamento} style={styles.botaoSoliCancelamento}>
        <Text style={styles.textBotaoSoliCancelamento}>
        Solicitar cancelamento
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.textBotaoVoltar}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}


