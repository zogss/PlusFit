import React, { useState } from "react";
import { Alert, StyleSheet, Text, View, Button, Image} from 'react-native';
import { database } from '../firebase';


const style = StyleSheet.create({
    topBar:{
        top:0,
        height:'37px',
        backgroundColor:'#4f1317'
    },
    menuBarImg:{
        width:30,
        height:25,
        margin:'6px',
        color:'white'
    },
    tBody:{ 
        alignItems:'center', 
        justifyContent:'center'
    },
    buttonBack:{
        backgroundColor:''
    },
    feedText:{
        fontSize:25,
        fontFamily:'sans-serif'
    },
    text:{
        fontSize:15,
        fontFamily:'sans-serif'
    },
    textEx:{
        fontFamily: 'sans-serif',
        fontSize:15,
        margin:'10px'
    },
    imgEx:{
        width:'50vh',
        height:'30vh',
    },
    divTr:{
        padding:'10px',
        marginTop:'5px',
        marginBottom:'5px',
        backgroundColor:'#A9A9A9'
    },
})
export default function Home({navigation}) {

    return (
        <View style={{flex:1}}>
            <View style={style.topBar}>
                <Image style={style.menuBarImg} source={require('../assets/app-imgs/menubarIcon-White.jpg')}/>
            </View>
            
            <View style={style.tBody}>
                <Text style={style.feedText}>Feed principal</Text>
                <Text style={style.text}>Treinos realizados</Text>

                <View style={style.divTr}>
                    <Text style={style.textEx}>Treino - Supino Reto</Text>
                    <Image style={style.imgEx} source={require('../assets/app-imgs/supino_reto_img.jpg')}/>
                </View>
                <View style={style.divTr}>
                    <Text style={style.textEx}>Treino - Supino com Halteres</Text>
                    <Image style={style.imgEx} source={require('../assets/app-imgs/supino_halteres_img.jpg')}/>
                </View>
                <View style={style.divTr}>
                    <Text style={style.textEx}>Treino - Voador</Text>
                    <Image style={style.imgEx} source={require('../assets/app-imgs/voador_img.png')}/>
                </View>
                <View style={style.divTr}>
                    <Text style={style.textEx}>Treino - Triceps Pulley</Text>
                    <Image style={style.imgEx} source={require('../assets/app-imgs/triceps_pulley_img.jpg')}/>
                </View>

                <Button style={style.buttonBack} title='Sair' onPress={() => navigation.navigate('Login',{id: 30})}/>
            </View>
        </View>
    );
}