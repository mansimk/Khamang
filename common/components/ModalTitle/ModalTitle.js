import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Divider} from '../Divider/Divider';

import {Icon} from 'native-base';
import {modalTitleStyles} from './ModalTitle.styles';

const ModalTitleComponent = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.hideModal();
        }}
        style={modalTitleStyles.container}>
        <>
          <Icon
            type="EvilIcons"
            name="chevron-down"
            style={modalTitleStyles.chevronDownStyle}
          />
          <Text style={modalTitleStyles.title}>{props.title}</Text>
        </>
      </TouchableOpacity>
      <Divider />
    </View>
  );
};

export const ModalTitle = ModalTitleComponent;
