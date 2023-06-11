"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/appContext";
import Footer from "@/app/components/Footer";
import Header from "./components/Header";
import SearchBar from "@/app/components/SearchBar";

export default function Home() {
  const router = useRouter();
  const { searchTerm, setSearchResults,setResultsShown,windowSize } = useGlobalContext();
  const handleSearch = async (e) => {
    const API_KEY = "AIzaSyAjzK_9dM44dMZb9KF5OO_WuChv8mGOv1E";
    const CONTEXT_KEY = "14f3672e8270449cf";
    const startIndex = 0;
    try {
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`);
      if (response.ok && response.status === 200) {
        const data = await response.json();
        setSearchResults(data);
        setResultsShown(true);
        router.push(`/search/${searchTerm}`);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value);
    }
  }

  return (
    <>
      {windowSize.width > 640 ?
        <>
        <Header />
          <div className="flex justify-center mt-8 px-5">
            <div className="lg:w-2/4 max-w-xl pt-24">
              <Image
                className="ml-auto mr-auto mb-2"
                height={207}
                width={700}
                src="/landing.gif"
                alt="Google Logo"
                priority
              />
              <SearchBar handleKeyDown={handleKeyDown} />

              <div className="flex mt-6 justify-center">
                <button className="btn" onClick={() => handleSearch()}>
                  <span className="mx-2 text-black">Google Search</span>
                </button>
                <button className="btn">
                  <span className="mx-2 text-black">I'm Feeling Lucky</span>
                </button>
              </div>

              <div className="flex justify-center text-xs mt-8">
                <span className="tracking-tight text-gray-900 text-sm">
                  Google offered in:
                </span>
                <div className="mx-2">
                  <a href="#" className="px-1 text-blue-600 hover:underline text-sm">
                    Hausa
                  </a>
                  <a href="#" className="px-1 text-blue-600 hover:underline text-sm">
                    Akan
                  </a>
                  <a href="#" className="px-1 text-blue-600 hover:underline text-sm">
                    Ewe
                  </a>
                  <a href="#" className="px-1 text-blue-600 hover:underline text-sm">
                    Ga
                  </a>
                </div>
              </div>
            </div>
          </div>

        <Footer />
        </> :      
        <div className="flex justify-center items-center h-[100vh]">
          <h1 className="text-2xl">Please use a larger screen</h1>
        </div>
      }
    </>
  );
}
