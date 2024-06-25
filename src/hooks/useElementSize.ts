import { useCallback, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';

interface Size {
  width: number;
  height: number;
}

export const useElementSize = ({ height, width }: Size) => {
  const [size, setSize] = useState<Size>({ width, height });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const dimensions = event.nativeEvent.layout;

    setSize({
      width: dimensions.width,
      height: dimensions.height,
    });
  }, []);

  return { size, onLayout };
};
