import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Dimensions, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SelectComponent } from './selectAudio';
import { Button } from './Button';
import { AudioControlButtons } from './AudioButtonsControl';
import axios from 'axios';
const { width, height } = Dimensions.get('screen');

export const AudioPicker = ({ getAudioData }) => {
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [audioInfo, setAudioinfo] = useState(null);
    const [sound, setSound] = useState(null);
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (selectedAudio) {
            loadAudio();
        }
    }, [selectedAudio]);

    const loadAudio = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                { uri: selectedAudio }
            );
            setSound(sound);
        } catch (error) {
            console.error('Failed to load audio:', error);
        }
    };

    const pickAudio = async () => {
        try {
            const document = await DocumentPicker.getDocumentAsync({
                type: 'audio/*',
                copyToCacheDirectory: false,
            });
            console.log(document)
            setSelectedAudio(document.assets[0].uri);
            setAudioinfo(document)
        } catch (error) {
            console.error('Error picking audio:', error);
        }
    };

    const uploadAudio = async () => {
        console.log('clicked')
        setIsSubmitting(true);
        // Implement your code to upload the selected audio file to the server
        //construct formdata to post data to the backend 
        const formdata = new FormData();
        formdata.append('file', {
            uri: selectedAudio,
            type: audioInfo?.assets[0].mimeType,
            name: audioInfo?.assets[0].name
        })
        formdata.append('name',audioInfo?.assets[0].name);

        try {

            const response = await fetch('https://jubelsusu-g5yj.onrender.com/user/user-audio-upload', {
                method: 'POST',
                body: formdata,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            const responseData = await response.json();
            console.log('This is my data', responseData)
            if (responseData.status) {
                setIsSubmitting(false)
                setSound(null)
                Alert.alert('Success', responseData.message, [{
                    text: "OK"
                }]);
            }
           else if (responseData.error ==="File upload error") {
                setIsSubmitting(false)
                setSound(null)
                Alert.alert('Error', responseData.message, [{
                    text: "OK"
                }]);
            }
        }
        catch (error) {
            setIsSubmitting(false)
            Alert.alert('Failed', error.message, [{
                text: "OK"
            }]);
            console.log('There was an error posting to the api', error.message)
        }
    };

    const playAudio = async () => {
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
    getAudioData(pickAudio)
    return (
        <><SelectComponent selectData={pickAudio} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', top: width <= 360 ? -50 : -20 }}>
                {/* {
                    sound && <Pressable onPress={playAudio}>
                        <AntDesign name="play" size={35} color="brown" style={{ right: 20 }} />
                    </Pressable>
                }


                {sound && <Pressable onPress={stopAudio}>
                    <Entypo name="controller-stop" size={35} color="brown" style={{ right: -30 }} />
                </Pressable>} */}
                  { sound && <AudioControlButtons  Play={playAudio} Stop={stopAudio} />}
            </View>
            {
                sound &&
                <Button text={'Post Audio'} Submit={uploadAudio} isSubmitting={submitting}
                    style={{ top: width <= 360 ? -40 : -10, backgroundColor: 'brown', width: width * 0.95, }} />
            }

        </>
    );
};
