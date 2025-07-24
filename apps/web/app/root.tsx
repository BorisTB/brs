import {
  Links,
  type LinksFunction,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration
} from 'react-router';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Analytics } from '@vercel/analytics/react';

import '@fontsource-variable/geist';
import '@mantine/core/styles.css';
import './theme/style.css';
import geistSansWoff2 from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url';

import { ThemeProvider } from './theme/theme.provider';
import { DEFAULT_COLOR_SCHEME } from './app.constants';

export const meta: MetaFunction = () => [
  {
    name: 'description',
    content:
      'Boris – Full-Stack React & TypeScript Developer | 10+ Years of Experience. Explore my portfolio and coding playground where I experiment with new technologies and showcase my projects.'
  }
];

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    type: 'font/woff2',
    href: geistSansWoff2,
    crossOrigin: 'anonymous'
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <title>brs</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript defaultColorScheme={DEFAULT_COLOR_SCHEME} />
        <Meta />
        <Links />
      </head>
      <body>
        <Analytics />
        <ThemeProvider>{children}</ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
