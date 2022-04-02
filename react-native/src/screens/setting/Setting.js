import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

function sayHello() {}

const Setting = () => {
  const navigation = useNavigation()
  return (
    <View>
      <div>
        <ButtonGroup>
          <Button onClick={() => navigation.navigate('Profile_C')}>
            <textA>Editar Cuenta</textA>
          </Button>
          <Button onClick={() => navigation.navigate('Mode')}>
            <textA>Modo Oscuro</textA>
          </Button>
          <Button onClick={() => navigation.navigate('Attention')}>
            <textA>Atencion a Cliente</textA>
          </Button>
          <Button onClick={() => navigation.navigate('Report')}>
            <textA>Informe de la Cuenta</textA>
          </Button>
        </ButtonGroup>
      </div>
      <ButtonGroupEnd>
        <Button onClick={sayHello}>cerrar sesion</Button>
      </ButtonGroupEnd>
    </View>
  )
}

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  text-align: left;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonGroupEnd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const textA = styled.text`
font-size: 20,
text-align: center,
color: white,
`

export default Setting
