import { RiMenu2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";


const Navbar = () => {
    const [isOpen, setOpen] = useState(true);
    useEffect(() => {
        const windowsHandel = () => {

            if (window.innerWidth >= 1024) {
                setOpen(true)
            }
        }
        window.addEventListener('resize', windowsHandel);
    }, [])
   
    return (
        <nav className="navbar flex  lg:justify-center bg-slate-200 ">
            <div onClick={() => setOpen(!isOpen)} className="lg:hidden">
                {isOpen ? (<RiMenu2Fill />) : (<ImCross />)}
            </div>

            <ul  className={`flex  flex-col lg:flex-row absolute lg:static duration-300 bg-slate-200 rounded-lg top-14 -left-1 px-4 ${isOpen&&'-left-40'}  font-semibold `}>

                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Service</a></li>
                <li><a>Search</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;