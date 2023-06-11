function HeaderOption({ title, selected }) {
    return (
        // <div className={`flex items-center space-x-1 border-b-2 border-transparent hover:text-blue-40 hover:border-blue-400 pb-2 cursor-pointer ${selected && "text-blue-500 boarder-blue-400"}`}>
        <div className="px-[14px] h-[40px] cursor-pointer inline-flex justify-center items-center rounded-[20px] border border-[#dadce0] hover:bg-[#f1f3f4] hover:border-[#dadce0]">
            {/* <Icon className="h-5" /> */}
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    //      <div className="px-[14px] h-[40px] inline-flex rounded-[20px] border border-[#dadce0]">
    //      <span className="self-center">Videos</span>
    //  </div>
    );
  }
  
export default HeaderOption;