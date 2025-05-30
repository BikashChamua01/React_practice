import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Filter from "./Filter";
import Sort from "./Sort";
const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=38d814eb199b0d52d6c828897b9107af";

// rating filter //
export const rangeFilter = (event, filterProducts, setFilterProducts) => {
  let val = Number(event.target.value);
  console.log(filterProducts);
  let newFilterProducts;
  newFilterProducts = filterProducts.filter((product) => {
    return Number(product.vote_average) > val;
  });

  setFilterProducts(newFilterProducts);
};

const Netflix = () => {
  const [movies, setMovies] = useState([]);
  const [filterProducts, setFilterProducts] = useState(movies);

  async function getData(URL) {
    try {
      const res = await axios.get(URL);
      setMovies(res.data.results);
      setFilterProducts(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData(URL);
  }, []);

  return (
    <>
      <header className="flex-1 text-5xl text-shadow-2xs text-center pb-6">
        Movies
      </header>
      <div className="w-screen flex align-middle justify-between p-10">
        <div className="filter-section">
          <Filter
            filterProducts={movies}
            setFilterProducts={setFilterProducts}
          />
        </div>
        <div className="sort-section">
          <Sort
            filteredMovies={filterProducts}
            setFilteredMovies={setFilterProducts}
          />
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
