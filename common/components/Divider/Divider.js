import React from 'react';
import {View} from 'react-native';
import {dividerStyles} from './Divider.styles';

const DividerComponent = props => {
  return <View style={dividerStyles.divider} />;
};

export const Divider = DividerComponent;
