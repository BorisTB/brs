import React from 'react';
import { MantineProvider } from '@mantine/core';
import { shadcnTheme } from './theme';
import { shadcnCssVariableResolver } from './cssVariableResolver';
import { DEFAULT_COLOR_SCHEME } from '../app.constants';

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider
      defaultColorScheme={DEFAULT_COLOR_SCHEME}
      theme={shadcnTheme}
      cssVariablesResolver={shadcnCssVariableResolver}>
      {children}
    </MantineProvider>
  );
}
