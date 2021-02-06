import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from 'native-base';
import {CurvedButton, ModalTitle} from '../../common/components';
import {seeIngredientsStyles} from './SeeIngredients.styles';
import {Divider} from '../../common/components/Divider/Divider';

const Ingredient = ({ingredient}) => {
  const [selected, toggleSelected] = useState(false);

  return (
    <Button
      style={seeIngredientsStyles.ingredientContainer}
      onPress={() => {
        toggleSelected(!selected);
      }}>
      <>
        <View
          style={
            selected
              ? seeIngredientsStyles.ingredientRowSelected
              : seeIngredientsStyles.ingredientRowUnSelected
          }>
          {selected === true ? (
            <View style={seeIngredientsStyles.selectedIngredient} />
          ) : (
            <View style={seeIngredientsStyles.unselectedIngredient} />
          )}
          <View>
            <Text style={seeIngredientsStyles.name}>{ingredient.name} </Text>
            <Text style={seeIngredientsStyles.quantity}>
              {ingredient.quantity} {ingredient.quantityUnit}{' '}
            </Text>
          </View>
        </View>
        <Divider />
      </>
    </Button>
  );
};

const SeeIngredientsComponent = props => {
  return (
    <Modal
      onBackdropPress={props.hideModal}
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={props.hideModal}>
      <View style={seeIngredientsStyles.mainContainer}>
        <View style={seeIngredientsStyles.overley} />
        <View style={seeIngredientsStyles.modalContainer}>
          <View>
            <ModalTitle title={'Ingredients'} hideModal={props.hideModal} />
            <FlatList
              style={seeIngredientsStyles.flatlist}
              data={props.ingredients}
              renderItem={({item, index}) => <Ingredient ingredient={item} />}
              keyExtractor={(recipe, index) => index}
            />
            <CurvedButton
              title={'Add to Reminders'}
              onPress={() => {
                props.hideModal();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const SeeIngredients = SeeIngredientsComponent;
