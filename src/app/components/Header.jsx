import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";

const Header = () => {
    return (
        <div className="flex justify-end py-1 mr-5 ml-5 mt-0 text-sm">
            <div className="flex items-center pt-2">
                <a href="#" className="block p-2 text-[13px] font-medium hover:underline">
                    Gmail
                </a>
                <a href="#" className="block p-2 text-[13px] font-medium hover:underline">
                    Images
                </a>
                <CgMenuGridR className="text-[45px] ms-2 me-1 p-[10px] hover:bg-[#3c404314] rounded-full" />
                <Image
                    className="rounded-full border-b no-underline hover:border-gray-500 ml-2"
                    width={32}
                    height={32}
                    src="https://ui-avatars.com/api/?name=Nisarg+Kavi"
                    alt="Profile Image"
                />
            </div>
        </div>
    )
}

export default Header;