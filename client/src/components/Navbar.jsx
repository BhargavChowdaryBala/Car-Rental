import { useState } from 'react';

import { Link, useLocation ,useNavigate} from 'react-router-dom';
import { assets, menuLinks } from '../assets/assets';

const Navbar = ({setShowLogin}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 border-b border-borderColor transition-all duration-250
      ${location.pathname === "/" ? "bg-[#F1F5F9]/90 backdrop-blur-md" : "bg-white/90 backdrop-blur-md"}`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="Navbar Logo"
          className="h-8"
        />
        <p className="text-xl font-bold">Drive Away</p>
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16
        max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row
        items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4
        transition-all duration-300 z-50
        ${location.pathname === "/" ? "bg-light" : "bg-white"}
        ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-gray-600 hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <div className='hidden lg:flex items-center text-sm gap-2 border border-borderColor px-3 rounded-full max-w-56'>
          <input type="text" className='py-1.5 w-full bg-transparent outline-none placholder-gray-500' placeholder="Search" />
          <img src={assets.search_icon} alt="search" />
        </div>
        <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
          <button onClick={()=>{navigate('/owner')}} className='cursor-pointer'>Dashboard</button>
          <button onClick={()=>{setShowLogin(true)}} className ='cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg'>Login</button>
        </div>
      </div>
      <button className="sm:hidden cursor-pointer" aria-label="Menu" onClick={() => setOpen(!open)}>
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="Menu Icon"
        />
      </button>
    </div>
  );
};

export default Navbar;