import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname();
    return (
        <footer className={`grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 ${ pathname == "/" ? 'absolute bottom-0' : "" }`}>
            <div className="px-8 py-3">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2"></div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p className='cursor-pointer hover:underline'>Advertising</p>
                    <p className='cursor-pointer hover:underline'>Business</p>
                    <p className='cursor-pointer hover:underline'>How Search works</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p className='cursor-pointer hover:underline'>Privacy</p>
                    <p className='cursor-pointer hover:underline'>Terms</p>
                    <p className='cursor-pointer hover:underline'>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;