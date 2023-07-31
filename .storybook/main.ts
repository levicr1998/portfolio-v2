import type { StorybookConfig } from '@storybook/react-vite';
import {mergeConfig} from "vite";
const tsconfigPaths = require("vite-tsconfig-paths");


const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require("postcss")
        }
      },
    }
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return mergeConfig(config, [tsconfigPaths.default()])
    }
};
export default config;
