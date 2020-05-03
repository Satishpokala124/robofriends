import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
            className = 'pa3 ma3 ba b--green bg-lightest-blue shadow-5 br3 grow'
            type = 'Search' 
            placeholder = "Search Robots"
            onChange={searchChange}  
            />
        </div>
        );
};

export default SearchBox; 