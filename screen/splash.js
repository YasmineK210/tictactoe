import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native'

export default class Splash extends Component {
    // changeToLogin=()=>{
    //     this.props.navigation.navigate({routeName:'Login'})
    // }
    render() {
            // setTimeout(this.changeToLogin, 2000);
        return (
        <View>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../sample.jpg')}/>
                <Text style={styles.text}>Welcome to Tic-Tac-Toe!</Text>
            </View>
        </View>
    );
  }
}

const styles =StyleSheet.create({
    container:{
        height:(Dimensions.get('window').height * 0.95),
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center'
    },
    text:{
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        alignSelf: 'center'

    },
    image:{
        height:'25%',
        width:'25%'
    }
})