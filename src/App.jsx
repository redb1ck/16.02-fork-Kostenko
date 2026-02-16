import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }

  function handleClick() {
    const value = Number(number);

    if (isNaN(value)) {
      setResult("Введите число");
      return;
    }

    if (value < 0) {
      setResult("Введите положительное число");
      return;
    }

    if (value > 50) {
      setResult("Максимальное число 50");
      return;
    }

    const fib = fibonacci(value);
    setResult(fib);
  }

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "2px solid black",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Числа Фибоначчи</h1>

      <input
        type="number"
        placeholder="Введите число"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      <br />

      <button onClick={handleClick} style={{ padding: "5px 15px" }}>
        Посчитать
      </button>

      <h2 style={{ marginTop: "20px" }}>
        Результат: {result}
      </h2>
    </div>
  );
}

export default App;