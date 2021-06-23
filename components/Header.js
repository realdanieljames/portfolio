import Image from "next/image";
function Header() {
  return (
    // ============= Contains the header / navBar of project============================//
    <header>
      <div className=" grid grid-cols-3 bg-heading_blue">

        {/* ==== LEFT Side of header bar ======== */}
        <div className="header_button">
          Web Developer
        </div>

        {/* ==== CENTER Side of header bar ======== */}
        <div className="cursor-pointer h-10 p-4">
            <div className=" flex justify-center cursor-pointer">

          <Image
          className="p-20"
          src="https://raw.githubusercontent.com/realdanieljames/portfolio/main/public/logo.jpg"
          width={100}
          height={50}
          />
          </div>
        </div>

        {/* Right */}
        <div className="header_button">
          ECN TRADER
        </div>
      </div>
    </header>
  );
}

export default Header;
