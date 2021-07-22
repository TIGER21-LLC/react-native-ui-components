export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Tiger21', 'Introduction', 'Examples Expo', 'Example', '*', ['Home', 'Login', 'Admin'], 'Components'],
    },
  },
}