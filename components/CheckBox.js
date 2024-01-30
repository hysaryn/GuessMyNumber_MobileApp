import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CheckBox({label, checked, onChange}) {
    const toggleCheckbox = () => {
        onChange(!checked);
      };

    return (
        <TouchableOpacity onPress={toggleCheckbox}>
            <View style={styles.container}>
                <View style={[styles.checkbox,{backgroundColor: checked ? "blue" : "transparent" }]}>
                    {checked && (<Text style={styles.checkboxSelected}>✓</Text>)}
                </View>
                <Text style={styles.checkboxLabel}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center"
    },

    checkbox:{
       width:20,
       height:20,
       borderWidth: 1,
       borderColor: "black",
       borderRadius: 3,
       marginRight: 10,
       justifyContent: "center",
       alignItems: "center", 
    },

    checkboxSelected: {
        color: "white",
        fontWeight: "bold",
    },

    checkboxLabel: {
        color: "blue",
        fontSize: 15,
    },
    
})