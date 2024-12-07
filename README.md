# A Zustand + Context API pattern for making use of the best of both worlds.

This pattern comes from comes from here: https://tkdodo.eu/blog/zustand-and-react-context

And I discovered it here from Cosden (https://www.youtube.com/@cosdensolutions): https://www.youtube.com/watch?v=1Fi4hK7L1ec

### Getting started

`npm i`

`npm run dev`

The main files to look at are `CountProvider.tsx` and `App.tsx`

## Notes

When adding a `<OtherComponentThatDoesNotUseZustand />` under the context api provider `<CountProvider />`, the `<OtherComponentThatDoesNotUseZustand />` does not re-render. It is not affected by changes in state by Zustand. This is very good!.

You can check the console logs to see the results.

Every component renders on first load - expected. However, only the components that subcribe to the Zustand store via the `useCountStore` hook re-render when the `CountProvider` is updated via the Zustand commands.

---

#### What I see as the key benefits of this pattern.

- everything under a context api provider is not unnecessarily re-rendered.
- testing becomes easier, as you can provide a component that is reliant on Zustand with initial state - so setup and teardown of tests will be easy with this pattern.
