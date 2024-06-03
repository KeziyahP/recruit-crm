import React, { useState } from 'react';
import './SearchField.css'

const Search = ({  }) => {
//   const [query, setQuery] = useState('');

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     onSearch(query);
//   };

  return (
    <div>
      <input
        className='searchBar'
        type="text"
        value=''
        placeholder="Search Pipedrive"
      />
    </div>
  );
};

export default Search;