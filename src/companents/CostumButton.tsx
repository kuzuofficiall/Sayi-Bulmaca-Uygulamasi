
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { useState } from 'react'

export default function App({name,onPress,}) {
    const [click, setClick] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={onPress}
                onPressIn={() => setClick(true)}
                onPressOut={() => setClick(false)}
                style={[styles.touchDesign, click && { borderBottomWidth: 2,marginTop:6 }]}>
                <Text style={styles.text}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    touchDesign: {

        backgroundColor: "#FFB200",
        // width: '40%',
        padding: 15,
        borderRadius: 19,
        borderWidth: 2,
        borderBottomWidth: 8,
        borderColor: "#FFDE4D",
        justifyContent:"center",
        alignItems:"center",

    },
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize:18,
        color:"white",
    },
})