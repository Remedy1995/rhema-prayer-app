import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import { Button, Block, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryItems } from '../components/CategoryItems';
import { ImagesData } from '../constants/Images';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Card } from '../components/Card';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import { Colors } from '../Utils/Colors';
import { AudioPicker } from '../components/uploadAudio';
import { useState } from 'react';
const { width, height } = Dimensions.get('screen');
import products from '../constants/products';


console.log('This is width',width)

// export default class Home extends React.Component {
//   renderSearch = () => {
//     const { navigation } = this.props;
//     const iconCamera = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

//     return (
//       <Input
//         right
//         color="black"
//         style={styles.search}
//         iconContent={iconCamera}
//         placeholder="What are you looking for?"
//         onFocus={() => navigation.navigate('Pro')}
//       />
//     )
//   }

//   renderTabs = () => {
//     const { navigation } = this.props;

//     return (
//       <Block row style={styles.tabs}>
//         <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Pro')}>
//           <Block row middle>
//             <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
//             <Text size={16} style={styles.tabTitle}>Categories</Text>
//           </Block>
//         </Button>
//         <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Pro')}>
//           <Block row middle>
//             <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
//             <Text size={16} style={styles.tabTitle}>Best Deals</Text>
//           </Block>
//         </Button>
//       </Block>
//     )
//   }

const renderProducts = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.products}>
      <Block flex>
        <Product product={products[0]} horizontal />
        <Block flex row>
          <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
          <Product product={products[2]} />
        </Block>
        <Product product={products[3]} horizontal />
        <Product product={products[4]} full />
      </Block>
    </ScrollView>
  )
}



const renderClickUpload = () => {
  const dispatch = {
    press: () => { }
  }
  const AudioInformation = async (data) => {
    dispatch.press = data;
  }

  return (
    <Card style={{

      flexDirection: 'column', justifyContent: 'center', width: width, backgroundColor: 'white',
      justifyContent: 'center', height: height * 0.5, alignItems: 'center',
      marginLeft: 0, borderRadius: 0, marginTop: 0
    }}>
    
      {/* <View style={{
            backgroundColor: 'white',
            width: width, height: 80,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            top: 175
          }}> */}
      {/* <Text style={styles.tabTitle1}>Get a taste of what Dwell has to offer by diving
            into the Scriptures right away</Text> */}
      {/* </View> */}

      {/* </ImageBackground> */}
      <AudioPicker getAudioData={AudioInformation} />

    </Card>


  )

}

const renderTopHeader = () => {
  return (
    <Card style={{

      flexDirection: 'column', justifyContent: 'center', width: width, backgroundColor: 'brown',
      justifyContent: 'center', height: height * 0.45, alignItems: 'center',
      marginLeft: 0, borderRadius: 0, marginTop: 0
    }}>
      {/* <ImageBackground source={{ uri: 'https://www.pureflix.com/hs-fs/hubfs/Imported_Blog_Media/praying-together-600px-412px-Mar-29-2023-05-16-04-8315-PM.jpg?width=575&name=praying-together-600px-412px-Mar-29-2023-05-16-04-8315-PM.jpg' }} style={{ width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.7 }}> */}

      <FontAwesome5 name="file-upload" size={width > 360 ? 120 : 90} color="white" />
      <Text style={styles.audioText}>Upload all your Scriptural</Text>
      <Text style={styles.audioTextOne}>Audio Messages</Text>
      <Text style={styles.audioTextTwo}>Feel free to post your audio Contents</Text>
      {/* 
        <View style={{
          // backgroundColor: 'blue',
          width: width, height: 100,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          top: 155
        }}> */}

      {/* </View> */}
      {/* <View style={{
          backgroundColor: 'white',
          width: width, height: 80,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          top: 175
        }}> */}
      {/* <Text style={styles.tabTitle1}>Get a taste of what Dwell has to offer by diving
          into the Scriptures right away</Text> */}
      {/* </View> */}

      {/* </ImageBackground> */}


    </Card>


  )
}



export default function Posts() {
  return (
    <Block flex style={{ backgroundColor: 'white' }}>
      {renderTopHeader()}
      {renderClickUpload()}
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
