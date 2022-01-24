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
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrarUsuario = () =>{
        const db = database.getDatabase();
        const reference = database.ref(db, 'users/'+ usuario);
        database.set(reference, {
          name: nome,
          senha: senha
        });
        navigation.navigate('Login');
    }
    const voltarLogin = () =>{
      navigation.navigate('Login');
    }

    return(
      <View style={{flex:1, justifyContent:'center'}}>
          <View style={{justifyContent:'center', alignItems:'center', marginBottom:'15px'}}>
            <Image style={style.tyneLogo} source={require('../assets/app-imgs/logo.png')}/>

            <TextInput style={style.textStyle} placeholder='Nome Completo:' onChangeText={(inputNome) => setNome(inputNome)}  />
            <TextInput style={style.textStyle} placeholder='Usuário:' onChangeText={(inputUsuario) => setUsuario(inputUsuario)}/>
            <TextInput style={style.textStyle} placeholder='Senha:'onChangeText={(inputSenha) => setSenha(inputSenha)} />
          </View>

          <Button style={style.buttonStyle} title='Cadastrar' onPress={cadastrarUsuario}/>
          <Button style={style.buttonStyle} title='Voltar' onPress={voltarLogin}/>
      </View>
    );
}