import React, {useState} from 'react';
import {Text} from 'react-native';
import {Container} from '../../components/';

const SampleScreen: React.FC = () => {
  return (
    <Container>
      <Text style={{color: 'red'}}>Sample Screen</Text>
    </Container>
  );
};

export default SampleScreen;
