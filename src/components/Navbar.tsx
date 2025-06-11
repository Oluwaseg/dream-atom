import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-[#F5F7FA] shadow relative z-50">
      <div className="h-[6rem] px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="font-extrabold text-2xl">WELLIFIZE</h1>
        
        <div className="hidden md:flex gap-5">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Wellness</a>
          <a href="#">Points</a>
          <a href="#">Partners</a>
        </div>
        <div>
          
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute right-4 top-24 w-52 flex flex-col items-end text-right px-4 py-4 space-y-3 bg-white shadow-lg rounded-md">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Wellness</a>
          <a href="#">Points</a>
          <a href="#">Partners</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

