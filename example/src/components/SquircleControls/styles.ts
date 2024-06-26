import { StyleSheet } from 'react-native';
import { colors } from '../../styles/globals';

export const styles = StyleSheet.create({
  section: {
    alignItems: 'flex-start',
  },
  label: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  slider: {
    width: 300,
    height: 40,
  },
});
