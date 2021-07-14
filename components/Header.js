import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";
function Header() {
  return (
    // ============= Contains the header / navBar of project============================//
    <header>
      <div className=" grid grid-cols-2 bg-heading_blue z-10">
        {/* ==== LEFT Side of header bar ======== */}
        <div className="grid items-baseline pl-5 pt-3 sm:hidden">
          <MenuIcon className=" h-9 pl-1 " />
          <p>MENU</p>
        </div>

        {/* <div className="header_button">
          <h1> Daniel, The Website Builder</h1>
        </div> */}

        {/* ==== CENTER Side of header bar ======== */}

        {/* Right */}
        {/* <div className="header_button">
          ECN TRADER
        </div> */}
      </div>

      <div className="h-96">
      <video autoPlay loop muted className="object-fill object-right h-96 mt-0 w-full">
        <source src="/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </header>
  );
}

export default Header;
