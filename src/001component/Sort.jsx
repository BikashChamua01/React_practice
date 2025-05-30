import React from "react";

const Sort = ({ onSortChange }) => {
  return (
    <form>
      <label htmlFor="sort-options">Sort</label>
      <select
        name="sort-options"
        id="sort-options"
        onChange={(e) => onSortChange(e.target.value)}
        className="ml-2 p-2 rounded border"
      >
        <option value="">-- Select --</option>
        <option value="a-z">A–Z</option>
        <option value="z-a">Z–A</option>
        <option value="rating">Rating (High to Low)</option>
      </select>
    </form>
  );
};

export default Sort;
