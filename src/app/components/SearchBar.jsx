"use client";
import { HiOutlineMicrophone, HiOutlineSearch } from "react-icons/hi";
import { useGlobalContext } from "@/app/context/appContext";

const SearchBar = ({handleKeyDown}) => {
    const { setSearchTerm } = useGlobalContext();
    return (
        <div className="flex justify-between border border-gray-300 rounded-full mt-8 py-2 px-4 hover:shadow-md md:mx-2 mx-4">
            <div className="flex justify-center items-center">
                <HiOutlineSearch className="text-[#9aa0a6] text-xl p-[1px]" />
            </div>
            <input
                type="search"
                className="w-full outline-none p-1 mx-2"
                autoFocus
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {handleKeyDown(e)}}
            />

            <div className="flex flex-center">
                <HiOutlineMicrophone className="text-[#9aa0a6] text-xl p-[1px]" />
            </div>
        </div>
    )
}

export default SearchBar;