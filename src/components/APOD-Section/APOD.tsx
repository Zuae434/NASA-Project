import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { Controller, useForm } from "react-hook-form";

type APOD = {
  date: string;
  explanation: string;
  hdurl: string;
  title: string;
  url: string;
};

const APOD: React.FC = () => {
  function handleDateIncrementPlusOne(date: string): string {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    return newDate.toISOString().slice(0, 10);
  }

  function handleDateDecrementMinusOne(date: string): string {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    return newDate.toISOString().slice(0, 10);
  }

  const { control } = useForm();
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const [apod, setApod] = useState<APOD>();

  useEffect(() => {
    const fetchApod = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_NASA_API_KEY
        }&date=${selectedDate}`
      );
      const result: APOD = await response.json();
      setApod(result);
    };

    fetchApod();
  }, [selectedDate]);

  return (
    <>
      {apod ? (
        <img
          className="block relative w-full max-h-[1600px] -z-10 p-0 -mt-80px"
          src={apod.url}
          alt="Astronomy Picture of the Day"
        />
      ) : (
        <ClipLoader
          color="black"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <div className="absolute w-auto max-w-[447px] flex flex-col items-start items-auto gap-[40px] bg-transparent text-[#FFF] z-[-1] top-[150px] left-[25px]">
        {apod ? (
          <h2 className="self-stretch font-[Inter] text-[40px] font-bold h-auto max-w-[447px] mb-40px z-1">
            {apod.title}
          </h2>
        ) : (
          <h2>Astronomy Picture of the Day Title</h2>
        )}
        {apod ? (
          <p className="self-stretch font-[Inter] text-[20px] h-auto max-w-[447px]">
            {apod.explanation}
          </p>
        ) : (
          <p>Astronomy Picture of the Day Description</p>
        )}
      </div>
      <div className="control-bar absolute flex flex-row items-center justify-between gap-[30px] -mt-[100px] max-w-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          onClick={() => setSelectedDate(handleDateDecrementMinusOne)}
          className="left-arrow w-[48px] h-[48px] cursor-pointer shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 16L16 24M16 24L24 32M16 24H32M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <Controller
          control={control}
          name="date"
          render={() => (
            <input
              value={selectedDate}
              onChange={handleDateChange}
              type="date"
              className="bg-transparent text-center justify-around text-[#FFF]"
            />
          )}
        />
        <svg
          onClick={() => setSelectedDate(handleDateIncrementPlusOne)}
          className="right-arrow w-[48px] h-[48px] cursor-pointer shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M24 32L32 24M32 24L24 16M32 24H16M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default APOD;
