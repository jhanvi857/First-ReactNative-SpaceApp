import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

const ImageGallery = ({navigation}) => {
  const imageData = [
    {
      imgUrl:
        'https://live.staticflickr.com/65535/54216894650_97fe8f6ecd_w.jpg',
      textSection: 'Hubble spice a cosmic eye',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/54202259495_6c6c6385a1_w.jpg',
      textSection: 'hubble images a grand spiral',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/54194867557_7b7f52949b_c.jpg',
      textSection: 'Jupiter: 10 years of OPAL observation',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/54196001153_eb257da5ab_z.jpg',
      textSection: 'Decade of tracking outer planets',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53734779441_cb2d9a81a6_z.jpg',
      textSection: 'Hubble views cosmic dust lanes',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53723475484_97b7f55c17_w.jpg',
      textSection: 'Dawn of a sun-like star',
    },
    {
      imgUrl: 'https://live.staticflickr.com/65535/53710641802_eb2d0929c9.jpg',
      textSection: 'Glimpse of star forming factory',
    },
    {
      imgUrl: 'https://live.staticflickr.com/65535/53630011023_acef87fa8f.jpg',
      textSection: 'Field of stars',
    },
    {
      imgUrl: 'https://live.staticflickr.com/65535/53610778314_1a5ea5186d.jpg',
      textSection: 'New Star Proclaiming Presence with Cosmic Lightshow',
    },
    {
      imgUrl: 'https://live.staticflickr.com/65535/53603634071_83e98be23d.jpg',
      textSection: 'The spider galaxy',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53582226179_12d2d8f8ba_z.jpg',
      textSection: 'M17',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53543908725_e26e354646_n.jpg',
      textSection: 'Massive Star Forming',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53502097195_afe806d8f2_w.jpg',
      textSection: 'A Distorted spiral',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53498407311_006ec3d63e_w.jpg',
      textSection: 'Faint bridge of stars',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53498377971_f0f599b9ab_n.jpg',
      textSection: 'Bright Galaxy Group LEDA 60847',
    },
    {
      imgUrl:
        'https://live.staticflickr.com/65535/53438517225_14a959961a_w.jpg',
      textSection: 'NGC 5283: A Beautiful Luminous Galaxy',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    <TouchableOpacity title="Back to Home" onPress={() => navigation.navigate('Home')} style={styles.backButton}>Back to home</TouchableOpacity>
      
      <Text style={styles.title}>Image Gallery</Text>
      <FlatList
        data={imageData}
        renderItem={({ item }) => (
          <View style={styles.flexBox}>
            <Image source={{ uri: item.imgUrl }} style={styles.imageStyle} />
            <Text style={styles.textSec}>{item.textSection}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 30,
    color: 'white',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#1a1a1a',
  },
  imageStyle: {
    height: 150,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  textSec: {
    fontSize: 18,
    color: 'white',
  },
  backButton: {
    backgroundColor: '#444',
    shadowColor: '#FFFFFF',
    //shadowOpacity: 0.5,
    shadowRadius: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    color: 'white',
    fontSize: 25,
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default ImageGallery;
