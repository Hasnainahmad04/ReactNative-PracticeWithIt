import {DefaultTheme} from '@react-navigation/native';
import colors from '../assets/colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: '#fff',
  },
};

export default theme;
