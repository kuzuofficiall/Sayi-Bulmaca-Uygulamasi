import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import CostumButton from "../companents/CostumButton";

const GameStartScreen = ({ onSendNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  function resetHandle() {
    setEnteredNumber('');
  }
  function confirmHandle() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      Alert.alert("Geçersiz Sayı", "Sayı 1 ile 99 arasında olmalıdır", [
        { text: "Tamam", style: "destructive", onPress: resetHandle }
      ]);
      return;
    }
    onSendNumber(chosenNumber);
  }

  function numberHandler(text) {
    setEnteredNumber(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTahmin}> Sayı Tahmin Uygulaması</Text>
      <View style={styles.body}>
        <TextInput
          maxLength={2}
          keyboardType='number-pad'
          style={styles.textInput}
          onChangeText={numberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonView}>
          <CostumButton
            name={"temizle"}
            onPress={resetHandle}
          />
          <CostumButton
            onPress={confirmHandle}
            name={"Onayla"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    width: "88%",
    height: "28%",
    backgroundColor: "#FFB200",
    borderRadius: 15,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:50
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 15,
    width: "20%",
    borderColor: "white",
    fontSize: 20,
    fontWeight: "700",
    
  },
  textTahmin:{
    fontSize:20,
    borderWidth:3,
   padding:30,
   borderRadius:30,
   borderColor:"red",
  },
});

export default GameStartScreen;
