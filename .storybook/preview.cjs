import "styles/index.css";
import "styles/buttons.css";
import "styles/flex.css";
import "styles/container.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
