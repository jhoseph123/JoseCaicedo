import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from "react-native";

class PromedioEdades {
  constructor(personas) {
    this.personas = personas || [];
    this.nombre = "";
    this.edad = 0;
    this.promedio = 0;
  }

  calcularPromedio() {
    let sumaEdades = 0;
    this.personas.forEach((persona) => {
      sumaEdades += persona.edad;
    });

    if (this.personas.length > 0) {
      this.promedio = sumaEdades / this.personas.length;
    } else {
      this.promedio = null;
    }
  }

  agregarPersona() {
    this.personas.push({
      nombre: this.nombre,
      edad: Number(this.edad),
    });
    this.nombre = "";
    this.edad = 0;
  }

  get promedio() {
    return this.promedio;
  }

  render() {
    return (
      <View>
        <Text>Promedio de edades</Text>
        <TextInput
          style={estilos.inputsTexto}
          onChangeText={this.setNombre}
          value={this.nombre}
          placeholder="Nombre"
        />
        <TextInput
          style={estilos.inputsTexto}
          onChangeText={this.setEdad}
          value={this.edad}
          placeholder="Edad"
          keyboardType="numeric"
        />
        <Button
          title="Agregar persona"
          color="#841584"
          onPress={this.agregarPersona}
        />
        <Text>Promedio de edades: {this.promedio}</Text>
      </View>
    );
  }
}

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

const promedioEdades = new PromedioEdades([]);

promedioEdades.agregarPersona("Juan", 20);
promedioEdades.agregarPersona("Pedro", 25);
promedioEdades.agregarPersona("María", 30);

console.log(promedioEdades.promedio); // 25

export default PromedioPOO;