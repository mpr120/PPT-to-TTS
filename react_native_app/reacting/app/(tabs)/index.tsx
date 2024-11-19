import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/images/image_1.png');

export default function Index() {
  //user has clicked "Choose PPT button".
  //pull up menu of files as you did before.
  const handleChoosePPT = () =>{

  };
  //user has clicked "Transform to audio button"
  //as you did before create the audio file of the PPT/PPTX chosen from above.
  const handleTransform = () =>{

  };



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a PPT file" onPress={() => handleChoosePPT()} />
        <Button label="Transform to Audio" onPress={() => handleTransform()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* @tutinfo Add the value of <CODE>backgroundColor</CODE> property with <CODE>'#25292e'</CODE>.*/
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
