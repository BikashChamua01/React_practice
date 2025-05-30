import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="group m-2 p-3 w-40 h-50 md:h-auto md:w-60 lg:w-72 flex flex-col items-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out rounded-2xl cursor-pointer overflow-hidden">
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1 will-change-transform h-4/5"
      />

      <div className="mt-3 text-center opacity-60 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center ">
        <h3 className="text-gray-800 md:text-lg font-semibold">
          {movie.title}
        </h3>
        <div className="flex flex-wrap align-middle justify-items-end text-gray-800">
          <div className="text-sm md:text-lg">{`Language: ${movie?.original_language}`}</div>
          <div className="text-sm md:text-lg">{`Rating: ${movie?.vote_average}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
