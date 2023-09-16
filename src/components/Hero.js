import React from 'react';

const MovieHero = ({ title, imdbRating, appleRating, description }) => {
  return (
    <div className="flex flex-col gap-x-4 gap-y-4">

      {/* Hero heading */}
      <div className="flex flex-row">
        <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-white">
          {title}
        </h4>
      </div>

      {/* IMDb & Apple */}
      <div className="flex flex-row gap-x-8 text-white">

        {/* IMDb */}
        <div className="flex flex-row gap-x-3">
          <img className="" src="images/IMDb.png" alt="IMDb" />
          <p>{imdbRating}</p>
        </div>

        {/* Apple */}
        <div className="flex flex-row gap-x-3">
          <img className="" src="images/apple.png" alt="Apple" />
          <p>{appleRating}</p>
        </div>

      </div>

      {/* Hero description */}
      <div className="w-full max-w-sm text-white">
        <p>{description}</p>
      </div>

      {/* Hero CTA */}
      <div className="w-full max-w-sm">
        <button className="flex flex-row items-center justify-center gap-x-2 rounded-md bg-rose-700 py-1 px-3">
          <img src="images/play.png" alt="play" />
          <span className="text-white">WATCH TRAILER</span>
        </button>
      </div>

    </div>
  );
};

export default MovieHero;
