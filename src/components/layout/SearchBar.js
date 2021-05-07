import React from "react";

const SearchBar = () => {
  return (
    <nav className='deep-purple accent-3' style={{ marginBottom: "5em" }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;