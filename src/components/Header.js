import React from 'react';

const Header = ({
  logo,
  // brandName,
  searchPlaceholder,
  onSearch,
  onSignIn,
  onHamburgerClick,
  additionalItems
}) => {
  return (
    <header className=" p-4">

      <nav className="flex items-center justify-between">

        {/* Brand name & logo */}
        <div className='flex flex-row items-center space-x-4'>
          {logo && <img src={logo} alt="Logo" className="" />}
          {/* {brandName && <span className="text-lg font-semibold">{brandName}</span>} */}
        </div>

        {/* search inputs */}
        <div className="flex flex-row items-center justify-between px-20 py-1 rounded-md border-2 border-gray-300">

          <div className=''>
            <input
              type="text"
              placeholder={searchPlaceholder || "What do you want to watch?"}
              className="bg-transparent border-none outline-none focus:outline-none text-white"
              onChange={onSearch}
            />

          </div>

          <div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 20a8 8 0 11-16 0 8 8 0 0116 0z"
              />
            </svg>

          </div>

        </div>

        {/* any additional item */}
        <div className="flex items-center space-x-4">

          {additionalItems}

        </div>

        {/* Signin & Hamburger menu */}
        <div className='flex flex-row items-center gap-x-4 text-white'>
          <button className="hidden md:block" onClick={onSignIn}>
            Sign In
          </button>

          <button className="md:hidden text-white" onClick={onHamburgerClick}>
            ☰
          </button>

        </div>



      </nav>
    </header>
  );
};

export default Header;
