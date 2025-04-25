

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],

  "framework": {
    "name": "@storybook/react-webpack5",
    "options": {}
  },

  "staticDirs": [
  ],

  docs: {
    autodocs: false
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;