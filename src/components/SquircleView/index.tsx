import { type PropsWithChildren } from 'react';
import { View } from 'react-native';

import { SquircleBackground } from '../SquircleBackground';

import type { SquircleProps } from '../../@types/squircle';

function SquircleView({
  cornerRadius,
  cornerSmoothing = 0.6,
  color,
  ...props
}: PropsWithChildren<SquircleProps>) {
  return (
    <View {...props}>
      <SquircleBackground
        cornerRadius={cornerRadius}
        cornerSmoothing={cornerSmoothing}
        color={color}
      />

      {props.children}
    </View>
  );
}

export { SquircleView, type SquircleProps };
