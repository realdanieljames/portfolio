import Image from "next/image";
function Header() {
  return (
    <header>
      <div className="bg-heading_blue">
        {/* Left */}
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
      </div>
    </header>
  );
}

export default Header;
