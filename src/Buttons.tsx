import { useCountStore, CountStore } from "./CountProvider";

export default function Buttons() {
  const increment = useCountStore((state: CountStore) => state.increment);
  const decrement = useCountStore((state: CountStore) => state.decrement);

  console.log("Buttons rendered");
  return (
    <div>
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
