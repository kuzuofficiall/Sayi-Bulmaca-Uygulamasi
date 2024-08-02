import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Title from '../companents/Title';
import CostumButton from "../companents/CostumButton";
import GameOverScreen from './GameOverScreen';


const GameScreen = ({ userNumber, setScreen, onSendNumber }: any) => {
  const [value, setValue] = useState(userNumber);
  const [Kucuk, setkucuk] = useState(0);
  const [büyük, setBüyük] = useState(99);
  const [tahmin, setTahmin] = useState(-1)
  const [tahminler, setTahminler] = useState([])
  const randomSayı = (Kucuk: number, büyük: number) => {
    const tahmin = Math.floor(Math.random() * (büyük - Kucuk)) + Kucuk;
    setTahmin(tahmin);
    setTahminler([...tahminler, tahmin])
  }
  useEffect(() => {
    randomSayı(Kucuk, büyük)
  }, [])
  useEffect(() => {
    if (value === tahmin) {
      setScreen(<GameOverScreen deneme={tahminler.length} userNumber={userNumber} setScreen={setScreen} onSendNumber={onSendNumber} />)
    }
  }, [tahmin])
  const kontrolBüyük = () => {
    if (tahmin > value) {
      randomSayı(Kucuk, tahmin)
      setBüyük(tahmin)
    }
    else {
      Alert.alert("bilerek yanlişa basıyorsun Doğru olana bas")
    }
  };
  const kontrolKüçük = () => {
    if (value > tahmin) {
      randomSayı(tahmin, büyük)
      setkucuk(tahmin)
    }
    else {
      Alert.alert("bilerek yanlişa basıyorsun Doğru olana bas")
    }
  };
  console.log(tahminler)
  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <View style={styles.tahminView}><Text style={styles.tahminText}> {tahmin}</Text></View>
      <View style={styles.innerContainer}>
        <Text style={styles.textk}>Altında mı Üstünde mi</Text>
        <View style={styles.Buttons} >
          <CostumButton
            name={"+"}
            onPress={kontrolBüyük}
          />
          <CostumButton name={"-"}
            onPress={kontrolKüçük}

          />
        </View>
      </View>
      <ScrollView>
        {tahminler.map((value, index) => {
          return (<View key={index} style={styles.tahminsayi} >
            <Text style={styles.info}>{index + 1}. tahmin: </Text>
            <Text style={styles.sontext}>{value}</Text>
          </View>)
        })}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",

  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "orange",
  },
  tahminText: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
  tahminView: {
    width: 300,
    padding: 16,
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 19,
    marginBottom: 15,
  },
  Buttons: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-around",
    marginVertical: 10,
    alignItems: "center",
  },
  textk: {
    fontSize: 20,

  },
  tahminsayi: {
    borderWidth: 2,
    marginVertical: 5,
    width: 350,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row"
  },
  info: {
    fontSize: 18,
    color: "black",
    fontWeight: "900"
  },
  sontext: {
    fontSize: 19,
    color: "red",
  },
});
export default GameScreen;

