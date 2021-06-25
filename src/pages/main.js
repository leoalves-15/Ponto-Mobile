import React, {useState } from 'react';
import { View, Image, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Display from '../componentes/Display';


export default function main({navigation}){

    const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:'#fff'
        },
        Logo: {
          resizeMode: 'contain',
          display:'flex',
          alignSelf: "center",
          width: 150,
          height: 136,
        },
        ContainDisplay:{
          display: "flex",
          flexDirection: 'row',
          paddingLeft:20,
          paddingRight:20,
          marginTop:20,
          marginBottom: 50,
        },
        ContainKb:{
          paddingLeft:20,
          paddingRight:20,
          backgroundColor:'#f6f5fa',
          flex: 1,
          textAlign:'center',
          justifyContent:'center',
          alignContent: 'center',
          paddingBottom:120,
          
        },
        linha:{
          flexDirection: 'row',
          marginTop:'10%',
        },
        teclas:{
          flex:1,
          paddingLeft: '9%',
          paddingRight: '9%',
          paddingBottom: '5%',
          paddingTop:'5%',
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#fff',
          marginRight: 10,
          borderRadius: 10,
        },
        texto:{
          color:'#C1BCBC',
          textAlign:'center',
        }
      })
      
  const [d1 ,setD1] = useState("");
  const [d2,setD2] = useState("");
  const [d3,setD3] = useState("");
  const [d4,setD4] = useState("");
  const [cpf, setCpf] = useState(["","","",""])
   function escrever (label){
     if(d1==""){
       setD1(label)
     }
     else if(d2==""){
       setD2(label)
     }
     else if(d3==""){
       setD3(label)
     }
    else if(d4==""){
      setD4(label)
      setCpf([d1,d2,d3,label]);
   }

}
  function deletar (){
    if(d4!=""){
      setD4("")
    }
    else if(d3!=""){
      setD3("")
    }
    else if(d2!=""){
      setD2("")
    }
    else if(d1!=""){
     setD1("")
   }
  } 
  const url = "http://192.168.68.129/pontoWeb/novo/backend/login.php";
  function logar (teste){
      //tentativa de feth
 const log = (teste[0]+teste[1]+teste[2]+teste[3]);
 console.log(cpf)
  fetch(url).then((resp) => resp.json()).then(function (data){
    return data.map(function(url){
        if(url.cod == log){
          navigation.navigate('second',{num: log}); 
        }
    })
})
.catch((erro)=>{console.log(erro)})
//fim da tentativa
  }
    return(
        
        <View style={styles.container}>
       <View>
        <Image style={styles.Logo}
          source={require('../assets/logo.png')}
        />
        <Text style={styles.texto}>Insira o seu código de acesso</Text>
        </View>
        <View style={styles.ContainDisplay}>
          <Display valor={d1}/>
          <Display valor={d2}/>
          <Display valor={d3}/>
          <Display valor={d4}/>
        </View>
        <View style={styles.ContainKb}>
          <View style={styles.teste}>
            <View style={styles.linha}>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("1")}}><Text  style={styles.texto} >1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("2")}}><Text style={styles.texto}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("3")}}><Text style={styles.texto}>3</Text></TouchableOpacity>
            </View>
            <View style={styles.linha}>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("4")}}><Text style={styles.texto}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("5")}}><Text style={styles.texto}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("6")}}><Text style={styles.texto}>6</Text></TouchableOpacity>
            </View>
            <View style={styles.linha}> 
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("7")}}><Text style={styles.texto}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("8")}}><Text style={styles.texto}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("9")}}><Text style={styles.texto}>9</Text></TouchableOpacity>
            </View>
            <View style={styles.linha}>
            <TouchableOpacity style={styles.teclas} onPress={()=>{deletar("")}}><Text style={styles.texto}>bk</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{escrever("0")}}><Text style={styles.texto}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.teclas} onPress={()=>{setCpf([d1,d2,d3,d4]); if(d1 != ""){if(d2 != ""){if(d3 != ""){if(d4 != ""){logar(cpf) }}} }}} ><Text style={styles.texto}>et</Text></TouchableOpacity>
            </View>
        </View>
        </View>
    </View>
    );
}