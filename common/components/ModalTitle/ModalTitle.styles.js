import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../colors';

export const modalTitleStyles = ScaledSheet.create({
  container: {flexDirection: 'row', padding: '10@ms'},
  chevronDownStyle: {
    color: colors.GREEN,
    fontSize: '50@ms',
    textAlign: 'center',
    position: 'absolute',
  },
  title: {
    color: colors.GREEN,
    flex: 1,
    fontSize: '20@ms',
    textAlign: 'center',
  },
});
