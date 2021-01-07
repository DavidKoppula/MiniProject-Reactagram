import React, { useState, useEffect } from 'react';
import { Platform, View, StyleSheet, Button, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function Add({ navigation }) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [types, setTypes] = useState(null);
  const [camera, setCamera] = useState(null)
  const [image, setImage] = useState(null)
  
  useEffect(() => {
    (async () => {
      const types = await Camera.getAvailableCameraTypesAsync();
      alert(JSON.stringify("Need to access your cameras"));
      setTypes(types);
      
      if (Platform.OS === 'web') {
        setHasCameraPermission(true);
      } else {
        const cameraStatus = await Camera.requestPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
        
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (galleryStatus.status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
        else setHasGalleryPermission(galleryStatus.status === 'granted');
      }
      
      if (Platform.OS === 'web') {
        setHasGalleryPermission(true);
      } else {
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (galleryStatus.status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
        else setHasGalleryPermission(galleryStatus.status === 'granted');
      }

    })();
  }, []);

  if (hasCameraPermission === null || hasGalleryPermission === false) {
    return <View/>;
  }
  if (hasGalleryPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }  

  const takePicture = async () =>{
	  if(camera){
		  const data = await camera.takePictureAsync(null)
		  setImage(data.uri)
	  }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.cameraContainer}>
        <Camera style={styles.fixedRatio} type={type} ratio = {'1:1'}
            ref = {ref => setCamera(ref)}
        ></Camera>	
      </View>
	  	<Button
			title = "Flip Camera"
			onPress={() => {
			setType(
				type === Camera.Constants.Type.back
				? Camera.Constants.Type.front
				: Camera.Constants.Type.back
			);
			}}>
	  	</Button>
      <Button title = "Capture"  onPress = {() => takePicture()}></Button>
      <Button title = "Select from gallery" onPress = {() => pickImage()}/>  
      <Button title="Save" onPress={() => navigation.navigate('Save', { image })} /> 
      {image && <Image source = {{uri: image}}
              style = {{flex:1}}/>}
                	
	</View>
  );
}
const styles = StyleSheet.create({ 
	cameraContainer: {
		flex: 1
	},
	fixedRatio: {
		flex: 1,
		aspectRatio: 1
	}
}); 