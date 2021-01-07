import React from 'react'
import { StyleSheet, View, Text, Image, FlatList, Dimensions } from 'react-native'
import { connect } from 'react-redux'

const {width, height} = Dimensions.get('window');

function Profile(props){
	const { currentUser, posts } = props;
	console.log({ currentUser, posts})
	return(
	<View style={styles.container}>
		<View style={styles.containerInfo}>
			<Text> {currentUser.name} </Text>
			<Text> {currentUser.email} </Text>
		</View>

		<View style={styles.containerGallery}>
			<View style = {styles.mainContainerImage}>	
			<FlatList 
			horizontal = {false}
			numColumns = {3}
			data = {posts}
			renderItem = {({item}) =>{
				return(
				
				<View
				style={styles.containerImage}>
					<Image
						style={styles.image}
						source={{ uri: item.downloadURL }}
					/>
				</View>
				
				)
			}}/>
			
			</View>
				
		</View>
	</View>
	)
}
const styles=StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40
	},
	containerInfo: {
		margin: 20
	},
	containerGallery: {
		flex: 1,
		flexDirection: 'column',
		maxWidth: '800px',
		position: 'relative',
		alignItems:'stretch'
	},
	mainContainerImage: {
		flex: 1,
		flexDirection: 'row',
		position: 'relative'
	},
	containerImage: {
		flex: 1/3,
		alignItems: 'stretch',
		minWidth: width * 0.125,
		minHeight: height * 0.25,
	},
	image: {
		flex: 1, 
		aspectRatio: 1,
		resizeMode: 'stretch',
		margin: '10px'
	}

})
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts,
   
})
export default connect(mapStateToProps, null)(Profile);