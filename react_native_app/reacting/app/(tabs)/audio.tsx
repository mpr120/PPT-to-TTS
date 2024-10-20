import { Text, View, StyleSheet } from 'react-native';

export default function AudioScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is where we put audio buttons after they choose a PPT file</Text>
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
    },
  });