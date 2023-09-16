import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MovieHero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import axios from "axios";







const HomePage = () => {
  const navigate = useNavigate();
  // const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(12);


  const handleSignIn = () => {
    // Handle sign-in action
  };

  const handleHamburgerClick = () => {
    // Handle hamburger menu click
  };

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your TMDB API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=9ff2abcab00a574f986e19bc5e425a4f&language=en-US&page=1`
        );

        const { results } = response.data;

        setFeaturedMovies(results);
      } catch (error) {
        console.error('Error fetching featured movies:', error);
      }
    };

    fetchFeaturedMovies();
  }, []);

  const handleSeeMoreClick = () => {
    if (totalMovies === 12) {
      setTotalMovies(36); // Show all movies
    } else {
      setTotalMovies(12); // Show 12 movies
    }
  };

  const openMovieDetailsInNewTab = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  const handleSearch = async (query) => {
    if (query.trim() === '') {
      // If the search query is empty, reset the search results
      setSearchResults([]);
      return;
    }

    try {
      // Replace 'YOUR_API_KEY' with your TMDB API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9ff2abcab00a574f986e19bc5e425a4f&language=en-US&query=${query}&page=1`
      );
      const { results } = response.data;
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };




  return (
    <div
      className="">

      <main className="bg-[#F9FAFB]">

        {/* Hero section */}
        <section
          className="bg-white dark:bg-gray-900 w-full h-[700px]"
          style={{
            backgroundImage: "url(/images/hero_bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-8">

            <div className="flex flex-col justify-between space-y-32">

              <Header
                logo="images/logo.png"
                // brandName="Movie Box"
                searchPlaceholder="What do you want to watch?"
                onSignIn={handleSignIn}
                onHamburgerClick={handleHamburgerClick}
                onSearch={handleSearch}
              // onSearchQueryChange={(query) => setSearchQuery(query)}
              // additionalItems={<button>Custom Button</button>}
              />

              <MovieHero
                title="John Wick 3: Parabellum"
                imdbRating="8080/100"
                appleRating="97%"
                description="John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere."
              />

            </div>

          </div>

        </section>

        {/* Featured movies section */}
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-12">

          {/* Wrapper */}
          <div className="container mx-auto px-8">

            <div className="grid grid-cols-2 justify-items-stretch ">

              <div className="start">

                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                  Featured movies
                </h4>

              </div>

              <div className="place-self-end">
                <button className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold" onClick={handleSeeMoreClick}>
                  {totalMovies === 12 ? "Show more" : "Show less"}
                </button>
              </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchResults.length > 0
                ? searchResults.map((movie) => (
                  <div key={movie.id} onClick={() => openMovieDetailsInNewTab(movie.id)}>
                    <MovieCard movie={movie} />
                  </div>
                ))
                : featuredMovies.slice(0, totalMovies).map((movie) => (
                  <div key={movie.id} onClick={() => openMovieDetailsInNewTab(movie.id)}>
                    <MovieCard movie={movie} />
                  </div>
                ))}
            </div>


          </div>

        </section>




      </main>




    </div >
  )
}

export default HomePage

