import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  buildDirectory: '../../dist/apps/web',
  future: {
    unstable_viteEnvironmentApi: true
  }
} satisfies Config;
