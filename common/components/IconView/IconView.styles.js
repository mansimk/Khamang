import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../colors';

export const iconViewStyles = ScaledSheet.create({
  container: {
    height: '60@ms',
    width: '100@ms',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  description: {
    color: colors.GREEN,
  },
  iconStyle: {
    color: colors.GREEN,
  },
});
