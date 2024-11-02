import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import ImageViewer from "@/components/ImageViewer";
import Button from '@/components/Button';

const PlaceholderImage = require('@/assets/images/images/image_1.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a PPT file" />
        <Button label="Transform to Audio" />
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
