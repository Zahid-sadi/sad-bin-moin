import logo from "@/public/Images/saad.JPG";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";

const Navbar = () => {
    return (
        <nav className=" sticky top-0 px-6 md:px-12 flex bg-black opacity-90 gap-5 items-center justify-center w-full py-5 ">
            <Link href="/">
                <Image
                    alt="logo"
                    height={100}
                    width={100}
                    src={logo}
                    className="h-12 z-50 rounded-full w-auto"
                />
            </Link>

            <NavLink />
            {/* <ToggleButton /> */}
        </nav>
    );
};

export default Navbar;
 