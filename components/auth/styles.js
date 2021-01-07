import {Image, StyleSheet, TextStyle} from 'react-native'

export const styles = StyleSheet.create({
	landing : {
		flex: 1, 
		flexDirection : 'column', 
		justifyContent:'center', 
        alignItems:'center',
    },
	logo:{
		fontSize: '3rem',
		textAlign: 'center',
		margin: '20px'
	},
	description:{
		fontSize: '1.5rem',
		textAlign: 'center',
		margin: '20px'
	},
	button:{
		padding: '30px'
	},
	options: {
		flex:1, 
		flexDirection: 'column', 
		alignItems: 'center',
		margin : '10px',
		fontSize:'1.2rem'
    },
    textOptions: {
        padding: '1rem',
        fontSize: '1.2rem',
        borderWidth : 1.0,
        margin: '10px',
        backgroundColor: '#e4e4e7',
        borderColor: '#b8b0b0',
    }
}); 

export default styles