import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../common/colors'
export const recipeDetailsStyles = ScaledSheet.create({
  container: {backgroundColor: colors.WHITE_LIGHT, flex: 1},
  headerRight: {color: 'white', fontSize: '25@ms', padding: '10@ms'},
  header: {
    backgroundColor: 'transparent',
  },
  count: {marginLeft: '5@ms', opacity: 0.5},
  item: {marginLeft: '5@ms'},
  step: {
    flexDirection: 'row',
    padding: '20@ms',
  },
  flatList: {
    flexGrow: 0,
    margin: '20@ms',
    marginTop: 0,
    backgroundColor: colors.WHITE,
    borderRadius: '15@ms',
  },
  row: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
