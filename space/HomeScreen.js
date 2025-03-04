import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Linking } from 'react-native';

const style = StyleSheet.create({
  heading: {
    backgroundColor: '#B0BEC5',
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
    marginBottom: 15,
    marginTop: 10,
  },
  buttonStyling: {
    // backgroundColor: '#B0BEC5',
    // shadowColor: '#FFFFFF',
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
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 30,
    color: 'white',
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#121212',
  },
});
const styles = StyleSheet.create({
  missionsContainer: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  missionText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  missionButton: {
    marginTop: 10,
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
  imageStyle: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
});
// for space mission ...
const missions = [
  {
    name: 'Apollo 11',
    description: 'First moon landing mission',
    uiImage:
      'https://www.nasa.gov/wp-content/uploads/2019/07/edu_srch_celebrate_the_50th_anniversary_apollo11.jpg?resize=1200,936',
      url:"https://www.nasa.gov/mission/apollo-11/"
  },
  {
    name: 'Voyager 1',
    description: 'Exploring interstellar space',
    uiImage:
      'https://science.nasa.gov/wp-content/uploads/2023/12/pia02855.gif?w=1536&format=webp',
      url:"https://science.nasa.gov/mission/voyager/"
  },
  {
    name: 'Hubble Telescope',
    description: 'Observing distant galaxies',
    uiImage:
      'https://science.nasa.gov/wp-content/uploads/2023/07/52046519794-082f96a17d-o.jpg?w=1536&format=webp',
      url:"https://science.nasa.gov/mission/hubble/overview/about-hubble/#:~:text=Hubble%20has%20peered%20back%20into,history%20of%20the%20expanding%20universe."
  },
  {
    name: 'Mars Rover',
    description: 'Exploring the Martian surface',
    uiImage:
      'https://science.nasa.gov/wp-content/uploads/2024/03/sol016-lander-pan-pia05117.jpg?w=1536&format=webp',
      url :"https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/"
  },
];

export const SpaceMissions = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <Text style={style.heading}>Space Missions</Text>
      <FlatList
        data={missions}
        renderItem={({ item }) => (
          <View style={styles.missionsContainer}>
            <Image source={{ uri: item.uiImage }} style={styles.imageStyle} />
            <TouchableOpacity style={styles.missionButton} onPress={()=>{
              Linking.openURL(item.url);
            }}>
              {item.name}
            </TouchableOpacity>
            <Text style={styles.missionText}>{item.description}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export class HomeScreen extends Component {
  goToBuzzer = () => {
    this.props.navigation.navigate();
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#1a1a1a' }}>
        {/*<Neptune/>
      <Mars/>
      <Jupiter/>
      <Mercury/>
      <Saturn/>
      <Earth/>
      <Venus/>
      <Uranus/>*/}
        <Text style={style.heading}>Discover the Wonders of Space</Text>
        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/d8a647_278a4a67c6734cc297a614656b5f1b9d~mv2.jpg/v1/fill/w_864,h_556,al_c,lg_1,q_85/d8a647_278a4a67c6734cc297a614656b5f1b9d~mv2.jpg',
          }}
          style={{ width: '100%', height: 250, marginBottom: 20 }}
        />
        <View style={style.flexBox}>
          <TouchableOpacity style={style.buttonStyling}>
            planets
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonStyling}>
            Images
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonStyling}>
            Missions
          </TouchableOpacity>
        </View>
        <Text style={style.heading}>Explore planets</Text>
        <View style={style.flexBox}>
          <View>
            <Image
              source={{
                uri: 'https://cdn.mos.cms.futurecdn.net/FaWKMJQnr2PFcYCmEyfiTm-1200-80.jpg',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Earth')}>
              Earth
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Venus_-_December_23_2016.png',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Venus')}>
              venus
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={{
                uri: 'https://planetfacts.org/wp-content/uploads/2023/12/planet_uranus.jpg',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Uranus')}>
              Uranus
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://starwalk.space/gallery/images/saturn-planet-guide/1920x1080.jpg',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Saturn')}>
              saturn
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/435px-Mercury_in_true_color.jpg',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Mercury')}>
              mercury
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://cdn.esahubble.org/archives/images/screen/heic1914a.jpg',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Jupiter')}>
              jupiter
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={{
                uri: 'https://static.scientificamerican.com/sciam/cache/file/C454F5A6-536E-4C9F-AA6AF354BB85A85B_source.jpg?w=1200',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Mars')}>
              mars
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://planetfacts.org/wp-content/uploads/2023/12/planet_neptune.jpg',
              }}
              style={style.imageStyle}
            />
            <TouchableOpacity
              style={style.buttonStyling}
              onPress={() => this.props.navigation.navigate('Neptune')}>
              neptune
            </TouchableOpacity>
          </View>
        </View>
        {/* image code ... */}*<Text style={style.heading}>Explore Imaegs</Text>
        <View style={style.flexBox}>
          <Image
            source={{
              uri: 'https://live.staticflickr.com/65535/53805163612_3650942342_n.jpg',
            }}
            style={style.imageStyle}
          />
          <Image
            source={{
              uri: 'https://live.staticflickr.com/65535/53443280532_6bf73a620f_w.jpg',
            }}
            style={style.imageStyle}
          />
          <Image
            source={{
              uri: 'https://live.staticflickr.com/65535/53438185218_3e098ef438.jpg',
            }}
            style={style.imageStyle}
          />
          <Image
            source={{
              uri: 'https://live.staticflickr.com/65535/53610778314_1a5ea5186d.jpg',
            }}
            style={style.imageStyle}
          />
        </View>
        <TouchableOpacity
          style={style.buttonStyling}
          onPress={() => this.props.navigation.navigate('Images')}>
          More Images ➡️
        </TouchableOpacity>
        <View style={style.flexBox}></View>
        {/* for space missions code...*/}
        <SpaceMissions />
      </ScrollView>
    );
  }
}
