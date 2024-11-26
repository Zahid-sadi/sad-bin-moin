import logo from "@/public/Images/saad.JPG";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./Navlink";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
    return (
        <nav className="fixed px-6 md:px-12 flex  items-center justify-between w-full border-b py-5 ">
            <Link href="/">
                <Image
                    alt="logo"
                    height={100}
                    width={100}
                    src={logo}
                    className="text-white dark:text-teal-500 h-12 rounded-full w-auto"
                />
            </Link>

            <NavLink />
            <ToggleButton />
        </nav>
    );
};

export default Navbar;
