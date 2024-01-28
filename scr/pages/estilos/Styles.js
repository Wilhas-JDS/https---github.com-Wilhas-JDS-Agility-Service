// Sty.js
import { StyleSheet } from "react-native";

//#region inicio da estilização da tela de menu  
export const stylesMenu = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#209A57",
  },
  texto: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'white', // Adicionado para garantir que o textof seja branco
    //    marginBottom: 20,
  },
  botao: {
    fontSize: 18, // Ajustado o tamanho da fonte
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: '#2A784D',
    borderRadius: 8,
    paddingVertical: 10,
  },
  botaoTexto: {
    fontSize: 16, // Ajustado o tamanho da fonte
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center', // Adicionado para centralizar o texto
  },
  header: {
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    padding: 40, // Ajustado o padding
  },
  picker: {
    fontSize: 18, // Ajustado o tamanho da fonte
    height: 50,
    backgroundColor: '#2A784D',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10, // Ajustado o padding horizontal
    color: 'white', // Adicionado para garantir que o texto seja branco
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    fontSize: 15,
  },
  botaoFinailizaAt: {
    backgroundColor: '#ca6500',
    padding: 20, // Ajustado o padding
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  botaoTextoFinailizaAt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Ajustado o tamanho da fonte

  },
  botãoVoltar: {
    backgroundColor: '#ca6500',
    padding: 20, // Ajustado o padding
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginTop: 280,
    transform: [{ translateX: -50 }, { translateY: -220 }],
  },
  txtBotãoVoltar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Adicionado o tamanho da fonte
    
  },
});


//#endregion fim da estilização da tela de menu 

//#region inicio da estilização da tela de Tela inicial
export const stylesInicial = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#209A57",
  },

  header: {
    backgroundColor: '#209A57',
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    
  },

  titulo: {
    fontSize: 24,
    color: 'white',
    marginTop: 20,
    fontWeight: "bold",
  },

  botaoMenu: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#ca6500',
    borderRadius: 8,
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },

  textBotaoMenu: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  botaoSair: {
    alignItems: "center",
    backgroundColor: '#ca6500',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 30,
    transform: [{ translateX: 300 }, { translateY: 250 }],
  },

  textBotaoSair: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});
//#endregion

//#region styles tela de login
export const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#209A57", // Cor de fundo da tela de login
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: 300,
    backgroundColor: "white", // Cor do fundo do input
    borderRadius: 8, // Borda arredondada
  },
  button: {
    backgroundColor: "#2A784D",
    padding: 15,
    borderRadius: 8,
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  titulo: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
//#endregion fim da tela de login

//#region  Inicio do estilo da tela de cancelamento
export const stylesCancelamento = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#209A57',
    padding: 20,
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
    marginTop: 200,
    paddingHorizontal: 5,
  },
  textArea: {
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    fontSize: 15,
  },
  botaoSoliCancelamento: {
    backgroundColor: '#ca6500',
    padding: 25,
    borderRadius: 15,
    alignSelf: 'center',
    transform: [{ translateX: 15 }, { translateY: 50 }],
  },
  textBotaoSoliCancelamento: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'normal',
      fontSize: 30,
  },
  botaoVoltar: {
    backgroundColor: '#ca6500',
    padding: 20,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 20,
    transform: [{ translateX: 300 }, { translateY: 320 }],
  },
  textBotaoVoltar: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'normal',

  },
  titulo: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
    fontWeight: "bold",
  },
});
//#endregion fim do estilo da tela de cancelamento
