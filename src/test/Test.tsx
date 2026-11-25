import { useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  function sayHello() {
    console.log("Hello");
  }
  const firstFunction = () => console.log("Hello");

  const secondFunction = () => console.log("Hello");

  console.log(`${firstFunction === secondFunction}`);
  console.log("testt");

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
