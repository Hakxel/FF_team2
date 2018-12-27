import React from 'react';

const Products = (props) => {
  return(
    
    <form className="search-bar ui large fluid left icon input" onSubmit={props.handleSubmit}>
      <i className="search icon"></i>
      <input type="text" placeholder="Search for product..." name="productSearch" value={props.searchValue} onChange={props.handleChange}/>
      <button className="ui blue button">Search</button>
    </form>
  )
}

export default Products
