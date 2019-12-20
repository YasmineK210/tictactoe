import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Typography, TouchableOpacity} from 'react-native';

export default class ChoosePlayer extends Component{

render(){
    return(
        <View styles={style.container}>
            <View styles={style.textcontainer}>
            <Text styles={style.text}>Choose the number of players:</Text>
            </View>
            <View styles={style.buttonarea}>
                <TouchableOpacity styles={style.button} onPress={{}}>
                    {/* <Image style={} source={require()}/> */}
                </TouchableOpacity>
                <TouchableOpacity styles={style.button} onPress={{}}>
                    {/* <Image style={} source={require()}/> */}
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
}

const style={
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    textcontainer:{
        height: Dimensions.get('window').height * 0.3,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize: 16,
        fontWeight: 300,
        textAlign:'center',
    },
    buttonarea:{
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        bgcolor:'blue',
        marginTop:24,
        width:'720px',
        heigth:'90px'
    }
}