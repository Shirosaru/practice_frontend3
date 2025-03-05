"use client";

import { useState } from "react";

export default function Home() {
  const [inputString, setInputString] = useState<string>(""); // Original string input
  const [proteinSequence, setProteinSequence] = useState<string>(""); // Protein sequence input
  const [outputString, setOutputString] = useState<string>(""); 
  const [fileUrl, setFileUrl] = useState<string | null>(null); // File URL for download
  const [processedData, setProcessedData] = useState<any | null>(null); // Processed data from backend
  const [vhvlSequence, setVhvlSequence] = useState<string | null>(null); // VHVL sequence
  const [remainingSequence, setRemainingSequence] = useState<string | null>(null); // Remaining sequence

  // Handle changes in the original string input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(e.target.value);
  };

  // Handle changes in the protein sequence input
  const handleProteinSequenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProteinSequence(e.target.value);
  };

  // Handle form submission to call Flask backend for protein sequence processing
  const handleProteinSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/get_vhvl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ protein_sequence: proteinSequence }), // Send protein sequence to backend
      });

      if (response.ok) {
        const data = await response.json();
        setVhvlSequence(data.vhvl); // Set the VHVL sequence
        setRemainingSequence(data.remaining); // Set the remaining sequence
      } else {
        const errorData = await response.json();
        setOutputString(`Error: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setOutputString("An error occurred while processing your request.");
    }
  };

  // Handle form submission for the original string
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: inputString }), // Send input string to backend
      });

      if (response.ok) {
        const data = await response.json();

        if (data.file_path) {
          setProcessedData(data.processed_data);
          const blob = await fetch(data.file_path).then((res) => res.blob());
          const downloadUrl = URL.createObjectURL(blob);
          setFileUrl(downloadUrl); // Set the file URL for download

          setOutputString("File is ready for download.");
        }
      } else {
        const errorData = await response.json();
        setOutputString(`Error: ${errorData.error || "Unknown error"}`);
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
            {/* Original String Input Form */}
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

            {/* Protein Sequence Input Form */}
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg text-white">
              <h2 className="text-2xl mb-4">Enter Protein Sequence:</h2>
              <input
                type="text"
                value={proteinSequence}
                onChange={handleProteinSequenceChange}
                className="p-3 rounded-lg w-full mb-4 text-black"
                placeholder="Enter protein sequence"
              />
              <button
                onClick={handleProteinSubmit}
                className="bg-green-500 p-3 rounded-xl text-white hover:bg-green-600 transition"
              >
                Get VHVL and Remaining
              </button>
            </div>

            {/* Output String */}
            {outputString && (
              <div className="mt-4 p-6 bg-gray-700 rounded-lg text-white">
                <h3 className="text-lg">Processed String:</h3>
                <p>{outputString}</p>
              </div>
            )}

            {/* VHVL and Remaining Sequence Output */}
            {vhvlSequence && (
              <div className="mt-4 p-6 bg-gray-700 rounded-lg text-white">
                <h3 className="text-lg">VHVL Sequence:</h3>
                <p>{vhvlSequence}</p>
              </div>
            )}
            {remainingSequence && (
              <div className="mt-4 p-6 bg-gray-700 rounded-lg text-white">
                <h3 className="text-lg">Remaining Sequence:</h3>
                <p>{remainingSequence}</p>
              </div>
            )}

            {/* If the file URL is available, show the download link */}
            {fileUrl && (
              <div className="mt-4 p-6 bg-gray-700 rounded-lg text-white">
                <h3 className="text-lg">Download Translated File:</h3>
                <a
                  href={fileUrl}
                  download="translated_sequence.xlsx"
                  className="text-blue-500 hover:underline"
                >
                  Click here to download the file
                </a>
              </div>
            )}

            {/* Display the processed data (DataFrame or JSON) */}
            {processedData && (
              <div className="mt-4 p-6 bg-gray-700 rounded-lg text-white">
                <h3 className="text-lg">Processed Data:</h3>
                <pre>{JSON.stringify(processedData, null, 2)}</pre> {/* Display as pretty JSON */}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
