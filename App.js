import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Inicial from "./scr/pages/inicio/Inicial";
import Menu from "./scr/pages/menu/Menu";
import Troco from "./scr/pages/troco/Troco";
import Cigarro from "./scr/pages/cigarro/Cigarro";
import Whisky from "./scr/pages/whisky/Whisky";
import Cancelamentos from "./scr/pages/cancelamentos/Cancelamentos";
import Pausa from "./scr/pages/pausa/Pausa";
import PreçoErrado from "./scr/pages/precoErrado/PreçoErrado";
import OutrosAssuntos from "./scr/pages/outrosAssuntos/OutrosAssuntos";





const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName=" "
      screenOptions={{
        headerMode: "none",
        headerTintColor: "#FF0000",
        headerStyle: {
          backgroundColor: "#0000FF",
        },
      }}
    >
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Troco" component={Troco} />
      <Stack.Screen name="Cigarro" component={Cigarro} />
      <Stack.Screen name="Whisky" component={Whisky} />
      <Stack.Screen name="Cancelamentos" component={Cancelamentos} />
      <Stack.Screen name="Pausa" component={Pausa} />
      <Stack.Screen name="PreçoErrado" component={PreçoErrado} />
      <Stack.Screen name="OutrosAssuntos" component={OutrosAssuntos} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
