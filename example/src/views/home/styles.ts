import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globals';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 24,
    justifyContent: 'space-evenly',
    height: '100%',
    gap: 16,
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  squircle: {
    color: colors.background,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    padding: 14,
  },
});
