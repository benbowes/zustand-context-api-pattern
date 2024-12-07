# A Zustand + Context API pattern for making use of the best of both worlds.

This pattern comes from comes from here: https://tkdodo.eu/blog/zustand-and-react-context

And I discovered it here from Cosden (https://www.youtube.com/@cosdensolutions): https://www.youtube.com/watch?v=1Fi4hK7L1ec

### Getting started

`npm i`

`npm run dev`

The main files to look at are `CountProvider.tsx` and `App.tsx`

## Notes

When adding a `<OtherComponentThatDoesNotUseZustand />` under the context api provider `<CountProvider />`, the `<OtherComponentThatDoesNotUseZustand />` does not re-render. It is not affected by changes in state by Zustand. This is very good!.

You can check the console logs to see the results. Every component renders on first load. However, only the componets that use Zustand re-render, when the `CountProvider` is updated via Zustand.

# The key benefits of this pattern as listed here by [`tkdodo`](https://tkdodo.eu/blog/zustand-and-react-context) for this pattern are real.

- everything under a context api provider is not unnecessarily re-rendered.
- testing becomes easier, as you can provide a component that is reliant on Zustand with initial state - so setup and teardown of tests will be easy with this pattern.

<br>

The original React + TypeScript + Vite setup documentation entries via (npm create vite@latest my-app -- --template react-ts) are as follows...

<br>

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
