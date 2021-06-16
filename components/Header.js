import Image from "next/image"
function Header() {
    return (
        <header>

        <div className='bg-heading_blue'>
            {/* Left */}
            <div>
                <img className="p-5 h-30 w-140 " src="./logo.jpg" alt="daniel-james-logo" />
            </div>


            {/* Right */}
        </div>
        </header>
    )
}

export default Header
