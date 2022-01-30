import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginTop: 30,
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

});
