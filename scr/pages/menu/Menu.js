import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StatusBar }
  from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import { stylesMenu } from "../estilos/Styles";

export default function Menu({ route }) {
  const [selectedItem, setSelectedItem] = useState(null); // Inicializado como nulo
  const [observacao, setObservacao] = useState("");
  const [caixa, setCaixa] = useState("14");
  const [mensagem, setMensagem] = useState("");
  const navigation = useNavigation();

  // Extrai as variáveis operador e numeroCaixa dos parâmetros de navegação
  const { operador, numeroCaixa } = route.params || {};

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  // Função para gerar os itens do Picker
  const renderPickerItems = () => {
    const atendentes = ["Jessica", "wilhas", "Rodrigo"];
    
    // Adiciona o item de espaço reservado no início
    const items = [<Picker.Item key="placeholder" label="Selecione um atendente" value={null} />];

    // Adiciona os atendentes
    atendentes.forEach((atendente) => {
      items.push(<Picker.Item key={atendente} label={atendente} value={atendente} />);
    });

    return items;
  };

  return (
    <ScrollView style={stylesMenu.container}>
      <StatusBar
        backgroundColor='#000000'
        barStyle="default"
      />
      <View style={stylesMenu.header}>
        <Image source={require('../../../assets/logo.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Operador(a): {operador}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >CAIXA: {numeroCaixa}</Text>
      </View>

      <TouchableOpacity onPress={() => handleNavigation("Troco")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Solicitar troco</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Cigarro")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Solicitar cigarro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Whisky")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Solicitar whisky</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Pausa")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Solicitar pausa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("PreçoErrado")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Preço errado</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("Cancelamentos")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Cancelamento</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleNavigation("OutrosAssuntos")} style={stylesMenu.botao}>
        <Text style={stylesMenu.botaoTexto}>Outros assuntos</Text>
      </TouchableOpacity>

      {/* Utilizando @react-native-picker/picker */}
      <Picker
        selectedValue={selectedItem}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
        style={stylesMenu.picker}
      >
        {renderPickerItems()}
      </Picker>
    
      <TouchableOpacity style={stylesMenu.botaoFinailizaAt}>
        <Text style={stylesMenu.botaoTextoFinailizaAt}>Finalizar Atendimento</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigation("Inicial")} style={stylesMenu.botãoVoltar}>
        <Text style={stylesMenu.txtBotãoVoltar} >Voltar</Text>
      </TouchableOpacity>
     
    </ScrollView>
  );
}
