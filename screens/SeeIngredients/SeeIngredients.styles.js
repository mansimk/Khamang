import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../common/colors';

export const seeIngredientsStyles = ScaledSheet.create({
  mainContainer: {flex: 1, borderRadius: '15@ms', flexDirection: 'row'},
  overley: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    flexDirection: 'row',
  },
  ingredientContainer: {
    backgroundColor: 'transparent',
    elevation: 0,
    margin: '5@ms',
  },
  ingredientRowSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.4,
  },
  ingredientRowUnSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
  },
  selectedIngredient: {
    height: '20@ms',
    width: '20@ms',
    margin: '15@ms',
    borderRadius: '15@ms',
    backgroundColor: colors.GREEN,
    opacity: 0.5,
  },
  modalContainer: {
    alignSelf: 'flex-end',
    flex: 1,
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: '15@ms',
  },
  flatlist: {
    flexGrow: 0,
    marginTop: 0,
    backgroundColor: colors.WHITE,
    borderRadius: '15@ms',
  },
  unselectedIngredient: {
    height: '20@ms',
    width: '20@ms',
    margin: '15@ms',
    borderRadius: '15@ms',
    borderColor: colors.GREEN,
    borderWidth: 2,
  },
  name: {marginTop: '5@ms', fontSize: '20@ms'},
  quantity: {opacity: 0.5, marginBottom: '5@ms', fontSize: '12@ms'},
});
