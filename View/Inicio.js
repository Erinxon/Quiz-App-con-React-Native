import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const AppInicio = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.styleTextContent}
                onPress={() => props.navigation.navigate("Preguntas")}>
                <Text style={styles.styleText}>Empezar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5000ca',
    },
    styleTextContent: {
        fontSize: 23,
        color: '#000',
        padding: 30,
        marginLeft: 9,
        marginTop: 15,
        marginRight: 9,
        marginBottom: 5,
        textAlign: "center",
        backgroundColor: '#fff',
        borderRadius: 8
    },
    styleText: {
        fontSize: 25,
        textAlign: 'center'
    }
    
});

export default AppInicio