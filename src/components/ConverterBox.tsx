"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ConverterBox() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [result, setResult] = useState(0);

  useEffect(() => {
    convert();
  }, [from, to]);

  const convert = async () => {
    const res = await axios.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
    setResult(res.data.result);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center mt-10">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 rounded w-full mb-4"
      />
      <div className="flex justify-between gap-4">
        <select value={from} onChange={(e) => setFrom(e.target.value)} className="border p-2 rounded w-1/2">
          <option>USD</option>
          <option>PKR</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
        <select value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 rounded w-1/2">
          <option>USD</option>
          <option>PKR</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
      <button onClick={convert} className="bg-blue-600 text-white w-full py-2 rounded-lg mt-4">
        Convert
      </button>
      <p className="text-lg mt-4 font-semibold">Result: {result.toFixed(2)} {to}</p>
    </div>
  );
}
