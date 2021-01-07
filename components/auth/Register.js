import React, { Component } from 'react'
import {TextInput, View, Button, Text	} from 'react-native'
import styles from './styles'
import Header from '../Header'
import firebase from 'firebase'

class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
			email : '',
			password : '',
			name : ''	
		}
	}

	onSignUp = () =>{
		const {email, password, name} = this.state
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((result) =>{
			console.log(result)
			firebase.firestore().collection("users")
			.doc(firebase.auth().currentUser.uid)
			.set({
				name,
				email,
			})
		})
		.catch((error) =>{
			console.log(error)
		})	
	}

	render(){
		return(
			<View style ={{flex: 1, justifyContent: 'center'}}>
			<View style = {{alignItems: 'center'}}>
				<Header />
				<TextInput placeholder = "name" style = {styles.textOptions}
							onChangeText = {(name) => this.setState({name})}/>
				<TextInput placeholder = "email" style = {styles.textOptions}
							onChangeText = {(email) => this.setState({email})}/>
				<TextInput placeholder = "password"
							secureTextEntry = {true} style = {styles.textOptions}
							onChangeText = {(password) => this.setState({password})}/>						
				<View style ={{width:'25%'}}>
					<Button
						onPress = {() => this.onSignUp()}
						title = "Sign Up"/>
				</View>
				
			</View>	
			</View>			
		)
	}
}

export default Register