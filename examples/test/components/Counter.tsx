// src/components/Counter.tsx
"use client";

import React from "react";
import { useCounter } from "../hooks/useCounter"; // Import your custom hook

export function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="counter-container p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <div className="flex justify-center mb-4">
        <p className="text-3xl font-bold">{count?.toString() || "Loading..."}</p>
      </div>
      <div className="flex justify-between space-x-4">
        <button
          onClick={increment}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
