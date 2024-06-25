import { type ReactNode } from 'react';
import { View, type ViewProps } from 'react-native';

import { useElementSize } from '../../hooks/useElementSize';

interface ResizableViewProps extends Omit<ViewProps, 'children'> {
  children: (rect: { width: number; height: number }) => ReactNode;
}

function ResizableView({ children, ...rest }: ResizableViewProps) {
  const { size, onLayout } = useElementSize({ height: 1, width: 1 });

  return (
    <View {...rest} onLayout={onLayout}>
      {size ? children(size) : null}
    </View>
  );
}

export { ResizableView };
