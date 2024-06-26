import { Text, View } from 'react-native';

import Slider from '@react-native-community/slider';

import { colors } from '../../styles/globals';
import { styles } from './styles';

import type { SquircleProps } from '../../@types/squircle';

interface SquircleSliderProps {
  handleUpdateSquircleProps: (key: string, value: number) => void;
  squircleProps: SquircleProps;
}

export const SquircleControls = ({
  handleUpdateSquircleProps,
  squircleProps: { cornerRadius, cornerSmoothing },
}: SquircleSliderProps) => {
  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.label}>
          Corner Radius: {cornerRadius.toFixed(0)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={cornerRadius}
          onValueChange={(value) =>
            handleUpdateSquircleProps('cornerRadius', value)
          }
          minimumTrackTintColor={colors.primary}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>
          Corner Smoothing: {cornerSmoothing.toFixed(1)}
        </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          value={cornerSmoothing}
          onValueChange={(value) =>
            handleUpdateSquircleProps('cornerSmoothing', value)
          }
          minimumTrackTintColor={colors.primary}
        />
      </View>
    </View>
  );
};
