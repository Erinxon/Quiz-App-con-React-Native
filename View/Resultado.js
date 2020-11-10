import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const Resultado = (props) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.textResultado}>
                <Text style={{color: 'green',fontWeight: 'bold'}}>Aciertos: {props.route.params.NumCount}</Text>
            </View>
            <View style={styles.textResultado}>
                <Text style={{color: 'red',fontWeight: 'bold'}}>Fallos: { props.route.params.numPreguntas - props.route.params.NumCount}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.styleText}
                    onPress={() => props.navigation.navigate("Preguntas")}>
                    <Text>Reententarlo</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.styleText}
                    onPress={() => props.navigation.navigate("Inicio")}>
                    <Text>Ir al inicio</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5000ca',
    },
    styleText: {
        fontSize: 23,
        color: '#000',
        padding: 15,
        marginLeft: 9,
        marginTop: 15,
        marginRight: 9,
        marginBottom: 5,
        textAlign: "center",
        backgroundColor: '#fff',
        borderRadius: 8
    },
    textResultado: {
        fontSize: 23,
        color: '#000',
        padding: 15,
        marginLeft: 9,
        marginTop: 15,
        marginRight: 9,
        marginBottom: 5,
        textAlign: "left",
        backgroundColor: '#fff',
        borderRadius: 8
    }

});

export default Resultado