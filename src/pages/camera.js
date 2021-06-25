import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from 'axios';

import { RNCamera } from "react-native-camera";
export default function second({navigation, route, goBack}){
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.base64);
      //alert(data.uri);
      //teste de pegar o params
      const {num} = route.params;
      const {fecha} = route.params;
      const {datac} = route.params;
      const {hora} = route.params;
        //---------------------------------------------------------------
        const axios = require('axios'); 
        const formData = new FormData(); 
        formData.append('base', data.base64); 
        formData.append('data',fecha ); 
        formData.append('cod',num ); 
        formData.append('datac',datac ); 
        formData.append('hora',hora ); 
       // console.log(datac);http://192.168.68.129/
        axios.post('http://192.168.68.129/pontoWeb/novo/backend/upload/up.php', formData)
          .then((response) => {
            console.log("responsee");
            alert("foto tirada");
            navigation.goBack();
          }, (error) => {
            console.log(error);
         });
      //  axios.post('http://172.30.2.199/upload_teste/up.php',data.base64 )
      //  .then((response) => {
       //   console.log(response);
       // }, (error) => {
       //   console.log(error);
      //  });
        //------------------------------------------------------
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera => {
          this.camera = camera;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
        title={"Permission to use camera"}
        message={
          "We need your permission to use your camera phone"
        }
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
          <Text style={styles.buttonText}> Confirmar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: "column",
  backgroundColor: "#76C777"
},
preview: {
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center"
},
buttonContainer: {
  flex: 0,
  flexDirection: "row",
  justifyContent: "center"
},
capture: {
  flex: 0,
  backgroundColor: "#fff",
  borderRadius: 5,
  padding: 15,
  paddingHorizontal: 20,
  alignSelf: "center",
  margin: 20
},
buttonText: {
  fontSize: 14
} 
});
/*
export default class camera extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      //console.log(data.base64);
      //alert(data.uri);
      //precisa enviaar pro bancos
        //---------------------------------------------------------------
        const axios = require('axios'); 
        const formData = new FormData(); 
        formData.append('base', data.base64); 

        axios.post('http://172.30.2.124/pontoWeb/novo/backend/upload/up.php', formData)
          .then((response) => {
            //teste de pegar o params
            const {num} = route.params;
            console.log(num);
            console.log("responsee");
          }, (error) => {
            console.log("error");
         });
      //  axios.post('http://172.30.2.199/upload_teste/up.php',data.base64 )
      //  .then((response) => {
       //   console.log(response);
       // }, (error) => {
       //   console.log(error);
      //  });
        //------------------------------------------------------
    }
  };

  render() {
  
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
          title={"Permission to use camera"}
          message={
            "We need your permission to use your camera phone"
          }
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={styles.buttonText}> Confirmar </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#76C777"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  buttonText: {
    fontSize: 14
  } 
});*/