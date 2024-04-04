import React, { useState, useEffect } from 'react';
import { View, Button, Text,Pressable,Dimensions,StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
export const SelectComponent = ({selectData})=>{
    return (
        <Pressable onPress={selectData}>
        <View 
        style={{
          backgroundColor: 'transparent',
          width: width * 0.95,
           height: 120,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          top: width > 360 ? -50 : -55,
          // borderWidth : 0.5,
          borderRadius: 2,
          shadowColor: 'brown',
          shadowOffset: {
            width: 0.1,
            height: 1
          },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 1

        }}>
          <MaterialIcons name="audio-file" size={width > 360 ? 100 : 70} color="brown"/>

          <Text style={styles.audioSelect}> Click here to Select the audio from {'\n'} your Gallery</Text>
        </View>
    </Pressable>
    )
}

const styles = StyleSheet.create({
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
    
})
