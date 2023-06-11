"use client"
import Link from "next/link";
import Image from "next/image";
import HeaderOption from "@/app/components/HeaderOption";
import { useGlobalContext } from "@/app/context/appContext";
import { HiOutlineSearch,HiOutlinePhotograph,HiOutlinePlay,HiOutlineNewspaper,HiOutlineMap,HiOutlineDotsVertical,HiOutlineMicrophone } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { BsMic, BsSearch } from "react-icons/bs";

const SearchHeader = ({ handleKeyDown }) => {
    const { searchTerm, setSearchTerm } = useGlobalContext();
    return (
        <>
            <div className="flex justify-between py-1 mx-2 sm:mx-5 mt-0">
                <div className="flex flex-col sm:flex-row">
                    <div className="p-0 sm:p-5 pt-3 self-center w-100">
                        <Link href='/'>
                            <Image
                                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                height={40}
                                width={120}
                                className="cursor-pointer"
                                alt="Google Icon"
                                priority
                            />
                        </Link>
                    </div>
                    <div className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[800px] p-0 sm:p-5 pt-3">
                        <div className="flex justify-between border border-gray-300 rounded-full py-2 px-4 hover:shadow-md">
                            <div className="flex justify-center items-center">
                                <HiOutlineSearch className="text-[#9aa0a6] text-xl p-[1px]" />
                            </div>
                            <input
                                type="search"
                                className="w-full outline-none p-1 mx-2"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {handleKeyDown(e)}}
                            />

                            <div className="flex flex-center">
                                <a href="" className="mt-auto mb-auto">
                                    <HiOutlineMicrophone className="text-[#9aa0a6] text-xl p-[1px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <IoSettingsOutline className="text-[25px] sm:text-[45px] p-[3px] sm:p-[10px] hover:bg-[#3c404314] rounded-full" />
                    <CgMenuGridR className="text-[25px] sm:text-[45px] ms-1 me-1 p-[3px] sm:p-[10px] hover:bg-[#3c404314] rounded-full" />
                    <Image
                        className="rounded-full border-b no-underline hover:border-gray-500 ml-2"
                        width={32}
                        height={32}
                        src="https://ui-avatars.com/api/?name=Nisarg+Kavi"
                        alt="Profile Image"
                        priority
                    />
                </div>
            </div>
            <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b pb-4">
                <div className="flex gap-2">
                    <HeaderOption title="All" selected />
                    <a href="https://www.google.co.in/imghp?hl=en&ogbl">
                        <HeaderOption title="Images" />
                    </a>
                    <a href="https://www.youtube.com">
                        <HeaderOption title="Videos" />
                    </a>
                    <a href="https://news.google.com">
                        <HeaderOption title="News" />
                    </a>
                    <a href="https://www.google.com/maps">
                        <HeaderOption title="Maps" />
                    </a>
                    <HeaderOption title="More" />
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
                        <p>Settings</p>
                    </a>
                    <p>Tools</p>
                </div>
            </div>
        </>
    )
}

export default SearchHeader;