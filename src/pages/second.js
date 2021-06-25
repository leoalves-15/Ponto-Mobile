import React, {useState } from 'react';
import { View, Image, StyleSheet,Text,TouchableOpacity } from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import { RNCamera, FaceDetector } from 'react-native-camera';
//import {Text} from 'react-native-svg';

export default function second({navigation, route,goBack}){
    const styles = StyleSheet.create({
        Logo: {
            resizeMode: 'contain',
            display:'flex',
            alignSelf: "center",
            width: 150,
            height: 136,
          },
          title:{
              textAlign:'center',
              fontSize:30,
              color:'#C1BCBC'
          },
          title1:{
              marginBottom:20,
            textAlign:'center',
            fontSize:30,
            color:'#C1BCBC'
        },
          btnV:{
            textAlign:'center',
            alignItems:'center'
          },
          btnT:{
            textAlign:'center',
            fontSize:30,
            color:'#fff',
          },
          btnS:{
            marginTop:20,
            textAlign:'center',
            fontSize:30,
            color:'#f00',
          },
          btnSair:{
            fontSize:30
          },
          btn:{
            backgroundColor:'#76C777',
            width:'80%',
            borderRadius: 20,
            paddingTop:5,
            paddingBottom:5,
          },
          grafico:{
            
          },
          sair:{
            textAlign:'left',
          }
    })
    let date = new Date();  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let hora = hours+":"+minutes;
    var dia = new Date().getDate();
    var mes = new Date().getMonth() + 1;
    var ano = new Date().getFullYear();
    var data = [dia+"/"+mes+'/'+ano];
    var datae = ano+"-"+mes+"-"+dia;
    var faltas = 60;
    var presenca = 40;
    const dados = [faltas,presenca];
    
    const piDados = dados
    .filter((value) => value > 0)
    .map((value, index) => ({
        value,
        svg: {
            fill: '#76C777',
        },
        key: `pie-${index}`,
    }))
    const {num} = route.params;
    console.log(datae);
    const teste = num;
    //console.log(`${hours}:${minutes}- ${data} `)
    return(
        <View>
                <View>
                <Image style={styles.Logo}
                source={require('../assets/logo.png')}/>
                <Text style={styles.title}>Banco de Horas</Text> 
                </View>
                <View style={{height:400, justifyContent:'center'}}>
                    <PieChart style={{height:300}} data={piDados}/>  
                </View>
                <View style={styles.btnV}>
             <Text style={styles.title1}>{hours}:{minutes} - {data}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('camera', {num: teste, fecha: dia, datac:datae,hora:hora})}}><Text style={styles.btnT}>Confirmar Ponto</Text></TouchableOpacity>
                </View>
                <View style={styles.btnV}>
                <TouchableOpacity style={styles.btnSair} onPress={()=>{navigation.goBack();}}><Text style={styles.btnS}>Sair</Text></TouchableOpacity>
                </View>
                
        </View>
    )
}