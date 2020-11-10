import Preguntas from '../Model/Preguntas'
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import validar from '../Controller/VerificarPregunta'

export default function MostrarPreguntas(props) {
  const [getPregunta, setPregunta] = React.useState([])
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)
  const [checked3, setChecked3] = React.useState(false)
  const [checked4, setChecked4] = React.useState(false)
  const [colorBtn1, setColorBtn1] = React.useState('rgb(67, 72, 77)')
  const [colorBtn2, setColorBtn2] = React.useState('rgb(67, 72, 77)')
  const [colorBtn3, setColorBtn3] = React.useState('rgb(67, 72, 77)')
  const [colorBtn4, setColorBtn4] = React.useState('rgb(67, 72, 77)')
  const [idPregunta, setIdpregunta] = React.useState(1)
  const [desactivar, setDesactivar] = React.useState(false)
  const [countScore, setCountScore] = React.useState(0)
  
  React.useEffect(() => {
    setPregunta(Preguntas.listaPreguntas)
  }, [])

  const preguntaActual = getPregunta.filter(pregunta => {
    if (pregunta.id === idPregunta) {
      return pregunta
    }
  })

  const verificarPregunta = (id, respuesta) => {
    return validar(getPregunta, id, respuesta)
  }

  const reiniciar = () => {
    setIdpregunta(1)
    setChecked4(false)
    setChecked2(false)
    setChecked3(false)
    setChecked1(false)
    setColorBtn1('rgb(67, 72, 77)')
    setColorBtn2('rgb(67, 72, 77)')
    setColorBtn3('rgb(67, 72, 77)')
    setColorBtn4('rgb(67, 72, 77)')
    setDesactivar(false)
    setCountScore(0)
  }

  const siguientePregunta = () => {
    if (idPregunta < getPregunta.length) {
      setTimeout(() => {
        setChecked4(false)
        setChecked2(false)
        setChecked3(false)
        setChecked1(false)
        setColorBtn1('rgb(67, 72, 77)')
        setColorBtn2('rgb(67, 72, 77)')
        setColorBtn3('rgb(67, 72, 77)')
        setColorBtn4('rgb(67, 72, 77)')
        setDesactivar(false)
        setIdpregunta(idPregunta + 1)
      }, 0);
    }
    if (idPregunta == getPregunta.length) {
      setTimeout(() => {
        props.navigation.navigate("Resultado", { numPreguntas: getPregunta.length, NumCount: countScore })
        reiniciar()
        console.log(cont)
      }, 0)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quiz App</Text>
      <Text style={styles.titulo}>{countScore}</Text>
      <Text style={{ marginRight: 10, color: '#fff', fontWeight: 'bold', textAlign: 'right' }}>{`Pregunta ${idPregunta}/${getPregunta.length}`}</Text>
      <Text style={styles.item}>{preguntaActual.map(p => p.pregunta)}</Text>
      <CheckBox
        title={"A) " + preguntaActual.map(p => p.opciones.a)}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={checked1}
        textStyle={{ color: colorBtn1 }}
        disabled={desactivar}
        onPress={() => {
          if (verificarPregunta(preguntaActual.map(p => p.id), preguntaActual.map(p => p.opciones.a))) {
            setCountScore(countScore + 1)
            setColorBtn1('green')
            setColorBtn2('rgb(67, 72, 77)')
            setColorBtn3('rgb(67, 72, 77)')
            setColorBtn4('rgb(67, 72, 77)')
          } else {
            setColorBtn1('red')
            setColorBtn2('rgb(67, 72, 77)')
            setColorBtn3('rgb(67, 72, 77)')
            setColorBtn4('rgb(67, 72, 77)')          
          }
          setChecked1(!checked1)
          setChecked2(false)
          setChecked3(false)
          setChecked4(false)
          siguientePregunta()
        }}
      />
      <CheckBox
        title={"B) " + preguntaActual.map(p => p.opciones.b)}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={checked2}
        textStyle={{ color: colorBtn2 }}
        disabled={desactivar}
        onPress={() => {
          if (verificarPregunta(preguntaActual.map(p => p.id), preguntaActual.map(p => p.opciones.b))) {
            setCountScore(countScore + 1)
            setColorBtn2('green')
            setColorBtn1('rgb(67, 72, 77)')
            setColorBtn3('rgb(67, 72, 77)')
            setColorBtn4('rgb(67, 72, 77)')
          } else {
            setColorBtn2('red')
            setColorBtn1('rgb(67, 72, 77)')
            setColorBtn3('rgb(67, 72, 77)')
            setColorBtn4('rgb(67, 72, 77)')          
          }
          setChecked2(!checked2)
          setChecked1(false)
          setChecked3(false)
          setChecked4(false)
          setDesactivar(true)
          siguientePregunta()
        }}
      />
      <CheckBox
        title={"C) " + preguntaActual.map(p => p.opciones.c)}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={checked3}
        textStyle={{ color: colorBtn3 }}
        disabled={desactivar}
        onPress={() => {
          if (verificarPregunta(preguntaActual.map(p => p.id), preguntaActual.map(p => p.opciones.c))) {
            setCountScore(countScore + 1)
            setColorBtn3('green')
            setColorBtn1('rgb(67, 72, 77)')
            setColorBtn2('rgb(67, 72, 77)')
            setColorBtn4('rgb(67, 72, 77)')
          } else {
            setColorBtn3('red')
            setColorBtn1('rgb(67, 72, 77)')
            setColorBtn2('rgb(67, 72, 77)')
            setColorBtn4('rgb(67, 72, 77)')         
          }
          setChecked3(!checked3)
          setChecked1(false)
          setChecked2(false)
          setChecked4(false)
          setDesactivar(true)
          siguientePregunta()
        }}
      />
      <CheckBox
        title={"D) " + preguntaActual.map(p => p.opciones.d)}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        textStyle={{ color: colorBtn4 }}
        checked={checked4}
        disabled={desactivar}
        onPress={() => {
          if (verificarPregunta(preguntaActual.map(p => p.id), preguntaActual.map(p => p.opciones.d))) {
            setCountScore(countScore + 1)
            setColorBtn4('green')
            setColorBtn1('rgb(67, 72, 77)')
            setColorBtn2('rgb(67, 72, 77)')
            setColorBtn3('rgb(67, 72, 77)')
          } else {
            setColorBtn4('red')
            setColorBtn1('rgb(67, 72, 77)')
            setColorBtn2('rgb(67, 72, 77)')
            setColorBtn3('rgb(67, 72, 77)')      
          }
          setChecked4(!checked4)
          setChecked2(false)
          setChecked3(false)
          setChecked1(false)
          setDesactivar(true)
          siguientePregunta()
        }}
      />
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5000ca'
  },
  titulo: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 20,
    marginRight: 5,
    textAlign: "center",
  },
  item: {
    fontSize: 23,
    color: '#000',
    padding: 25,
    marginLeft: 9,
    marginTop: 15,
    marginRight: 9,
    marginBottom: 5,
    textAlign: "center",
    backgroundColor: '#fff',
    borderRadius: 8
  }
});