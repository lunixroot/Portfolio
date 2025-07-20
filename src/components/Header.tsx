import React from 'react';

const Header: React.FC = () => {
  return (
    <header className=" backdrop-blur-md bg-opacity-90 px-8 py-4 text-gray-400 fixed top-0 left-0 right-0 z-50 ">
      <nav className='flex justify-between items-center max-w-6xl mx-auto'>
        <div className="flex items-center gap-3">
          <img src="/adarsh.svg" alt="Adarsh Thakur" className="w-10 h-10" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-purple-400 via-pink-500 bg-clip-text text-transparent animate-pulse">
            &lt;AdarshThakur /&gt;
          </h1>
        </div>
        <div className='sm:hidden'>
          <img src="/menu.svg" className='w-8 h-8 invert' onClick={() => {
            const menu = document.getElementById('menu');
            if (menu) {
              menu.classList.toggle('hidden');
              const menuItems = menu.querySelectorAll('a');
              menuItems.forEach(item => {
                item.addEventListener('click', () => {
                  menu.classList.add('hidden');
                });
              });
            }
          }} alt="" />
          <div id="menu" className='absolute h-[300px] w-64 top-18 right-0 bg-zinc-900  opacity-90 p-4 hidden'>
            <ul className='flex flex-col gap-4 text-2xl items-center justify-around h-full'>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <ul className="hidden sm:flex justify-center gap-4">
          <li>
            <a 
              href="#hero" 
              className=" hover:text-gray-200 font-medium text-lg transition-colors duration-300 px-4 py-2 rounded-md "
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className=" hover:text-gray-200 font-medium text-lg transition-colors duration-300 px-4 py-2 rounded-md "
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className=" hover:text-gray-200 font-medium text-lg transition-colors duration-300 px-4 py-2 rounded-md "
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className=" hover:text-gray-200 font-medium text-lg transition-colors duration-300 px-4 py-2 rounded-md"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;