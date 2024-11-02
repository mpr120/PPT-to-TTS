import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.underlineText, styles.specialText]}>How to use this APP:{"\n"}</Text>
      <Text style={[styles.text, styles.boldText]}>Step 1:{"\n"}</Text>
      <Text style={styles.text}>Click "Choose a PPT file" on Home page.{"\n"}</Text>
      <Text style={[styles.text, styles.boldText]}> Step 2:{"\n"}</Text>
      <Text style={styles.text}>Click "Transform to Audio" on the Home page.{"\n"}</Text>
      <Text style={[styles.text, styles.boldText]}>Step 3:{"\n"}</Text>
      <Text style={styles.text}>Navigate to the Listen pageto control the Audio.{"\n"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  boldText: {
    fontWeight: 'bold',
  },
  specialText: {
    fontSize: 40, // Specific font size for this step
  },
});
