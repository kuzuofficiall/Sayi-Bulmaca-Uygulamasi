import { useState, useEffect } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import GameStartScreen from "./src/Screens/GameStartScrenn";
import Gamescreen from "./src/Screens/Gamescreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [screen, setScreen] = useState(<GameStartScreen onSendNumber={sendNumberHandler} />);

  function sendNumberHandler(sendNumber) {
    setUserNumber(sendNumber);
  }

  useEffect(() => {
    if (userNumber !== null) {
      setScreen(<Gamescreen setScreen={setScreen} userNumber={userNumber} onSendNumber={sendNumberHandler} />);
    }else{
      setScreen(<GameStartScreen onSendNumber={sendNumberHandler} />)
    }
  }, [userNumber]);

  return <ImageBackground
    style={styles.image}
    imageStyle={styles.backImage} 
    source={{ uri: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
  >{screen}</ImageBackground>
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    width: "100%",
    height: "100%",
    // resizeMode: "stretch",
    // justifyContent: 'center',
    // alignItems: "center",
  },
  backImage: {
    opacity: 0.2,
  },
})