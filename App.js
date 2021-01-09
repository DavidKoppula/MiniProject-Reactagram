import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {View, Text} from 'react-native'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import AddScreen from './components/main/Add'
import SaveScreen from './components/main/Save' 

import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk' // to user dispatch

const store = createStore(rootReducer, applyMiddleware(thunk))


import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByd43_nCCgY0Onh7J0F0a2h1AGUrzIllI",
  authDomain: "reactagram-acd5d.firebaseapp.com",
  projectId: "reactagram-acd5d",
  storageBucket: "reactagram-acd5d.appspot.com",
  messagingSenderId: "867982936069",
  appId: "1:867982936069:web:c00c382dd11273b2a8f46c",
  measurementId: "G-0DEG9V63WK"
};

if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)



const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loaded : false
    }
  }

  componentDidMount(){    
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true})
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true})
      }
    })
  }

  render(){
    const {loaded, loggedIn} = this.state;
    if(!loaded){
      return(
        <View style = {{flex: 1, justifyContent: 'center'}}>
          <Text> Loading... </Text>
        </View> 
      ) 
    } 

    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "Landing" style ={{width: '100px'}}>
            <Stack.Screen name = "Landing" component = {LandingScreen} options = {{headerShown: false}}/>
            <Stack.Screen name = "Register" component = {RegisterScreen}/>
            <Stack.Screen name = "Login" component = {LoginScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    else
      return(
        <Provider store ={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName = "Main">
              <Stack.Screen name = "Main" component = {MainScreen} options = {{headerShown: false}}/>
              <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}/> 
              <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation}/>
            </Stack.Navigator>
          </NavigationContainer>  
        </Provider> 
      )
  }
} 


