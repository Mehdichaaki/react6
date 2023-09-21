
import React from 'react';

function Filter({ handleFilterChange, filter }) {
  return (
    <div className="filter">
      <input
        type="text"
        name="title"
        placeholder="Search by Title"
        value={filter.title}
        onChange={handleFilterChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Filter by Rating"
        value={filter.rating}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default Filter;
