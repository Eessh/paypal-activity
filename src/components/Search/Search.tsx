import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex-1">
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full rounded-full border-0 py-5 pl-14 pr-7 text-gray-900 bg-white ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 sm:text-sm sm:leading-6 md:text-lg"
          placeholder="Search by name or email"
          value={query}
          onChange={e => {setQuery(e.target.value)}}
        />
      </div>
    </div>
  );
};

export default Search;