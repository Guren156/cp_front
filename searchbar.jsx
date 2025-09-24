import React from 'react';

const SearchBar = ({ onSearch }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Buscar por título, conteúdo ou categoria..."
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
);

export default SearchBar;