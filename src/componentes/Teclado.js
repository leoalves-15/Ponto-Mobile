import React from 'react';
import { Text,StyleSheet, TouchableHighlight } from 'react-native';
export default props =>{
    return(
        <TouchableHighlight style={estilo.keyboard} onPress={props.aoClicar}>
            <Text style={estilo.texto}>{props.label}</Text>
        </TouchableHighlight>
    )
}
const estilo = StyleSheet.create({
    keyboard:{
        flex:1,
paddingLeft: '9%',
paddingRight: '9%',
paddingBottom: '5%',
paddingTop:'5%',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#fff',
width: '100%',
marginRight: 10,
borderRadius: 10,
    },
    texto:{
        color:'#C1BCBC',
    }
})