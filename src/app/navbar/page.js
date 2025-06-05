"use client"
export default function Navbar() {
  return (
    <>
      <header
          id="navbar"
          className="bg-gradient-to-r from-purple-300 to-pink-200"
        >
          <nav className="font-poppins py-3 w-full">
            <div className="w-full container flex items-center justify-around text-purple-950 sm:flex sm:items-center sm:justify-around">
              <div className="flex items-center sm:flex">
                <a href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOfIDmPDig14qxjt18ROW0HycoCgHuRLyVA&s"
                    alt="imgLogo"
                    className="size-16 rounded-full"
                  />
                </a>
                <span className="text-3xl font-bold font-serif">Aman</span>
              </div>
              <div className="hidden sm:hidden md:flex sm:flex-row sm:items-center sm:justify-center sm:gap-6">
                <ul className="sm:flex sm:gap-6">
                  <a href="#head">
                    <li className="font-semibold sm:text-[17px] sm:pb-2 relative text-purple-950 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-950 after:transition-all after:duration-300 hover:after:w-full sm:p-1.5">
                      Home
                    </li>
                  </a>
                  <a href="#about">
                    <li className="font-semibold sm:text-[17px] sm:pb-2 relative text-purple-950 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-950 after:transition-all after:duration-300 hover:after:w-full sm:p-1.5">
                      About
                    </li>
                  </a>
                  <a href="#skills">
                    <li className="font-semibold sm:text-[17px] sm:pb-2 relative text-purple-950 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-950 after:transition-all after:duration-300 hover:after:w-full sm:p-1.5">
                      Skills
                    </li>
                  </a>
                  <a href="#certificate">
                    <li className="font-semibold sm:text-[17px] sm:pb-2 relative text-purple-950 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-950 after:transition-all after:duration-300 hover:after:w-full sm:p-1.5">
                      Certifications
                    </li>
                  </a>
                  <a href="#blogpost">
                    <li className="font-semibold sm:text-[17px] sm:pb-2 relative text-purple-950 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-950 after:transition-all after:duration-300 hover:after:w-full sm:p-1.5">
                      Portfolio
                    </li>
                  </a>
                  <a href="#contact">
                    <li className="font-semibold sm:text-[17px] sm:pb-2 relative text-purple-950 transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-purple-950 after:transition-all after:duration-300 hover:after:w-full sm:p-1.5">
                      Contact
                    </li>
                  </a>
                </ul>
                <button className="rounded-[7px] px-8 py-3 font-bold text-white bg-gradient-to-r from-purple-800 to-blue-700 shadow-lg hover:bg-left bg-[length:200%_100%] bg-right transition-all duration-100 hover:cursor-pointer">
                  Hire Me!
                </button>
              </div>
              <div className="md:hidden">
                <div className="w-7 border-b-2 p-0.5 border-b-purple-950"></div>
                <div className="w-7 border-b-2 p-0.5 border-b-purple-950"></div>
                <div className="w-7 border-b-2 p-0.5 border-b-purple-950"></div>
              </div>
            </div>
          </nav>
        </header>
    </>
  );
}