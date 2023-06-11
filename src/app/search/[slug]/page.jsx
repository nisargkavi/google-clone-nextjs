"use client";
import React, { useEffect } from "react";
import Footer from "@/app/components/Footer";
import SearchHeader from "@/app/components/SearchHeader"
import SearchResults from "@/app/components/SearchResults";
import { useGlobalContext } from "@/app/context/appContext";


const search = function({ params }) {
  const { setSearchTerm, setSearchResults, searchResults,resultsShown,setResultsShown,windowSize } = useGlobalContext();
  const handleSearch = async (searchSlug) => {
    const API_KEY = "AIzaSyAjzK_9dM44dMZb9KF5OO_WuChv8mGOv1E";
    const CONTEXT_KEY = "14f3672e8270449cf";
    const startIndex = 0;

    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchSlug}&start=${startIndex}`);
      if (response.ok && response.status === 200) {
        const data = await response.json();
        setSearchResults(data);
        setResultsShown(true);
        document.title = `${decodeURIComponent(searchSlug)} - Google Search`;
        history.pushState({}, null, window.location.href.split("/")[0] + "/search/" + searchSlug);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  useEffect(() => {
    if (searchResults === null) {
      handleSearch(params.slug);
      setSearchTerm(decodeURIComponent(params.slug));
    }
  }, [searchResults]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
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

export default search
