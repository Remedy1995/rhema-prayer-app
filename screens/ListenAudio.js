import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import { Button, Block, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CategoryItems } from '../components/CategoryItems';
import { ImagesData } from '../constants/Images';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { Card } from '../components/Card';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { Colors } from '../Utils/Colors';
import { Audio } from 'expo-av';
import axios from 'axios';
const { width, height } = Dimensions.get('screen');
import { AudioControlButtons } from '../components/AudioButtonsControl';
import { useState, useEffect } from 'react';



console.log('This is width', width)

const renderClickUpload = (selectedId) => {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [sound, setSound] = useState(null);


  const filterMusicById = (musicArray, id) => {
    return musicArray.filter((data, index) => id === index);
  }

  useEffect(() => {

    const fetchAudioFromServer = async () => {
      try {
        const response = await axios.get('https://jubelsusu-g5yj.onrender.com/user/user-audio-upload');

        const { data } = response?.data;
        if (response?.data) {
          const singleAudio = filterMusicById(data, selectedId);
          // setSelectedAudio(data[0].suri)
          console.log('Final music', singleAudio)
          setSelectedAudio(singleAudio[0]?.suri)
          console.log('seleff',selectedAudio)
          //AsyncStorage.setItem('audio_name', singleAudio[0].name)
        }
      }
      catch (error) {
        console.log('This is the error', error)
      }
    }
    //fetch audio
    fetchAudioFromServer();

    if (selectedAudio) {
      loadAudio();
    }

    //set audio name 

  }, [selectedAudio]);

  const loadAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: selectedAudio }
      );
      console.log('loaded music', sound)
      setSound(sound);
    } catch (error) {
      console.error('Failed to load audio:', error);
    }
  };
  const playAudio = async () => {
    console.log('hi')
    try {
      if (sound) {
        await sound?.playAsync();
      }
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  const stopAudio = async () => {
    try {
      if (sound) {
        await sound?.stopAsync();
      }
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  return (
    <Card style={{

      flexDirection: 'row', justifyContent: 'center', width: width, backgroundColor: 'white',
      justifyContent: 'center', height: height * 0.5, alignItems: 'center',
      marginLeft: 0, borderRadius: 0, marginTop: 0
    }}>

      {/* {selectedAudio && <ActivityIndicator color='brown' size='large' />} */}
      {/* <AudioControlButtons Play={playAudio} Stop={stopAudio} /> */}
      {sound === null ? <ActivityIndicator color='brown' size='large' /> : <AudioControlButtons Play={playAudio} Stop={stopAudio} />}
    </Card>


  )

}

const renderTopHeader = () => {
  // const [soundName, setSoundName] = useState('No Name');
  // useEffect(() => {
  //   async function getName() {
  //     try {
  //       const fullName = await AsyncStorage.getItem('audio_name');
  //       if (fullName !== null) {
  //         setSoundName(fullName)
  //       }
  //     }
  //     catch (error) {
  //       console.log('This is the error')
  //     }
  //   }
  //   getName();
  // }, []);
  return (
    <Card style={{

      flexDirection: 'column', justifyContent: 'center', width: width, backgroundColor: 'brown',
      justifyContent: 'center', height: height * 0.5, alignItems: 'center',
      marginLeft: 0, borderRadius: 0, marginTop: 0
    }}>
      <MaterialCommunityIcons name="speaker-wireless" size={width > 360 ? 120 : 90} color="white" />
      <Text style={styles.audioText}>Play to Listen to Your </Text>
      <Text style={styles.audioTextOne}>Audio Message</Text>
      <Text style={styles.audioTextTwo}>Listen to God's Word</Text>
    </Card>


  )
}



export default function ListenAudio({ route }) {


  selectedId = route.params.data_id;
  console.log('selected id', selectedId)
  var selectedId;
  return (
    <Block flex style={{ backgroundColor: 'white' }}>
      {renderTopHeader()}
      {renderClickUpload(selectedId)}
    </Block>
  );

}
const styles = StyleSheet.create({
  home: {
    width: width,
    height: height
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: width > 360 ? 45 : 40,
    padding: width > 360 ? 75 : 50,
    textAlign: 'center',
    top: width > 360 ? 80 : 50,
    // right: 80,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
    position: 'absolute',
    zIndex: 900,
    fontFamily: 'Roboto'

  },
  audioText: {
    // lineHeight: width > 360 ? 45 : 40,
    padding: width > 360 ? 20 : 20,
    textAlign: 'center',
    // top: width > 360 ? 80 : 50,
    // right: 80,
    fontWeight: 'normal',
    color: 'white',
    fontSize: 17,
    // position: 'absolute',
    // zIndex: 900,
    fontFamily: 'Roboto'

  },
  audioTextOne: {
    padding: width > 360 ? 0 : 0,
    textAlign: 'center',
    top: width > 360 ? -10 : -10,
    // right: 80,
    fontWeight: '900',
    color: 'white',
    fontSize: width > 360 ? 22 : 22,
    // position: 'absolute',
    // zIndex: 900,
    fontFamily: 'Roboto'

  },

  audioTextTwo: {
    padding: width > 360 ? 0 : 0,
    textAlign: 'center',
    top: width > 360 ? 0 : 0,
    // right: 80,
    fontWeight: 'normal',
    color: 'white',
    fontSize: width > 360 ? 16 : 16,
    // position: 'absolute',
    // zIndex: 900,
    fontFamily: 'Roboto'

  },
  audioSelect: {
    // padding: width > 360 ? 0 : 0,
    // textAlign: 'center',
    left: -10,
    top: width > 360 ? 0 : 0,
    // right: 80,
    fontWeight: 'bold',
    color: 'brown',
    fontSize: width > 360 ? 18 : 16,
    lineHeight: 25,
    // position: 'absolute',
    // zIndex: 900,
    fontFamily: 'Roboto'
  },

  tabTitle1: {
    lineHeight: width > 360 ? 30 : 24,
    fontWeight: 'normal',
    marginHorizontal: 25,
    top: width > 360 ? 240 : 180,
    color: 'white',
    fontSize: width > 360 ? 21 : 18,
    // position: 'absolute',
    // zIndex: 900,
    fontFamily: 'Roboto',
    paddingLeft: 0,
    textAlign: 'justify',
    // textTransform:'uppercase'
    // backgroundColor: 'brown',
    // marginLeft: 0,
    // borderRadius: 5

  },
  tabTitle2: {
    fontSize: 22,
    color: '#FFF454',
    padding: 15
  },

  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
