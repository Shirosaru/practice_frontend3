"use client";

import { useState } from "react";

export default function Home() {
  const [inputString, setInputString] = useState("");
  const [outputString, setOutputString] = useState("");

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  // Handle form submission to call Flask backend
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputString }),
      });

      if (response.ok) {
        const data = await response.json();
        setOutputString(data.result); // Set the result returned from the backend
      } else {
        setOutputString("An error occurred.");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setOutputString("An error occurred while processing your request.");
    }
  };

  return (
    <main>
      <div className="flex flex-col gap-8 items-center sm:items-start w-full px-3 md:px-0">
        <section className="flex flex-col items-center gap-10 w-full justify-center max-w-5xl">
          <div className="flex flex-col gap-10">
            {/* String Input Form */}
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg text-white">
              <h2 className="text-2xl mb-4">Enter a String:</h2>
              <input
                type="text"
                value={inputString}
                onChange={handleInputChange}
                className="p-3 rounded-lg w-full mb-4 text-black"
                placeholder="Type a string"
              />
              <button
                onClick={handleSubmit}
                className="bg-blue-500 p-3 rounded-xl text-white hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>

            {/* Output String */}
            {outputString && (
              <div className="mt-4 p-6 bg-gray-700 rounded-lg text-white">
                <h3 className="text-lg">Processed String:</h3>
                <p>{outputString}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
