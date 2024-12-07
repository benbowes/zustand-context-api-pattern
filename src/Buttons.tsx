import { useCountStore, CountStore } from "./CountProvider";

export default function Buttons() {
  const { increment, decrement } = useCountStore((state: CountStore) => state);
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
