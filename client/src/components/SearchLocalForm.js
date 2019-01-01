import React from 'react'

const SearchLocalForm = (props) => {
  return(
    <div className="ui input" onSubmit={props.handleLocalSearch}>
      <input type="text" placeholder="Enter a city name..." name="local-search" value={props.localSearchValue} onChange={props.handleChange} />
      <button className="ui blue button">Search</button>
    </div>
  )
}

export default SearchLocalForm
