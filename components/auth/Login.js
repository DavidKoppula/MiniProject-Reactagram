import React, { Component } from 'react'
import {TextInput, View, Button} from 'react-native'
import styles from './styles'
import Header from '../Header'
import firebase from 'firebase'
class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			email : '',
			password : '',
		}
	}

	onSignUp = () =>{
		const {email, password, name} = this.state
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((result) =>{
			console.log(result)
		})
		.catch((error) =>{
			console.log(error)
		})
	}

	render(){
		return(
			<View style ={{flex: 1, justifyContent: 'center'}}>
			<View style = {{alignItems: 'center'}}>
				<Header/>
				<TextInput placeholder = "email" style = {styles.textOptions}
							onChangeText = {(email) => this.setState({email})}/>
				<TextInput placeholder = "password" style = {styles.textOptions}
							secureTextEntry = {true}
							onChangeText = {(password) => this.setState({password})}/>						
				<View style ={{width:'25%'}}>
					<Button
						onPress = {() => this.onSignUp()}
						title = "Sign In"/>
				</View>
			</View>			
			</View>	
		)
	}
}

export default Login