import React, { useState } from 'react';
import logo from '../images/logo.png';
import Navbutton from './Navbutton';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useAuth } from '../context/AuthContext';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ currentRoute }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [auth, setAuth] = useAuth()
  const [cookies, setCookie,removeCookie] = useCookies(['token']);
  const name = auth?.user?.user_Name;
  const navigate=useNavigate()

  const handleLogout=async()=>{
    removeCookie('token')
    localStorage.clear()
    delete axios.defaults.headers.common['Authorization'];
  }

  //toggle search 
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  //handle search result
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search-product?search=${encodeURIComponent(searchQuery)}`);
      
    }
  };
  
  //handle search result for mobile view
  const handleSearchMobile = () => {
    if (searchQuery.trim()) {
      navigate(`/search-product?search=${encodeURIComponent(searchQuery)}`);
      toggleSearch();
    }
  };


  return (
    <nav className="bg-gray-900 border-gray-700 py-2.5 w-full">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl h-full px-4 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="h-12 w-16 mr-3"
            alt="PawsPoint Logo"
          />
          <span className="self-center text-2xl font-title_font font-bold whitespace-nowrap text-white">
            PawsPoint
          </span>
        </a>

        {/* Right Section - Explore Button and Menu Toggle Button */}
        <div className="flex items-center lg:order-2">
          {/* Explore Button */}

          {/* Search button  */}

          <button
            onClick={toggleSearch}
            className="lg:hidden ml-4 p-2 text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none"
            aria-expanded={isSearchOpen ? 'true' : 'false'}
          >
            <Icon icon="si:search-duotone" width="20" height="20" />
          </button>

          {/* search button end  */}
          {/* dashboard button  */}
          <button
           onClick={()=>navigate('/dashboard')}
            className="hidden md:flex group relative flex-row items-center bg-[#212121] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
          >
            <div
              className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"
            ></div>
            <div
              className="shrink-0 bg-border w-[1px] h-4"
              role="none"
              data-orientation="vertical"
            ></div>
            <span
              className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center"
            >
              {name?.substring(0, 2)?.toUpperCase() || "Login"}
            </span>
            <svg
              strokeLinecap="round"
              className="text-[#9c40ff]"
              strokeWidth="1.5"
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="11"
              width="11"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                d="M0 5h7"
                className="opacity-0 transition group-hover:opacity-100"
              ></path>
              <path
                strokeLinecap="round"
                d="M1 1l4 4-4 4"
                className="transition group-hover:translate-x-[3px]"
              ></path>
            </svg>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'
            } items-center justify-between bg-gray-900 z-40 w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Navbutton  destination={'/'} label={'Home'} active={currentRoute=='home'} />
            </li>
            <li>
              <Navbutton destination={'/shop'} label={'Shop'} active={currentRoute=='shop'}/>
            </li>
            <li>
              <Navbutton destination={'#'} label={'Vet'} active={currentRoute=='vet'}/>
            </li>
            <li>
              <Navbutton destination={'#'} label={'Contact'} active={currentRoute=='contact'}/>
            </li>
            <li>
              <Navbutton destination={'#'} label={'Adopt'} active={currentRoute=='adapt'}/>
            </li>
            <l1 className={`${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <button
              onClick={()=>navigate('/dashboard')}
                class="md:hidden relative inline-flex  h-9 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none my-3"
              >
                <span
                  class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                >
                </span>
                <span
                  class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined"
                >
                  Profile
                </span>
              </button>

            </l1>
            <l1>
              <button onClick={handleLogout}
                class="group flex items-center justify-start w-11 h-6 my-1 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
              >
                <div
                  class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                >
                  <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                    <path
                      d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                    ></path>
                  </svg>
                </div>
                <div
                  class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  Logout
                </div>
              </button>
            </l1>

          </ul>

          {/* Search Bar - Shown on second row in mobile view */}
          <div className="block relative mt-4 w-full lg:hidden">
            <input
              type="text"
              className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e)=>{setSearchQuery(e.target.value)}}
            />
            <button
            onClick={handleSearch}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar for Large Screens */}
        <div className="hidden lg:block relative mx-4">
          <input
            type="text"
            className="block w-64 px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={handleSearch}
          >
            <Icon icon="si:search-duotone" width="20" height="20" />
          </button>
        </div>
      </div>

      {/* Search Bar (visible when clicked) */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-sm bg-black bg-opacity-50 z-50" onClick={toggleSearch}>
          <div className="flex justify-center items-start h-full">
            <div className="relative m-3  w-11/12 sm:w-96 bg-white p-4 rounded-lg"
             onClick={(e) => e.stopPropagation()}
            >
              <input
                type="text"
                className="w-full  px-4 py-2 text-sm text-gray-900 bg-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search...."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}

              />
              <button
                onClick={handleSearchMobile}
                className="absolute top-6 right-5 text-gray-600 hover:text-gray-800"
              >
                <Icon icon="si:search-duotone" width="20" height="20" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
