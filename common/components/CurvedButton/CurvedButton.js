import React from 'react';
import {Text} from 'react-native';
import {Button} from 'native-base';
import {curvedButtonStyles} from './CurvedButton.styles';

const CurvedButtonComponent = props => {
  return (
    <Button
      onPress={props.onPress}
      style={[curvedButtonStyles.buttonStyle, props.style]}>
      <Text style={curvedButtonStyles.titleStyle}> {props.title} </Text>
    </Button>
  );
};

export const CurvedButton = CurvedButtonComponent;
