import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Title = ({ children }) => {
  return (
        <Text style={styles.Title}>{children}</Text>
    )
}



const styles = StyleSheet.create({
    Title: {
        borderWidth: 2,
        borderColor: "red",
        textAlign: "center",
        width:"90%",
        marginBottom: 40,
        borderRadius: 20,
        color: "red",
        fontSize: 26,
        padding:20,
    },
})
export default Title