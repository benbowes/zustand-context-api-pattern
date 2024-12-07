import CountProvider, { useCountStore, CountStore } from "./CountProvider";

type AppProps = {
  initialCount: number;
};

export default function App({ initialCount = 5 }: AppProps) {
  return (
    <CountProvider initialCount={initialCount}>
      <Component />
    </CountProvider>
  );
}

function Component() {
  const { count, increment, decrement } = useCountStore(
    (state: CountStore) => state
  );
  return (
    <div>
      <div>Count: {count}</div>
      <div>
        <button type="button" onClick={increment}>
          Increment
        </button>
      </div>
      <div>
        <button type="button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
