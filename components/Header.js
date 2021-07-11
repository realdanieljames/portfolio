import Image from "next/image";
import {MenuIcon} from "@heroicons/react/outline"
function Header() {
  return (
    // ============= Contains the header / navBar of project============================//
    <header>
      <div className=" grid grid-cols-2 bg-heading_blue">

        {/* ==== LEFT Side of header bar ======== */}
        <div className="grid items-baseline pl-5 pt-3 sm:hidden">
        <MenuIcon className=" h-9 pl-1 "/>
          <p>MENU</p>
        </div>
       
        <div className="header_button">
          
         <h1> Daniel, The Website Builder</h1>
        </div>

        {/* ==== CENTER Side of header bar ======== */}
        {/* <div className="cursor-pointer h-10 p-4">
            <div className="flex justify-center cursor-pointer">

          <Image
          className="p-20"
          src="https://raw.githubusercontent.com/realdanieljames/portfolio/main/public/logo.jpg"
          width={100}
          height={50}
          />
          </div>
        </div> */}

        {/* Right */}
        <div className="header_button">
          ECN TRADER
        </div>
      </div>
    </header>
  );
}

export default Header;


