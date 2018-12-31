import React from 'react';

const SearchForm = (props) => {
  return(
    
    <form className="search-bar ui fluid left icon input" onSubmit={props.handleSubmit}>
      <i className="search icon"></i>
      <input type="text" placeholder="Search by keywords..." name="productSearch" value={props.searchValue} onChange={props.handleChange}/>
      <button className="ui blue button">Search</button>
    </form>
  )
}

export default SearchForm
