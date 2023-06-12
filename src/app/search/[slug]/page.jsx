"use client";
import React, { useEffect } from "react";
import Footer from "@/app/components/Footer";
import { useGlobalContext } from "@/app/context/appContext";
import { API_KEY, CONTEXT_KEY } from "@/app/keys";
import SearchHeader from "@/app/components/SearchHeader"
import SearchResults from "@/app/components/SearchResults";

export const googleSearch = async (searchString) => {
  const startIndex = 0;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchString}&start=${startIndex}`);
  if (!response.ok && response.status != 200) {
    throw new Error('Something went wrong!');
  }
  const data = await response.json();

  return new Promise((resolve) => {
    resolve(data);
  });
}

const Search = ({ params }) => {
  const { setSearchTerm, setSearchResults, searchResults,resultsShown,setResultsShown,windowSize } = useGlobalContext();
  const handleSearch = async (searchString) => {
    const data = await googleSearch(searchString);
    setSearchResults(data);
    setResultsShown(true);
    document.title = `${decodeURIComponent(searchString)} - Google Search`;
    history.pushState({}, null, "/search/" + searchString);
  }
  useEffect(() => {
    if (searchResults === null) {
      handleSearch(params.slug);
      setSearchTerm(decodeURIComponent(params.slug));
    }
  }, [searchResults]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(event.target.value);
      handleSearch(event.target.value);
    }
  }
  return (
    <>
     {windowSize.width > 640 ?
      <>
        <SearchHeader handleKeyDown={handleKeyDown} />
        {resultsShown && <SearchResults results={searchResults}/> }
        <Footer /> 
      </>
      :
      <div className="flex justify-center items-center h-[100vh]">
        <h1 className="text-2xl">Please use a larger screen</h1>
      </div>
     }
    </>
  )
}

export default Search;
