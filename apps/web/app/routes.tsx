import {
  index,
  layout,
  route,
  type RouteConfig
} from '@react-router/dev/routes';

export default [
  layout('./layouts/dashboard.tsx', [
    index('./app.tsx'),
    route('about', './routes/about.tsx')
  ])
] satisfies RouteConfig;
