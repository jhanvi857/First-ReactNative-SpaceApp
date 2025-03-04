import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

const myStyle = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageStyle: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  para: {
    color: 'white',
    fontWeight: 400,
    textAlign: 'justify',
    fontSize: 16,
    marginBottom: 20,
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

export const Earth = ({ navigation }) => {
  const earthFacts = [
    {
      heading: 'Namesake',
      answer:
        'The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means the ground.',
      imageUri:
        'https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/3/Earth-perfec-life-Shutterstock.jpg.rend.hgtvcom.1280.960.suffix/1583192498207.jpeg',
    },
    {
      heading: 'Potential for Life',
      answer:
        "Earth has a very hospitable temperature and mix of chemicals that have made life abundant here. Most notably, Earth is unique in that most of our planet is covered in liquid water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago.",
      imageUri:
        'https://i.pinimg.com/736x/5f/b7/1a/5fb71a7ad932a420cb24264b087a11fe.jpg',
    },
    {
      heading: 'Size and Distance',
      answer:
        "With an equatorial diameter of 7926 miles (12,760 kilometers), Earth is the biggest of the terrestrial planets and the fifth largest planet in our solar system. From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun.",
      imageUri:
        'https://c02.purpledshub.com/uploads/sites/48/2020/08/Earth-orbit-Sun-7bfd38c.jpg',
    },
    {
      heading: 'Orbit and Rotation',
      answer:
        "As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day, and the year it's added to is called a leap year.\n \n Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is tilted toward the Sun, and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. \n \n Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, both hemispheres receive roughly equal amounts of heat from the Sun.",
      imageUri:
        'https://images.newscientist.com/wp-content/uploads/2021/04/30151523/how_many_moons_does_earth_havekr8rk7.jpg',
    },
    {
      heading: 'Moons',
      answer:
        "Earth is the only planet that has a single moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years. \n \n  Some moons are bits of rock that were captured by a planet's gravity, but our Moon is likely the result of a collision billions of years ago. When Earth was a young planet, a large chunk of rock smashed into it, displacing a portion of Earth's interior. The resulting chunks clumped together and formed our Moon. With a radius of 1,080 miles (1,738 kilometers), the Moon is the fifth largest moon in our solar system (after Ganymede, Titan, Callisto, and Io). \n \n Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.The Moon is an average of 238,855 miles (384,400 kilometers) away from Earth. That means 30 Earth-sized planets could fit in between Earth and its Moon.",
      imageUri:
        'https://osr.org/wp-content/uploads/2021/05/Instagram-Post-Earth.jpg',
    },
    {
      heading: 'Earth view',
      imageUri:
        'https://www.icr.org/i/Main%20Stage%20-%201400x1050/atmospherevitaltolife-1400x1050',
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity title="Back to Home" onPress={() => navigation.navigate('Home')} style={myStyle.backButton}>Back to home</TouchableOpacity>
      <Text style={myStyle.heading}>Earth</Text>
      <Image
        source={{
          uri: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002131/GSFC_20171208_Archive_e002131~large.jpg?w=1919&h=1919&fit=clip&crop=faces%2Cfocalpoint',
        }}
        style={myStyle.imageStyle}
      />
      {/*<Text style={myStyle.heading}>
        Some interesting facts about Earth.{'\n'}
      </Text>*/}
      <FlatList
        data={earthFacts}
        renderItem={({ item }) => (
          <View>
            <Text style={myStyle.heading}> {item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
            <Image style={myStyle.imageStyle} source={{ uri: item.imageUri }} />
          </View>
        )}
      />
    </ScrollView>
  );
};

export const Venus = ({ navigation }) => {
  const venusFacts = [
    {
      heading: 'Physical characteris',
      answer:
        "Venus is one of the four terrestrial planets in the Solar System, meaning that it is a rocky body like Earth. It is similar to Earth in size and mass and is often described as Earth's sister or twin. Venus is close to spherical due to its slow rotation. \n \n  Venus has a diameter of 12,103.6 km —only 638.4 km less than Earth's—and its mass is 81.5% of Earth's, making it the third-smallest planet in the Solar System. Conditions on the Venusian surface differ radically from those on Earth because its dense atmosphere is 96.5% carbon dioxide, with most of the remaining 3.5% being nitrogen. \nThe surface pressure is 9.3 megapascals and the average surface temperature is 737 K,above the critical points of both major constituents and making the surface atmosphere a supercritical fluid out of mainly supercritical carbon dioxide and some supercritical nitrogen.",
      imageUri:
        'https://i.pinimg.com/564x/43/d8/19/43d819383bb406cb3ea4189d4e184b40.jpg',
    },
    {
      heading: 'Geography',
      answer:
        "The Venusian surface was a subject of speculation until some of its secrets were revealed by planetary science in the 20th century. Venera landers in 1975 and 1982 returned images of a surface covered in sediment and relatively angular rocks. The surface was mapped in detail by Magellan in 1990–91. The ground shows evidence of extensive volcanism, and the sulphur in the atmosphere may indicate that there have been recent eruptions. \n \n About 80% of the Venusian surface is covered by smooth, volcanic plains, consisting of 70% plains with wrinkle ridges and 10% smooth or lobate plains. Two highland continents make up the rest of its surface area, one lying in the planet's northern hemisphere and the other just south of the equator. The northern continent is called Ishtar Terra after Ishtar, the Babylonian goddess of love, and is about the size of Australia. Maxwell Montes, the highest mountain on Venus, lies on Ishtar Terra. Its peak is 11 km (7 mi) above the Venusian average surface elevation. The southern continent is called Aphrodite Terra, after the Greek mythological goddess of love, and is the larger of the two highland regions at roughly the size of South America. \n \n A network of fractures and faults covers much of this area.There is recent evidence of lava flow on Venus (2024),such as flows on Sif Mons, a shield volcano, and on Niobe Planitia, a flat plain. There are visible calderas. The planet has few impact craters, demonstrating that the surface is relatively young, at 300–600 million years old.Venus has some unique surface features in addition to the impact craters, mountains, and valleys commonly found on rocky planets.",
      imageUri:
        'https://i.pinimg.com/736x/95/90/22/959022f50a086dccc626904478fd0484.jpg',
    },
    {
      heading: 'True colour image of Venus',
      answer:
        "Venus may have formed from the solar nebula with a different rotation period and obliquity, reaching its current state because of chaotic spin changes caused by planetary perturbations and tidal effects on its dense atmosphere, a change that would have occurred over the course of billions of years. The rotation period of Venus may represent an equilibrium state between tidal locking to the Sun's gravitation, which tends to slow rotation, and an atmospheric tide created by solar heating of the thick Venusian atmosphere. The 584-day average interval between successive close approaches to Earth is almost exactly equal to 5 Venusian solar days (5.001444 to be precise), but the hypothesis of a spin-orbit resonance with Earth has been discounted.Venus has no natural satellites. It has several trojan asteroids: the quasi-satellite 524522 Zoozve and two other temporary trojans, 2001 CK32 and 2012 XE133.",
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg',
    },
    {
      heading: 'The phases of Venus',
      answer:
        "A transit of Venus is the appearance of Venus in front of the Sun, during inferior conjunction. Since the orbit of Venus is slightly inclined relative to Earth's orbit, most inferior conjunctions with Earth, which occur every synodic period of 1.6 years, do not produce a transit of Venus above Earth. Consequently, Venus transits above Earth only occur when an inferior conjunction takes place during some days of June or December, the time where the orbits of Venus and Earth cross a straight line with the Sun. This results in Venus transiting above Earth in a sequence of currently 8 years, 105.5 years, 8 years and 121.5 years, forming cycles of 243 years.",
      imageUri:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Phases_Venus.jpg/330px-Phases_Venus.jpg',
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')} >Back to home</TouchableOpacity>
      
      <Text style={myStyle.heading}>Venus : The volcano planet </Text>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Venus_-_December_23_2016.png',
        }}
        style={myStyle.imageStyle}
      />
      <Text style={myStyle.para}>
        Venus is the second planet from the Sun. It is a terrestrial planet and
        is the closest in mass and size to its orbital neighbour Earth. Venus
        has by far the densest atmosphere of the terrestrial planets, composed
        mostly of carbon dioxide with a thick, global sulfuric acid cloud cover.
        At the surface it has a mean temperature of 737 K (464 °C; 867 °F) and a
        pressure of 92 times that of Earth's at sea level. These extreme
        conditions compress carbon dioxide into a supercritical state at Venus's
        surface.{'\n \n \n'}
        Internally, Venus has a core, mantle, and crust. Venus lacks an internal
        dynamo, and its weakly induced magnetosphere is caused by atmospheric
        interactions with the solar wind.It is one of two planets in the Solar
        System, the other being Mercury, that have no moons.Conditions perhaps
        favourable for life on Venus have been identified at its cloud layers.
        Venus may have had liquid surface water early in its history with a
        habitable environment,before a runaway greenhouse effect evaporated any
        water and turned Venus into its present state.{'\n \n \n'}
      </Text>
      <FlatList
        data={venusFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export const Uranus = ({ navigation }) => {
  const uranusFacts = [
    {
      heading: 'size and distance',
      answer:
        "Uranus orbits the Sun once every 84 years. As viewed against the background of stars, since being discovered in 1781, the planet has returned to the point of its discovery northeast of the binary star Zeta Tauri twice—in March 1865 and March 1949—and will return to this location again in April 2033.\n \n Its average distance from the Sun is roughly 20 AU (3 billion km; 2 billion mi). The difference between its minimum and maximum distance from the Sun is 1.8 AU, larger than that of any other planet, though not as large as that of dwarf planet Pluto. The intensity of sunlight varies inversely with the square of the distance—on Uranus (at about 20 times the distance from the Sun compared to Earth), it is about 1/400 the intensity of light on Earth.\n \n The orbital elements of Uranus were first calculated in 1783 by Pierre-Simon Laplace.With time, discrepancies began to appear between predicted and observed orbits, and in 1841, John Couch Adams first proposed that the differences might be due to the gravitational tug of an unseen planet. In 1845, Urbain Le Verrier began his own independent research into Uranus's orbit. On 23 September 1846, Johann Gottfried Galle located a new planet, later named Neptune, at nearly the position predicted by Le Verrier.",
      imageUri:
        'https://i.pinimg.com/564x/a3/ae/af/a3aeaf373d86b57e332e46d104c6771a.jpg',
    },
    {
      heading: 'potential',
      answer:
        "The mean apparent magnitude of Uranus is 5.68 with a standard deviation of 0.17, while the extremes are 5.38 and 6.03.Much of the variability is dependent upon the planetary latitudes being illuminated from the Sun and viewed from the Earth. Its angular diameter is between 3.4 and 3.7 arcseconds, compared with 16 to 20 arcseconds for Saturn and 32 to 45 arcseconds for Jupiter. At opposition, Uranus is visible to the naked eye in dark skies, and becomes an easy target even in urban conditions with binoculars.\n \n In response to Maskelyne's request, Herschel decided to name the object Georgium Sidus (George's Star), or the Georgian Planet in honour of his new patron, King George III. He explained this decision in a letter to Joseph Banks:\n \n In the fabulous ages of ancient times the appellations of Mercury, Venus, Mars, Jupiter and Saturn were given to the Planets, as being the names of their principal heroes and divinities. In the present more philosophical era it would hardly be allowable to have recourse to the same method and call it Juno, Pallas, Apollo or Minerva, for a name to our new heavenly body.",
      imageUri:
        'https://i.pinimg.com/564x/ff/a1/01/ffa101353ec1dc61a636eab3ed74b821.jpg',
    },
    {
      heading: 'Facts about uranus',
      answer:
        "Uranus's internal heat appears markedly lower than that of the other giant planets; in astronomical terms, it has a low thermal flux. Why Uranus's internal temperature is so low is still not understood. Neptune, which is Uranus's near twin in size and composition, radiates 2.61 times as much energy into space as it receives from the Sun, but Uranus radiates hardly any excess heat at all. The total power radiated by Uranus in the far infrared  part of the spectrum is 1.06±0.08 times the solar energy absorbed in its atmosphere.\n \n  The tenuous thermosphere extends over two planetary radii from the nominal surface, which is defined to lie at a pressure of 1 bar. The Uranian atmosphere can be divided into three layers: the troposphere, between altitudes of −300 and 50 km and pressures from 100 to 0.1 bar; the stratosphere, spanning altitudes between 50 and 4,000 km and pressures of between 0.1 and 10−10 bar; and the thermosphere extending from 4,000 km to as high as 50,000 km from the surface.There is no mesosphere.",
      imageUri:
        'https://i.pinimg.com/564x/fd/fb/5e/fdfb5e279dc80f319718fa5ead788207.jpg',
    },
    {
      heading: '',
      answer:
        'The middle layer of the Uranian atmosphere is the stratosphere, where temperature generally increases with altitude from 53 K (−220 °C; −364 °F) in the tropopause to between 800 and 850 K at the base of the thermosphere.The heating of the stratosphere is caused by absorption of solar UV and IR radiation by methane and other hydrocarbons, which form in this part of the atmosphere as a result of methane photolysis.The hydrocarbons occupy a relatively narrow layer at altitudes of between 100 and 300 km corresponding to a pressure range of 1,000 to 10 Pa and temperatures of between 75 and 170 K.',
      imageUri:
        'https://i.pinimg.com/474x/54/d8/34/54d8341905b5fcab6a5063a74b449512.jpg',
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')}>Back to Home</TouchableOpacity>
      
      <Text style={myStyle.heading}>Uranus</Text>
      <Image
        source={{
          uri: 'https://planetfacts.org/wp-content/uploads/2023/12/planet_uranus.jpg',
        }}
        style={myStyle.imageStyle}
      />
      <Text style={myStyle.para}>
        Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured
        ice giant. Most of the planet is made of water, ammonia, and methane in
        a supercritical phase of matter, which astronomy calls "ice" or
        volatiles. The planet's atmosphere has a complex layered cloud structure
        and has the lowest minimum temperature of all the Solar System's
        planets. It has a marked axial tilt of 82.23° with a retrograde rotation
        period of 17 hours and 14 minutes. This means that in an 84-Earth-year
        orbital period around the Sun, its poles get around 42 years of
        continuous sunlight, followed by 42 years of continuous darkness.
      </Text>
      <FlatList
        data={uranusFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export const Saturn = ({ navigation }) => {
  const saturnFacts = [
    {
      heading: 'facts about saturn',
      answer:
        "Saturn has an intrinsic magnetic field that has a simple, symmetric shape—a magnetic dipole. Its strength at the equator—0.2 gauss (20 μT)—is approximately one twentieth of that of the field around Jupiter and slightly weaker than Earth's magnetic field. As a result, Saturn's magnetosphere is much smaller than Jupiter's.The moon Titan orbits within the outer part of Saturn's magnetosphere and contributes plasma from the ionized particles in Titan's outer atmosphere. Saturn's magnetosphere, like Earth's, produces aurorae.\n \n Saturn is probably best known for the system of planetary rings that makes it visually unique. The rings extend from 6,630 to 120,700 kilometresoutward from Saturn's equator and average approximately 20 metres in thickness. They are composed predominantly of water ice, with trace amounts of tholin impurities and a peppered coating of approximately 7% amorphous carbon.",
      imageUri:
        'https://i.pinimg.com/564x/06/cd/df/06cddf9e28ae66ed8250a073dce91212.jpg',
    },
    {
      heading: 'size and distance',
      answer:
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass. The temperature, pressure, and density inside Saturn all rise steadily toward the core, which causes hydrogen to be a metal in the deeper layers.\n \n Standard planetary models suggest that the interior of Saturn is similar to that of Jupiter, having a small rocky core surrounded by hydrogen and helium, with trace amounts of various volatiles. Analysis of the distortion shows that Saturn is substantially more centrally condensed than Jupiter and therefore contains much more material denser than hydrogen near its center. Saturn's central regions are about 50% hydrogen by mass, and Jupiter's are about 67% hydrogen.",
      imageUri:
        'https://i.pinimg.com/564x/dc/21/ac/dc21ac9079a712614454c46d20879bc1.jpg',
    },
    {
      heading: 'Moons of saturn',
      answer:
        "Saturn has 146 known moons, 63 of which have formal names. It is estimated that there are another 100±30 outer irregular moons larger than 3 km (2 mi) in diameter.In addition, there is evidence of dozens to hundreds of moonlets with diameters of 40–500 meters in Saturn's rings, which are not considered to be true moons. Titan, the largest moon, comprises more than 90% of the mass in orbit around Saturn, including the rings.Saturn's second-largest moon, Rhea, may have a tenuous ring system of its own, along with a tenuous atmosphere. \n \n Many of the other moons are small: 131 are less than 50 km in diameter. Traditionally, most of Saturn's moons have been named after Titans of Greek mythology. Titan is the only satellite in the Solar System with a major atmosphere, in which a complex organic chemistry occurs. It is the only satellite with hydrocarbon lakes. \n \n On 6 June 2013, scientists at the IAA-CSIC reported the detection of polycyclic aromatic hydrocarbons in the upper atmosphere of Titan, a possible precursor for life.On 23 June 2014, NASA claimed to have strong evidence that nitrogen in the atmosphere of Titan came from materials in the Oort cloud, associated with comets, and not from the materials that formed Saturn in earlier times.",
      imageUri:
        'https://i.pinimg.com/564x/f5/1c/6e/f51c6e67489bf90127f7c772208b8e9d.jpg',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')}>Back to Home</TouchableOpacity>
      <Text style={myStyle.heading}>Saturn</Text>
      <Image
        style={myStyle.imageStyle}
        source={{
          uri: 'https://starwalk.space/gallery/images/saturn-planet-guide/1920x1080.jpg',
        }}
      />
      <Text style={myStyle.para}>
        Saturn is the sixth planet from the Sun and the second largest in the
        Solar System, after Jupiter. It is a gas giant, with an average radius
        of about nine times that of Earth. It has an eighth the average density
        of Earth, but is over 95 times more massive. Even though Saturn is
        almost as big as Jupiter, Saturn has less than a third the mass of
        Jupiter. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million
        km), with an orbital period of 29.45 years.{'\n \n'}
        Saturn's interior is thought to be composed of a rocky core, surrounded
        by a deep layer of metallic hydrogen, an intermediate layer of liquid
        hydrogen and liquid helium, and an outer layer of gas. Saturn has a pale
        yellow hue, due to ammonia crystals in its upper atmosphere. An
        electrical current in the metallic hydrogen layer is thought to give
        rise to Saturn's planetary magnetic field, which is weaker than Earth's,
        but has a magnetic moment 580 times that of Earth because of Saturn's
        greater size.
      </Text>
      <FlatList
        data={saturnFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export const Mercury = ({ navigation }) => {
  const mercuryFacts = [
    {
      heading: 'Size and Distance',
      answer:
        'With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry.\n \n From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.',
      imageUri:
        'https://i.pinimg.com/564x/2a/3f/84/2a3f84a089966517e76ad9b4aed2dc90.jpg',
    },
    {
      heading: 'Inside the planet ',
      answer:
        "The planet's mantle is chemically heterogeneous, suggesting the planet went through a magma ocean phase early in its history. Crystallization of minerals and convective overturn resulted in a layered, chemically heterogeneous crust with large-scale variations in chemical composition observed on the surface . The less reflective regions of the crust are high in carbon, most likely in the form of graphite.\n \n Names for features on Mercury come from a variety of sources and are set according to the IAU planetary nomenclature system. Names coming from people are limited to the deceased.Ridges, or dorsa, are named for scientists who have contributed to the study of Mercury. \n \n Depressions or fossae are named for works of architecture. Montes are named for the word hot in a variety of languages. Plains or planitiae are named for Mercury in various languages. Escarpments or rupēs are named for ships of scientific expeditions. Valleys or valles are named for abandoned cities, towns, or settlements of antiquity.",
      imageUri:
        'https://cdn.mos.cms.futurecdn.net/cyVS6owUPDWmjekJTuSUzf-320-80.jpg',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')}>Back to Home</TouchableOpacity>
      <Text style={myStyle.heading}>Mercury</Text>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/435px-Mercury_in_true_color.jpg',
        }}
        style={myStyle.imageStyle}
      />
      <Text style={myStyle.para}>
        Mercury is the first planet from the Sun and the smallest in the Solar
        System. In English, it is named after the ancient Roman god Mercurius
        (Mercury), god of commerce and communication, and the messenger of the
        gods. Mercury is classified as a terrestrial planet, with roughly the
        same surface gravity as Mars. The surface of Mercury is heavily
        cratered, as a result of countless impact events that have accumulated
        over billions of years. Its largest crater, Caloris Planitia, has a
        diameter of 1,550 km (960 mi), which is about one-third the diameter of
        the planet (4,880 km or 3,030 mi). Similarly to the Earths Moon,{' '}
        {'\n \n'}
        Mercury's surface displays an expansive rupes system generated from
        thrust faults and bright ray systems formed by impact event remnants.
        Mercury's sidereal year (88.0 Earth days) and sidereal day (58.65 Earth
        days) are in a 3:2 ratio.Consequently, one solar day (sunrise to
        sunrise) on Mercury lasts for around 176 Earth days: twice the planet's
        sidereal year. This means that one side of Mercury will remain in
        sunlight for one Mercurian year of 88 Earth days; while during the next
        orbit, that side will be in darkness all the time until the next sunrise
        after another 88 Earth days.
      </Text>
      <FlatList
        data={mercuryFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export const Jupiter = ({ navigation }) => {
  const jupitrFacts = [
    {
      heading: 'Structure',
      answer:
        "The composition of Jupiter is similar to that of the Sun – mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. This gives Jupiter the largest ocean in the solar system – an ocean made of hydrogen instead of water. \n \n Deeper down, Jupiter's central core had long been a mystery. Scientists theorized Jupiter was a mostly homogeneous mix of hydrogen and helium gases, surrounding a small, solid core of heavier elements – ice, rock, and metal formed from debris and small objects swirling around that area of the embryonic solar system 4 billion years ago.",
      imageUri:
        'https://science.nasa.gov/wp-content/uploads/2024/07/pia19048-europa-stunning-surface.jpg?w=1536&format=webp',
    },
    {
      heading: 'Orbit and Rotation',
      answer:
        'Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun in about 12 Earth years.\n \nIts equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.',
      imageUri:
        'https://smd-cms.nasa.gov/wp-content/uploads/2023/07/Illustration_showing_Jupiters_position_in_the_solar_system_relative_to_Earth_and_the_Sun-1.jpeg?w=1536&format=webp',
    },
    {
      heading: 'Size and distance',
      answer:
        "Jupiter is about ten times larger than Earth (11.209 R🜨) and smaller than the Sun (0.10276 R☉). Jupiter's mass is 318 times that of Earth; 2.5 times that of all the other planets in the Solar System combined. It is so massive that its barycentre with the Sun lies above the Sun's surface at 1.068 solar radii from the Sun's centre. \n \n Theoretical models indicate that if Jupiter had over 40% more mass, the interior would be so compressed that its volume would decrease despite the increasing amount of matter. For smaller changes in its mass, the radius would not change appreciably.",
      imageUri:
        'https://i.pinimg.com/564x/10/b3/5e/10b35e8c74a783246640f34b9a9d5c44.jpg',
    },
    {
      heading: 'Structure',
      answer:
        "The composition of Jupiter is similar to that of the Sun – mostly hydrogen and helium. Deep in the atmosphere, pressure and temperature increase, compressing the hydrogen gas into a liquid. This gives Jupiter the largest ocean in the solar system – an ocean made of hydrogen instead of water. \n \n Scientists think that, at depths perhaps halfway to the planet's center, the pressure becomes so great that electrons are squeezed off the hydrogen atoms, making the liquid electrically conducting like metal. ",
      imageUri:
        'https://i.pinimg.com/564x/ad/bc/31/adbc31a1a7f0f78f819cc5731e63a8ae.jpg',
    },
    {
      heading: 'Facts',
      answer:
        'Jupiter is perpetually covered with clouds of ammonia crystals, which may contain ammonium hydrosulfide as well. The clouds are located in the tropopause layer of the atmosphere, forming bands at different latitudes, known as tropical regions. These are subdivided into lighter-hued zones and darker belts.\n \n The cloud layer is about 50 km (31 mi) deep and consists of at least two decks of ammonia clouds: a thin, clearer region on top and a thicker, lower deck. There may be a thin layer of water clouds underlying the ammonia clouds, as suggested by flashes of lightning detected in the atmosphere of Jupiter.',
      imageUri:
        'https://i.pinimg.com/564x/d3/c6/31/d3c631dc3fc7a57f18c2044e6b1e119a.jpg',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')}>Back to Home</TouchableOpacity>
      <Text style={myStyle.heading}>Jupiter</Text>
      <Image
        source={{
          uri: 'https://cdn.esahubble.org/archives/images/screen/heic1914a.jpg',
        }}
        style={myStyle.imageStyle}
      />
      <Text style={myStyle.para}>
        Jupiter is the fifth planet from the Sun and the largest in the Solar
        System. It is a gas giant with a mass more than 2.5 times that of all
        the other planets in the Solar System combined and slightly less than
        one-thousandth the mass of the Sun. Its diameter is eleven times that of
        Earth, and a tenth that of the Sun. Jupiter orbits the Sun at a distance
        of 5.20 AU (778.5 Gm), with an orbital period of 11.86 years.{'\n \n'}
        Jupiter was the first of the sun's planets to form, and its inward
        migration during the primordial phase of the Solar System affected much
        of the formation history of the other planets. Hydrogen constitutes 90%
        of Jupiter's volume, followed by helium, which forms 25% of its mass and
        10% of its volume. The ongoing contraction of Jupiter's interior
        generates more heat than the planet receives from the Sun.
      </Text>
      <FlatList
        data={jupitrFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          fontSize: 25,
          color: 'white',
          textAlign: 'center',
        }}>
        <Image
          source={{
            uri: 'https://noirlab.edu/public/media/archives/images/screen/noirlab2116d.jpg',
          }}
          style={myStyle.imageStyle}
        />
        Jupiter with different telescopes
      </View>
    </ScrollView>
  );
};

export const Mars = ({ navigation }) => {
  const marsFacts = [
    {
      heading: 'Dry and rocky red planet',
      answer:
        "Scientists have theorized that during the Solar System's formation, Mars was created as the result of a random process of run-away accretion of material from the protoplanetary disk that orbited the Sun. Mars has many distinctive chemical features caused by its position in the Solar System.  \n \n After the formation of the planets, the inner Solar System may have been subjected to the so-called Late Heavy Bombardment. About 60% of the surface of Mars shows a record of impacts from that era, whereas much of the remaining surface is probably underlain by immense impact basins caused by those events.",
      imageUri:
        'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/6/6453_mars-globe-valles-marineris-enhanced-full2.jpg?w=1536&format=webp&fit=clip&crop=faces%2Cfocalpoint',
    },
    {
      heading: 'Facts about Mars',
      answer:
        'Mars lost its magnetosphere 4 billion years ago,possibly because of numerous asteroid strikes,so the solar wind interacts directly with the Martian ionosphere, lowering the atmospheric density by stripping away atoms from the outer layer. \n \n Compared to Earth, the atmosphere of Mars is quite rarefied. Atmospheric pressure on the surface today ranges from a low of 30 Pa (0.0044 psi) on Olympus Mons to over 1,155 Pa (0.1675 psi) in Hellas Planitia, with a mean pressure at the surface level of 600 Pa (0.087 psi) ',
      imageUri:
        'https://i.pinimg.com/564x/6a/0b/2f/6a0b2fa591aac569ce09bf33a980c2d3.jpg',
    },
    {
      heading: 'Structure',
      answer:
        "Mars has seasons, alternating between its northern and southern hemispheres, similar to on Earth. Additionally the orbit of Mars has, compared to Earth's, a large eccentricity and approaches perihelion when it is summer in its southern hemisphere and winter in its northern, and aphelion when it is winter in its southern hemisphere and summer in its northern. \n \n Martian surface temperatures vary from lows of about −110 °C (−166 °F) to highs of up to 35 °C (95 °F) in equatorial summer.[16] The wide range in temperatures is due to the thin atmosphere which cannot store much solar heat, the low atmospheric pressure (about 1% that of the atmosphere of Earth), and the low thermal inertia of Martian soil. ",
      imageUri: 'https://cdn.mos.cms.futurecdn.net/EjjVxJ8DCca2MVc8qBGtXK.jpg',
    },
    {
      heading: 'Size and distance',
      answer:
        'The volume of water ice in the south polar ice cap, if melted, would be enough to cover most of the surface of the planet with a depth of 11 metres (36 ft).\n \n Water in its liquid form cannot prevail on the surface of Mars due to the low atmospheric pressure on Mars, which is less than 1% that of Earth,only at the lowest of elevations pressure and temperature is high enough for water being able to be liquid for short periods.\n \n  Water in the atmosphere is small, but enough to produce larger clouds of water ice and different cases of snow and frost, often mixed with snow of carbon dioxide dry ice.',
      imageUri:
        'https://i.pinimg.com/474x/74/62/3a/74623a99801209dd7667f0de37779bc1.jpg',
    },
    {
      imageUri:
        'https://i.pinimg.com/564x/fd/f3/08/fdf308d21306c2adb40a2d5f5258bc43.jpg',
      answer:
        "Mars has two relatively small (compared to Earth's) natural moons, Phobos (about 22 kilometres (14 mi) in diameter) and Deimos (about 12 kilometres (7.5 mi) in diameter), which orbit close to the planet.\n \n Both satellites were discovered in 1877 by Asaph Hall and were named after the characters Phobos (the deity of panic and fear) and Deimostwins from Greek mythology who accompanied their father Ares, god of war, into battle.",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')}>Back to Home</TouchableOpacity>
      
      <Text style={myStyle.heading}>Mars</Text>
      <Image
        source={{
          uri: 'https://static.scientificamerican.com/sciam/cache/file/C454F5A6-536E-4C9F-AA6AF354BB85A85B_source.jpg?w=1200',
        }}
        style={myStyle.imageStyle}
      />
      <Text style={myStyle.para}>
        Mars is the fourth planet from the Sun. The surface of Mars is
        orange-red because it is covered in iron(III) oxide dust, giving it the
        nickname "the Red Planet". Mars is among the brightest objects in
        Earth's sky, and its high-contrast albedo features have made it a common
        subject for telescope viewing. {'\n \n '}
        The relatively flat plains in northern parts of Mars strongly contrast
        with the cratered terrain in southern highlands – this terrain
        observation is known as the Martian dichotomy. Mars hosts many enormous
        extinct volcanoes and one of the largest canyons in the Solar System.
      </Text>
      <FlatList
        data={marsFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};
export const Neptune = ({ navigation }) => {
  const neptuneFacts = [
    {
      heading: 'History',
      answer:
        "Struve came out in favour of the name Neptune on 29 December 1846, to the Saint Petersburg Academy of Sciences, after the colour of the planet as viewed through a telescope.Soon, Neptune became the internationally accepted name.The demand for a mythological name seemed to be in keeping with the nomenclature of the other planets, all of which were named for deities in Greek and Roman mythology.\n \n In October, he sought to name the planet Le Verrier, after himself, and he had loyal support in this from the observatory director, François Arago. This suggestion met with stiff resistance outside France.French almanacs quickly reintroduced the name Herschel for Uranus, after that planet's discoverer Sir William Herschel, and Leverrier for the new planet.",
      imageUri:
        'https://i.pinimg.com/564x/95/09/bb/9509bb8650f036349b5a4f44ed711755.jpg',
    },
    {
      heading: 'Size and diameter',
      answer:
        "Neptune's mass of 1.0243×1026 kg is intermediate between Earth and the larger gas giants: it is 17 times that of Earth but just 1/19th that of Jupiter.In the search for exoplanets, Neptune has been used as a metonym: discovered bodies of similar mass are often referred to as Neptunes, just as scientists refer to various extrasolar bodies as Jupiters.\n \n Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5 to 10% of its mass and extends perhaps 10 to 20% of the way towards the core.  Increasing concentrations of methane, ammonia and water are found in the lower regions of the atmosphere. Illustration of the physical component of Neptune's interior and its surroundings in false colours.",
      imageUri:
        'https://i.pinimg.com/564x/05/ab/ca/05abcae6835858ac37d06c271481a046.jpg',
    },
    {
      heading: 'Facts',
      answer:
        "Measurements by Voyager 2 in extreme-ultraviolet and radio frequencies revealed that Neptune has faint and weak but complex and unique aurorae;Subsequent astronomers using the Hubble Space Telescope have not glimpsed the aurorae, in contrast to the more well-defined aurorae of Uranus.\n \n Neptune's bow shock, where the magnetosphere begins to slow the solar wind, occurs at a distance of 34.9 times the radius of the planet. The magnetopause, where the pressure of the magnetosphere counterbalances the solar wind, lies at a distance of 23–26.5 times the radius of Neptune. The tail of the magnetosphere extends out to at least 72 times the radius of Neptune, and likely much farther.",
      imageUri:
        'https://i.pinimg.com/564x/3f/ed/d6/3fedd6741854d9f46fe4f8a134838c68.jpg',
    },
    {
      heading: 'Moons',
      answer:
        "Neptune's weather is characterized by extremely dynamic storm systems, with winds reaching speeds of almost 600 m/s- exceeding supersonic flow . More typically, by tracking the motion of persistent clouds, wind speeds have been shown to vary from 20 m/s in the easterly direction to 325 m/s westward. At the cloud tops, the prevailing winds range in speed from 400 m/s along the equator to 250 m/s at the poles. Most of the winds on Neptune move in a direction opposite the planet's rotation.\n \n retrograde rotation at lower latitudes. The difference in flow direction is thought to be a skin effect and not due to any deeper atmospheric processes. At 70°S latitude, a high-speed jet travels at a speed of 300 m/s. Due to seasonal changes, the cloud bands in the southern hemisphere of Neptune have been observed to increase in size and albedo. ",
      imageUri:
        'https://i.pinimg.com/564x/bd/39/b9/bd39b9dbe536363da23ceba5f6e21631.jpg',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
    
        <TouchableOpacity style={myStyle.backButton} onPress={() => navigation.navigate('Home')}>Back to Home</TouchableOpacity>
      <Text style={myStyle.heading}>Neptune</Text>
      <Image
        source={{
          uri: 'https://planetfacts.org/wp-content/uploads/2023/12/planet_neptune.jpg',
        }}
        style={myStyle.imageStyle}
      />
      <Text style={myStyle.para}>
        Neptune is the eighth and farthest known planet from the Sun. It is the
        fourth-largest planet in the Solar System by diameter, the
        third-most-massive planet, and the densest giant planet. It is 17 times
        the mass of Earth and slightly more massive, but denser and smaller,
        than fellow ice giant Uranus.
        {'\n \n'}
        Neptune is not visible to the unaided eye and is the only planet in the
        Solar System that was found from mathematical predictions derived from
        indirect observations rather than being initially observed by direct
        empirical observation.
      </Text>
      <FlatList
        data={neptuneFacts}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={myStyle.imageStyle} />
            <Text style={myStyle.heading}>{item.heading}</Text>
            <Text style={myStyle.para}>{item.answer}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};
