import React from 'react'

import {View, Text} from 'react-native'

export default function Feed({user}){
	return(
		<View>
			<Text style ={{textAlign: 'center'}}> Feed </Text>
			<Text> Welcome, {user}! </Text>
		</View>

	)
}