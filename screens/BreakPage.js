import React, { Component } from 'react';
import {View, TouchableOpacity, Text, TextInput, StyleSheet, Alert, Modal, ScrollView, KeyboardAvoidingView, Touchable} from 'react-native';
import db from '../config';
//import SantaAnimation from '../components/Santa.js';
import firebase from 'firebase';
import  MyHeader  from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize'
import Hyperlink from 'react-native-hyperlink';


export default class BreakPage extends React.Component{
    constructor(props){
    super(props);
  }


  render() {
   return (
    <ScrollView>
<View style={{ flex: 0.5, backgroundColor: '#81B7B1' }}>        
<MyHeader title="Take a Break" navigation={this.props.navigation} />

<Text style = {styles.text}>After a long, hard study session, you deserve to take a break!</Text>
<Text style = {styles.text}>Choose a time of your liking, and start the timer to close your eyes, relax and reflect :)</Text>

    <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://vclock.com/set-timer-for-5-minutes/' ? '5 Minute Break' : url }
     >
     <Text style= {styles.label}>
      Take a https://vclock.com/set-timer-for-5-minutes/ .
     </Text>
     </Hyperlink>


     <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://vclock.com/set-timer-for-10-minutes/' ? '10 Minute Break' : url }
     >
     <Text style= {styles.label}>
      Take a https://vclock.com/set-timer-for-10-minutes/ .
     </Text>
     </Hyperlink>

     <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://vclock.com/set-timer-for-15-minutes/' ? '15 Minute Break' : url }
     >
     <Text style= {styles.label}>
      Take a https://vclock.com/set-timer-for-15-minutes/ .
     </Text>
     </Hyperlink>

     <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://vclock.com/set-timer-for-20-minutes/' ? '20 Minute Break' : url }
     >
     <Text style= {styles.label}>
      Take a https://vclock.com/set-timer-for-20-minutes/ .
     </Text>
     </Hyperlink>

     <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://vclock.com/set-timer-for-25-minutes/' ? '25 Minute Break' : url }
     >
     <Text style= {styles.label}>
      Take a https://vclock.com/set-timer-for-25-minutes/ .
     </Text>
     </Hyperlink>

     <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ url => url === 'https://vclock.com/set-timer-for-30-minutes/' ? '30 Minute Break' : url }
     >
     <Text style= {styles.label}>
      Take a https://vclock.com/set-timer-for-30-minutes/ .
     </Text>
     </Hyperlink>

     <Text>      </Text>
     <Text>      </Text>

     <Text style = {styles.text}> Use this time to absorb all that you have learnt! </Text>
     <Text style = {styles.text}> Happy Studying! </Text>
    
     <Text>      </Text>
     <Text>      </Text>
     <Text>      </Text>
     <Text>      </Text>
     <Text>      </Text>
     <Text>      </Text>
     <Text>      </Text>


      </View>
      </ScrollView>);
    } 
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    alignItems: 'center',
    padding:RFValue(10),
  },
  label:{
    fontSize:RFValue(18),
    //color:"#717D7E",
    fontWeight:'bold',
    padding:RFValue(10),
    //marginLeft:RFValue(20)
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: RFValue(10)

  },
});