import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from "react-native";



const PromedioEdades = () => {
  const [personas, setPersonas] = useState([]);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [promedio, setPromedio] = useState(0);

  useEffect(() => {
    calcularPromedio();
  }, [personas]);

  const calcularPromedio = () => {
    let sumaEdades = 0;
    personas.forEach((persona) => {
      sumaEdades += persona.edad;
    });

    if (personas.length > 0) {
      setPromedio(sumaEdades / personas.length);
    } else {
      setPromedio(null);
    }
  };

  const agregarPersona = () => {
    const nuevaPersona = {
      nombre,
      edad: Number(edad),
    };
    setPersonas([...personas, nuevaPersona]);
    setNombre("");
    setEdad(0);
  };

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: "gray",
      borderWidth: 3,
    },
  });

  return (
    <View>
      <Text>Promedio de edades</Text>
      <TextInput
        style={estilos.inputsTexto}
        onChangeText={setNombre}
        value={nombre}
        placeholder="Nombre"
      />
      <TextInput
        style={estilos.inputsTexto}
        onChangeText={setEdad}
        value={edad}
        placeholder="Edad"
        keyboardType="numeric"
      />
      <Button onPress={agregarPersona} title="Agregar persona" color="#841584" />
      <Text>Promedio de edades: {promedio}</Text>
    </View>
  );
};

export default PromedioEdades;