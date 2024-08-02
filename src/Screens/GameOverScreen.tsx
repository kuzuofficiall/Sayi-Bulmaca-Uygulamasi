// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Title from '../companents/Title'
// import CostumButton from '../companents/CostumButton'

// const GameOverScreen = ({ deneme, userNumber, setScreen, onSendNumber }) => {
//   return (
//     <View style={styles.innercontainer}>
//       <Title>Oyun Tamamlandı !</Title>
//       <View style={styles.ImageWiew}>
//         <Image
//           style={styles.Image}
//           source={{ uri: "https://www.dilgem.com.tr/wp-content/uploads/2021/06/dilgem-d-1614470771-cocugunuzla_kazanmak_ve_kaybetmek_hakkinda_konusmak_2_1614470771031e996348.jpg" }} />
//       </View>
//       <View>
//         <Text style={styles.textContianer}>
//           <Text style={styles.text}>{deneme} </Text>Denemeyle
//           <Text style={styles.text}> {userNumber}</Text> Sayısını buldun
//         </Text>
//         <CostumButton name={"Yeni Oyuna Başla"} onPress={onSendNumber(null)} />
//       </View>
//     </View>
//   )
// }

// export default GameOverScreen

// const styles = StyleSheet.create({
//   Image: {
//     width: "100%",
//     height: "100%",

//   },
//   ImageWiew: {
//     width: 350,
//     height: 350,
//     borderRadius: 170,
//     overflow: "hidden",
//     borderWidth: 3,
//     borderColor: "red",
//     margin: 30,
//   },
//   innercontainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   textContianer: {
//     fontSize: 18,
//     textAlign: "center",
//     marginBottom: 17,

//   },
//   text: {
//     color: "red"
//   },

// })
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Title from '../companents/Title';
import CostumButton from '../companents/CostumButton';

const GameOverScreen = ({ deneme, userNumber, setScreen, onSendNumber }) => {
  return (
    <View style={styles.innerContainer}>
      <Title>Oyun Tamamlandı!</Title>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{ uri: "https://www.dilgem.com.tr/wp-content/uploads/2021/06/dilgem-d-1614470771-cocugunuzla_kazanmak_ve_kaybetmek_hakkinda_konusmak_2_1614470771031e996348.jpg" }}
        />
      </View>
      <View>
        <Text style={styles.textContainer}>
          <Text style={styles.text}>{deneme} </Text>Denemeyle
          <Text style={styles.text}> {userNumber}</Text> Sayısını buldun
        </Text>
        <CostumButton name={"Yeni Oyuna Başla"} onPress={() => onSendNumber(null)} />
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageView: {
    width: 350,
    height: 350,
    borderRadius: 170,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
    margin: 30,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 17,
  },
  text: {
    color: "red",
  },
});
