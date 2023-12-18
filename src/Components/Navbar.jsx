import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/" className="flex items-center pl-4">
            <img src="../../public/Favicon.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BAHRI</span>
          </Link>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
            </div>
            <ul className="flex ml-80 flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to='/' className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</Link>
              </li>
              <li>
                <Link to='/exercises' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Exercises</Link>
              </li>
              <li>
                <Link to='/about' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li>
                <Link to='/contact' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center w-full">
          <Link to="/" className="flex items-center pl-4">
            <img src="../../public/Favicon.png" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BAHRI</span>
          </Link>
          <div className="ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m3 6 14 0m-14 5 14 0m-14 5 14 0"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden w-full absolute top-14 left-0 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700`}
        >
          <ul className="flex flex-col p-4 font-medium">
            <li>
              <Link
                to="/"
                onClick={toggleMobileMenu}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/exercises"
                onClick={toggleMobileMenu}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Exercises
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMobileMenu}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMobileMenu}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
