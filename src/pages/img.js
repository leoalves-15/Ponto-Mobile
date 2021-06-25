import React, {useState} from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';



export default function img() {
  const [pictureData, setPictureData] = useState();



  function LaunchCamera() {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };



    ImagePicker.launchCamera(options, response => {
      setPictureData(response.data);
    });
  }



  return (
    <View style={styles.container}>
      <Text>Tap bello button to take a pic:</Text>
      <TouchableOpacity style={styles.btn} onPress  ={LaunchCamera}>
       <Text>teste</Text>      </TouchableOpacity>
      <Image
        style={styles.imgContainer}
        source={{
          uri: 'data:image/jpeg;base64,' + pictureData,
        }}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    height: 200,
  },
  imgContainer: {
    marginTop: 30,
    borderWidth: 1,
    width: '80%',
    height: 200,
  },
});;
