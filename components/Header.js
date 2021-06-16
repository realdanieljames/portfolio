import Image from "next/image"
function Header() {
    return (
        <header>

        <div className='bg-heading_blue'>
            {/* Left */}
            <div>
                {/* <img className="p-5 h-30 w-140 " src="./logo.jpg" alt="daniel-james-logo" /> */}
                <Image src="https://raw.githubusercontent.com/realdanieljames/portfolio/main/public/logo.jpg" width={150} height={40}/>
            </div>


            {/* Right */}
        </div>
        </header>
    )
}

export default Header
