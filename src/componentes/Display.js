import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default props =>{
    return(
    <View style={estilo.display}>
        <Text
            style={estilo.textoDisplay }
            numberOfLines={1}
            >{props.valor} {props.teste}
        </Text> 
    </View>
    )
}
const estilo = StyleSheet.create({
display:{
flex: 0.9,
paddingLeft: '9%',
paddingRight: '9%',
paddingBottom: '5%',
paddingTop:'5%',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#EFEFEF',
width: '100%',
marginRight: 10,
borderRadius: 10,
},
textoDisplay:{
    fontSize:15,
}
})