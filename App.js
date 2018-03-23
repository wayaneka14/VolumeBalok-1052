import React, { Component } from 'react';
import{
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
}from 'react-native';

export default class volumebalok extends Component{
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      volume:0
    };
  }

  render() {
    return (

      <View style={{flex:1,backgroundColor:'#C8E6C9'}}>
        <View style={{backgroundColor:'#64DD17'}}>
          <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}}>

          </Text>
        </View>

        <View style={{backgroundColor:'#00C853'}}>
          <Text style = {{padding: 15, fontSize: 20, color: 'black', textAlign:'center'}}>
              Menghitung Volume Balok
          </Text>
        </View>

      <View style={{margin:20, padding: 10, backgroundColor: '#B9F6CA'}}>
        <TextInput style ={{height: 40}}
          placeholder='Masukkan Panjang'
          onChangeText={(panjang)=>this.setState({panjang})}
          keyboardType = 'numeric'
        />

        <TextInput style ={{height: 40}}
          placeholder='Masukkan Lebar'
          onChangeText={(lebar)=>this.setState({lebar})}
          keyboardType = 'numeric'
        />

        <TextInput style ={{height: 40}}
          placeholder="Masukkan Tinggi"
          onChangeText={(tinggi)=>this.setState({tinggi})}
          keyboardType = 'numeric'
        />

        <Button
          onPress={()=>this.setState({
            volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
          })}
          title ="Hitung"
          //backgroundColor= "#76FF03"
          color = "#00C853"
          accessibilityLabel="Klik untuk menghitung"
        />
      </View>

      <View style={{margin:20, backgroundColor:'#B9F6CA'}}>
        <Text style = {{padding: 10, fontSize: 20}}>
          Panjang = {this.state.panjang}{"\n"}
          Lebar =  = {this.state.lebar}{"\n"}

          Tinggi= {this.state.tinggi} {"\n"}
          Volume = {this.state.volume}
        </Text>
      </View>
    </View>
  );
  }
}
AppRegistry.registerComponent('AppForm2', () => VolumeBalok);
