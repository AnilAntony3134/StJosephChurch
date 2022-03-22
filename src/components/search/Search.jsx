import React from 'react';
import './search.css';

const Search = ({value, handleSearchKey, clearSearch, formSubmit}) => {
  return (
        <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearchKey} 
                placeholder='Search by category' 
                value={value} />
                {value && <span onClick={clearSearch}>x</span>}
                <button>Go</button>



            </form>
        </div>
    )
}

export default Search