import React, { useState } from 'react';

const Header = ({
  logo,
  searchPlaceholder,
  onSearch,
  onSignIn,
  onHamburgerClick,
  additionalItems,
  onSearchQueryChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchIconClick = () => {
    // Call the onSearch function with the current searchQuery
    onSearch(searchQuery);
  };

  // const handleSearchInputChange = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);

  //   // Call the onSearchQueryChange prop to update the query in the parent component
  //   onSearchQueryChange(query);
  // };

  return (
    <header className="p-4">
      <nav className="flex items-center justify-between">
        {/* Brand name & logo */}
        <div className="flex flex-row items-center space-x-4">
          {logo && <img src={logo} alt="Logo" />}
        </div>

        {/* Search inputs */}
        <div className="flex items-center justify-between px-4 py-2 rounded-full bg-gray-700">
          <input
            type="text"
            placeholder={searchPlaceholder || "What do you want to watch?"}
            className="flex-grow bg-transparent border-none outline-none text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div
            onClick={handleSearchIconClick}
            style={{ cursor: 'pointer', padding: '8px' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
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


        {/* any additional items */}
        <div className="flex items-center space-x-4">{additionalItems}</div>

        {/* Sign-in & Hamburger menu */}
        <div className="flex flex-row items-center gap-x-4 text-white">
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
