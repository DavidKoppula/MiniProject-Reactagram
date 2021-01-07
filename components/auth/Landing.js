import React from 'react'
import {Text, View, Button} from 'react-native'
import styles from './styles'
import Header from '../Header'

export default function Landing({navigation}){
	return(
		<View style ={styles.landing}>
			<View >
				<Header />
				<Text style={styles.description}>	Bringing you closer to the people and things you love	</Text>
				<Text style ={styles.description}>Express yourself in new ways with the latest Instagram features.</Text>
				<Text style ={styles.description}>Get Started</Text>
				
				<View style ={styles.options}>
					<Text style = {styles.options}>Already part of the community?</Text>
					<View style ={{width:'50%', flex: 1}}>
						<Button
						title = "Sign Up"
						onPress = {() => navigation.navigate("Register")} />
					</View>
				</View>
				
				<View style ={styles.options}>
				<Text style = {styles.options}>Sign Up to be a part of this</Text>
					<View style ={{width:'50%'}}>
						<Button
						title = "Login"
						onPress = {() => navigation.navigate("Login")} />
					</View>
				</View>
			</View>
		</View>
		
	)
}



//style ={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center', backgroundColor: '#e4e4e7'}}
//style = {{width: '50%', maxWidth: '350px', backgroundColor: '#fff', borderColor:'#000'}}