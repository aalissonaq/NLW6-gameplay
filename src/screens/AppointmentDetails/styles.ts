import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading


  },
  description: {
    fontSize: 17,
    fontFamily: theme.fonts.title400,
    color: theme.colors.heading
  },
  member: {
    marginTop: 27,
    marginLeft: 24,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    marginBottom: getBottomSpace(),
  },


});
