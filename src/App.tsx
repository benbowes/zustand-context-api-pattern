import CountProvider, { useCountStore, CountStore } from "./CountProvider";
import Buttons from "./Buttons";

type AppProps = {
  initialCount: number;
};

export default function App({ initialCount = 5 }: AppProps) {
  return (
    <CountProvider initialCount={initialCount}>
      <Component />
      <OtherComponentThatDoesNotUseZustand />
    </CountProvider>
  );
}

function Component() {
  const count = useCountStore((state: CountStore) => state.count);
  console.log("Component rendered");
  return (
    <div>
      <div>Count: {count}</div>
      <Buttons />
    </div>
  );
}

function OtherComponentThatDoesNotUseZustand() {
  console.log("OtherComponentThatDoesNotUseZustand rendered");
  return <div>Some other component thast does not use Zustand</div>;
}
