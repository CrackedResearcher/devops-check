'use client';
import Image from "next/image";
import { useState } from "react";
import { callGetMethod, getDetails, tellMyname } from "./api/actions";

export default function Home() {
  const [result, setResult] = useState<string>('');

  const handleCallApi = async (apiFunction: () => Promise<any>) => {
    try {
      const response = await apiFunction();
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult('Error calling API');
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <p>A basic web app to show the working of nextjs frontend with fastapi backend. <br/>There are three buttons - which trigger the backend api endpoint to get the data.</p>
        
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={() => handleCallApi(callGetMethod)}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Call Get Method
          </button>
          <button
            onClick={() => handleCallApi(getDetails)}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Get Details
          </button>
          <button
            onClick={() => handleCallApi(tellMyname)}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Tell My Name
          </button>
        </div>

        {result && (
          <div className="mt-8 w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">Results:</h2>
            <pre className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded-lg overflow-auto">
              {result}
            </pre>
          </div>
        )}
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">
          FastAPI + Next.js Demo
        </p>
      </footer>
    </div>
  );
}
