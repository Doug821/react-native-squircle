import { getSvgPath } from 'figma-squircle';
import { StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ResizableView } from '../ResizableView';

import type { SquircleProps } from '../../@types/squircle';

export function SquircleBackground({
  cornerRadius,
  cornerSmoothing = 0.6,
  color,
  ...props
}: SquircleProps) {
  return (
    <ResizableView {...props} style={StyleSheet.absoluteFill}>
      {({ width: boxWidth, height: boxHeight }) => {
        const path = getSvgPath({
          width: boxWidth,
          height: boxHeight,
          cornerRadius,
          cornerSmoothing,
        });

        return (
          <Svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${boxWidth} ${boxHeight}`}
          >
            <Path d={path} fill={color ?? 'transparent'} />
          </Svg>
        );
      }}
    </ResizableView>
  );
}
