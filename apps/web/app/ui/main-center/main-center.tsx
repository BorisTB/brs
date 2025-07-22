import { Center, CenterProps } from '@mantine/core';
import { forwardRef } from 'react';

export interface MainCenterProps extends Omit<CenterProps, 'h'> {}

export const MainCenter = forwardRef<HTMLDivElement, MainCenterProps>(
  (props, ref) => {
    return <Center {...props} ref={ref} h="var(--main-visible-height)" />;
  }
);

export default MainCenter;
