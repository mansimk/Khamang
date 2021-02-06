import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../colors';

export const curvedButtonStyles = ScaledSheet.create({
  buttonStyle: {
    backgroundColor: colors.GREEN,
    margin: '20@ms',
    borderRadius: 5,
  },
  titleStyle: {
    flex: 1,
    color: colors.WHITE,
    fontSize: '20@ms',
    textAlign: 'center',
  },
});
