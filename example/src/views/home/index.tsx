import { useState } from 'react';
import { Text, View } from 'react-native';
import { SquircleView } from 'react-native-squircle';

import { SquircleControls } from '../../components/SquircleControls';

import { colors } from '../../styles/globals';
import { styles } from './styles';

import type { SquircleProps } from '../../@types/squircle';

export const Home = () => {
  const [squircleProps, setSquircleProps] = useState<SquircleProps>({
    cornerRadius: 42,
    cornerSmoothing: 1,
  });

  const handleUpdateSquircleProps = (key: string, value: number) => {
    setSquircleProps((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>A Squircle</Text>
          <SquircleView
            cornerRadius={24}
            cornerSmoothing={1}
            color={colors.primary}
          >
            <Text style={styles.squircle}>Component</Text>
          </SquircleView>
        </View>
        <Text style={styles.title}>for React Native</Text>
      </View>
      <View style={styles.section}>
        <SquircleView
          cornerRadius={squircleProps.cornerRadius}
          cornerSmoothing={squircleProps.cornerSmoothing}
          color={colors.primary}
          width={300}
          height={300}
        />
      </View>
      <View style={styles.section}>
        <SquircleControls
          squircleProps={squircleProps}
          handleUpdateSquircleProps={handleUpdateSquircleProps}
        />
        <Text style={styles.text}>
          Use sliders to control the Component above. The change might seem
          subtle, but it does makes a difference!
        </Text>
      </View>
    </View>
  );
};
