import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import {  } from 'react-native-gesture-handler';
import styled, { ThemeConsumer } from 'styled-components/native';

// This is the main container for this screen
const NotificationsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding:40px;
`;

const TouchButton = styled(TouchableOpacity)`
  background-color: red;
`
const ButtonText = styled(Text)`
  color: blue;
`


// const container = styled.Text`
//   color: red;
// `;

export const ChuckNorris = ({navigation}) => {
  
  const [chuckNorris, setChuckNorris] = useState ('')

  useEffect (() => {
    fetchChuckNorrisList()
  }, [])

  const fetchChuckNorrisList = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(value => setChuckNorris(value))
    .catch(err => console.error(err))
  }



  return (
    <NotificationsContainer>
      <View>
      <Image 
      source={{uri:'https://media.giphy.com/media/jSSUtHZB08yOJGDAd2/source.gif'}}
      style={{width:400, height:400}}
      />
      </View>
      <Text>{chuckNorris.value}</Text>
      <TouchButton onPress={()=> navigation.navigate('HOME')}>
        <ButtonText>GO HOME</ButtonText>
      </TouchButton>
    </NotificationsContainer>
  );
};
