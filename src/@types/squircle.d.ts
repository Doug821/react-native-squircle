import type { ViewProps } from 'react-native';

interface SquircleProps extends ViewProps {
  cornerSmoothing?: number;
  cornerRadius?: number;
  children?: React.ReactNode;

  width?: number;
  height?: number;
  color?: string;
}

export { SquircleProps };
