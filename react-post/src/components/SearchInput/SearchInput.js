import React from 'react';

import './SearchInput.css';

const SearchInput = ({ handleSearch }) => {
    return(
        <div className="search-field">
            <input type="text" onChange={handleSearch} placeholder="Search..." />
        </div>
    )
};

export default SearchInput;
