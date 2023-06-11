"use client";
import React, { useState, useEffect ,useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [resultsShown, setResultsShown] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: 1920,
        height: 1920,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <AppContext.Provider value={{
            windowSize,
            searchResults,
            setSearchResults,
            searchTerm,
            setSearchTerm,
            resultsShown,
            setResultsShown
        }}>
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
