import Image from "next/image";
function Header() {
  return (
    <header>
      <div className=" grid grid-cols-3 bg-heading_blue">

        {/* Left */}
        <div className="flex justify-center">
          Web Developer
        </div>
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
        <div className="flex justify-center">
          ECN TRADER
        </div>
      </div>
    </header>
  );
}

export default Header;
