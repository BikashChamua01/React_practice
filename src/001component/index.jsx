import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Filter from "./Filter";
import Sort from "./Sort";

const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=38d814eb199b0d52d6c828897b9107af";

const Netflix = () => {
  const [movies, setMovies] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null); // 'a-z', 'z-a', 'rating'
  const [ratingThreshold, setRatingThreshold] = useState(0);

  async function getData(URL) {
    try {
      const res = await axios.get(URL);
      setMovies(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData(URL);
  }, []);

  const handleFilterAndSort = useCallback(() => {
    let updated = [...movies];

    // Apply rating filter
    if (ratingThreshold) {
      updated = updated.filter(
        (movie) => movie.vote_average >= ratingThreshold
      );
    }

    // Apply sort
    if (sortOrder === "a-z") {
      updated.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "z-a") {
      updated.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "rating") {
      updated.sort((a, b) => b.vote_average - a.vote_average);
    }

    setFilterProducts(updated);
  }, [movies, sortOrder, ratingThreshold]);

  useEffect(() => {
    handleFilterAndSort();
  }, [handleFilterAndSort]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const handleRatingChange = (threshold) => {
    setRatingThreshold(threshold);
  };

  return (
    <>
      <header className="flex-1 text-5xl text-shadow-2xs text-center pb-6">
        Movies
      </header>

      <div className="w-screen flex align-middle justify-between p-10">
        <div className="filter-section">
          <Filter onRatingChange={handleRatingChange} />
        </div>
        <div className="sort-section">
          <Sort onSortChange={handleSortChange} />
        </div>
      </div>

      <div className="movies flex flex-wrap justify-around">
        {filterProducts.map((movie) => {
          return <Card key={movie.id} movie={movie} url={URL} />;
        })}
      </div>
    </>
  );
};

export default Netflix;
