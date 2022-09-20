import { useEffect, useRef, useState } from "react";
import Container from "./components/Container";
import Button from "./components/Button";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const seaechInputHandler = (event: any) => {
    setSearchInput(event.target.value);
  };

  const [current, setCurrent]: any = useState({});
  const getWethderData = async (city: string) => {
    try {
      const data = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=d0072763e7554f37a5e45938221909&q=${city}&aqi=no`
      );
      const res = await data.json();
      setCurrent(res);
    } catch (error) {}
  };

  const searchHandler = () => {
    if (searchInput.length > 1) return getWethderData(searchInput);
  };

  const keyUpHandler = (event: any) => {
    if (event.key === "Enter") return searchHandler();
  };

  const searchInputRef: any = useRef();
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-12 gap-y-4">
        <div className="col-start-4 col-span-6 grid grid-cols-[1fr,max-content]">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>

          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 outline-none"
              placeholder="Search"
              value={searchInput}
              onInput={seaechInputHandler}
              onKeyUp={keyUpHandler}
              ref={searchInputRef}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-pink-700 rounded-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            onClick={searchHandler}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>

        <Card data={current} />
      </div>
    </Container>
  );
}

export default App;
