import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../colors';

export const counterStyles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: '15@ms',
    borderRadius: 8,
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5@ms',
    backgroundColor: colors.GREEN_LIGHT,
  },
  numberOfPeople: {color: colors.GREEN, fontSize: '16@ms'},
  minus: {color: colors.GREEN,fontSize: '20@ms'},
  plus: {color: colors.GREEN,fontSize: '20@ms'},
});
