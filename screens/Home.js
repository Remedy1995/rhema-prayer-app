import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Block, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components/';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryItems } from '../components/CategoryItems';
import { ImagesData } from '../constants/Images';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Card } from '../components/Card';
import { ImageBackground } from 'react-native';
import { Colors } from '../Utils/Colors';

const { width, height } = Dimensions.get('screen');
import products from '../constants/products';

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

const renderPosts = () => {

  const listSpecificCategory = () => {
    console.log('hello world')
  }
  return (
    <><Block flex style={styles.home}>
      <Text style={{ fontSize: width > 360 ? 22 : 18, padding: 5, marginLeft: 20, color: 'white', top: 10, fontWeight: '800' }}>Rhema Preachings</Text>
      <Text style={{ marginLeft: 20, padding: 5,  fontSize: width > 360 ? 22 : 18, lineHeight: 30, color: 'white' }}>
        Here is a list of Rhema Preachings.</Text>
      <FlatList overScrollMode="never" data={ImagesData} showsHorizontalScrollIndicator={false} horizontal={true} renderItem={(item) =><CategoryItems id={item.item.id} item={item?.item} keyExtractor={(item) => item.id}
        cardStyle={{ bottom: 40 }} />}/>

    </Block>
      <View style={{ top: width > 360 ? -60 : 0, padding: 10 }}>
        <Text style={{ fontSize: width > 360 ? 22 : 18, marginLeft: 20, color: 'white', fontWeight: 'bold' }}>Bible Verse Of the Day</Text>
        <Text style={{ fontSize: width > 360 ? 21 : 17, marginLeft: 20, color: 'white', fontWeight: 'normal', }}>John 14 : 6</Text>
        <Text style={{ fontSize: width > 360 ? 20 : 16, marginLeft: 20, color: 'white', fontWeight: 'normal', lineHeight: 30 }}>
          I am the way, the truth and the life. No one comes to the Father except through me. Amen.
        </Text>
      </View>
      {/* <Text style={{ marginLeft: 20, fontSize: 19, lineHeight: 30, color: 'white', top: -30 }}>John 14 : 6</Text>
      
      <Text style={{ marginLeft: 20, fontSize: 19, lineHeight: 30, color: 'white', top: -30 }}>
        I am the way, the truth and the life.Read More
      </Text>  */}

    </>


  )
}

const renderTopHeader = () => {
  return (
    <Card style={{
      flex: 1, flexDirection: 'row', justifyContent: 'center', width: width, backgroundColor: 'brown',
      justifyContent: 'center',
      marginLeft: 0, borderRadius: 0, marginTop: 0
    }}>
      <ImageBackground source={{ uri: 'https://www.pureflix.com/hs-fs/hubfs/Imported_Blog_Media/praying-together-600px-412px-Mar-29-2023-05-16-04-8315-PM.jpg?width=575&name=praying-together-600px-412px-Mar-29-2023-05-16-04-8315-PM.jpg' }} style={{ width: '100%', height: '100%', resizeMode: 'cover', opacity: 0.7,position :'absolute' }}>



        {/* 
        <View style={{
          // backgroundColor: 'blue',
          width: width, height: 100,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          top: 155
        }}> */}
        <Text style={styles.tabTitle}> Rhema Prayer App !!!</Text>
        {/* </View> */}
        {/* <View style={{
          backgroundColor: 'white',
          width: width, height: 80,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
          top: 175
        }}> */}
        <Text style={styles.tabTitle1}>Get a taste of what Rhema has to offer by diving
          into the Scriptures right away</Text>
        {/* </View> */}

      </ImageBackground>


    </Card>

  )
}

const renderBottom = () => {
  return (
    <Block flex >

    </Block>
  )
}

//   render() {
//     return (
//       <Block flex center style={styles.home}>
//         {this.renderProducts()}
//       </Block>
//     );
//   }
// }


export default function Home() {
  return (
    <Block flex style={{ backgroundColor: 'brown' }}>
      {renderTopHeader()}
      {renderPosts()}

      {/* {renderBottom()} */}
      {/* {renderProducts()} */}
      {/* <Block style={{padding : 10}}>
           <Text style={{ fontSize: 22, marginLeft: 20, color: 'white', fontWeight: '900',  }}>Bible Verse Of the Day</Text>
           <Text style={{ fontSize: 22, marginLeft: 20, color: 'white', fontWeight: '900',  }}>Bible Verse Of the Day</Text>
      </Block> */}
      {/* <View >
      <Text style={{ fontSize: 22, marginLeft: 20, color: 'white', fontWeight: '900',  }}>Bible Verse Of the Day</Text>
      <Text style={{ fontSize: 22, marginLeft: 20, color: 'white', fontWeight: '900',  }}>Bible Verse Of the Day</Text>
      </View> */}
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
    padding: width > 360 ? 5 : 5,
    textAlign: 'center',
    top: width > 360 ? 170 : 130,
    // right: 80,
    left : width > 360 ?60 : 40,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 28,
    position: 'absolute',
    zIndex: 900,
    fontFamily: 'Roboto',
    backgroundColor :'brown'

  },
  tabTitle1: {
    lineHeight: width > 360 ? 30 : 24,
    fontWeight: 'normal',
    marginHorizontal: 25,
    top: width > 360 ? 240 : 190,
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
