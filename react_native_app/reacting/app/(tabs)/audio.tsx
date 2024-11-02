import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useEffect, useRef }  from 'react';

export default function AudioScreen() {
  
  const handleSpeedChange = async (rate: number) => {
    try {
      await sound.current.setRateAsync(rate, true); 
      console.log(`Playback speed set to ${rate}x`);
    } catch (error) {
      console.error('Error setting playback speed:', error);
    }
  };

  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
          console.warn('Permission to access audio was denied');
        }
      } catch (error) {
        console.error('Error requesting audio permission:', error);
      }
    };

    const loadAudio = async () => {
      try {
        // Joe, here you fetch the .wav file from the python backend, please provide the URL
        const response = await fetch('http://your-python-backend/get-audio');
        const audioUrl = response.url; 

        // Load the audio from the URL
        await sound.current.loadAsync({ uri: audioUrl });
      } catch (error) {
        console.error('Error loading audio:', error);
      }
    };

    requestPermissions();
    loadAudio();

    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);

  type AudioAction = 'play' | 'pause' | 'stop';

  const handleAudioRequest = async (action: AudioAction) => {
    switch (action) {
      case 'play':
        console.log('Playing sound...');
        await sound.current.playAsync();
        break;
      case 'pause':
        console.log('Pausing sound...');
        await sound.current.pauseAsync();
        break;
      case 'stop':
        console.log('Stopping sound...');
        await sound.current.stopAsync();
        break;
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.spaceContainer}>

      </View>
      <View style={styles.audioControls}>    
        <TouchableOpacity style={styles.button} onPress={() => handleAudioRequest('play')}>
          <Ionicons name="play" size={55} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAudioRequest('pause')}>
          <Ionicons name="pause" size={55} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleAudioRequest('stop')}>
          <Ionicons name="stop" size={55} color="white" />
        </TouchableOpacity>
      </View>

      {/* Speed Control Buttons in a New Container */}
      <View style={styles.speedControls}>
        <TouchableOpacity style={styles.speedButton} onPress={() => handleSpeedChange(0.5)}>
          <Text style={styles.buttonText}>0.5x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedButton} onPress={() => handleSpeedChange(1)}>
          <Text style={styles.buttonText}>1x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedButton} onPress={() => handleSpeedChange(1.5)}>
          <Text style={styles.buttonText}>1.5x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.speedButton} onPress={() => handleSpeedChange(2)}>
          <Text style={styles.buttonText}>2x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#25292e',
  },
  button: {
    backgroundColor: '#6200ea',
    borderRadius: 80,
    width: 115,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  spaceContainer:{
    flex: 1,

  },
  audioControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  speedControls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedButton: {
    backgroundColor: '#6200ea',
    borderRadius: 40,
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
