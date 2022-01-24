import { React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements'
import { database } from '../firebase';


const style = StyleSheet.create({
    tyneLogo:{
        width:150,
        height:150,
        margin:'10px'
    },
    textStyle:{
        width:'80%',
        fontSize:15,
        borderBottomWidth:2,
        borderColor:'black',
        marginTop:'3px',
        marginLeft:'10px',
        marginRight:'10px',
        padding:'6px'
    },
    buttonStyle:{
        backgroundColor:'#4f1317',
        marginTop:'10px',
        marginLeft:'10px',
        marginRight:'10px'
    }
})

export default function Login({navigation}){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');


    const loginFunction = async() => {
        const db = database.getDatabase();
        const reference = database.ref(db, 'users/' + usuario);
        const senhaDatabase = await (await database.get(reference)).child('senha').val();

        if(senhaDatabase == senha){
            navigation.navigate('Home', {usuario: usuario})
        }else{
            console.log('erro ao entrar');
        }
    }

    return(
    <View style={{flex:1, justifyContent:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image style={style.tyneLogo} source={require('../assets/app-imgs/logo.png')}/>

            <TextInput style={style.textStyle} placeholder='Usuário:' onChangeText={(inputUsuario) => setUsuario(inputUsuario)}/>
            <TextInput style={style.textStyle} placeholder='Senha:'onChangeText={(inputSenha) => setSenha(inputSenha)} />
        </View>
        
        <Button buttonStyle={style.buttonStyle} title='Login' onPress={loginFunction}/>
        <Button buttonStyle={style.buttonStyle} title='Ir para tela de Cadastro' onPress={() => navigation.navigate('Cadastro')}/>
    </View>
    );
}