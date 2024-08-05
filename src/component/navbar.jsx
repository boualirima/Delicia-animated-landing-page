import { useState , useEffect } from "react";
import Logo from "./logo"
import {Link} from "react-router-dom";

const Navbar = () => {
     const [isOpen, setIsOpen] =useState(false);
     const toggleNavbar = () => {
        setIsOpen(!isOpen);
     };
     const[scrolling, setScrolling] = useState(false)
     const handleScroll=() =>{
        if (window.scrollY >10) {
         setScrolling(true);
        }else{
            setScrolling(false);
        }
     };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    return ( 
        <>
    <nav className={` fixed top-0 z-[20] mx-auto flex w-full items-center justify-between  p-2 transition-all duration-300  ${scrolling ? 'bg-myblue' : 'bg-transparent'}`}>
    <div className="grid grid-cols-3 gap-14 ml-[14%] " >
            <Link className=" font-jf text-xl " to="/home">Home
            {/* <p className="font-jf ">Home</p> */}
            </Link>
            <Link className=" font-jf text-xl " to="/new">New</Link>
            <Link className=" font-jf text-xl " to="/categories">Categories</Link>
        </div>           
        <Logo></Logo>
        <div className="grid grid-cols-3 gap-20 mr-[14%]">
            <Link className=" font-jf text-xl " to='/Recipes'>Recipes</Link>
            <Link className=" font-jf text-xl " to='/Popular'>Popular</Link>
            <Link className=" font-jf text-xl " to='/About us'>About us</Link>
        </div>  
        </nav>
        </>
     );
}
 
export default Navbar;