import React from "react";

const Filter = ({ onRatingChange }) => {
  return (
    <div>
      <label htmlFor="rating-range">Minimum Rating: </label>
      <input
        id="rating-range"
        type="range"
        min="0"
        max="10"
        step="0.1"
        onChange={(e) => onRatingChange(Number(e.target.value))}
        className="ml-2"
      />
    </div>
  );
};

export default Filter;
