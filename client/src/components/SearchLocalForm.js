import React from 'react'

const SearchLocalForm = (props) => {
  return(
    <form className="ui input" onSubmit={props.onSubmit}>
      <input type="text" placeholder="Enter a city name..." name="local_search" value={props.localSearchValue} onChange={props.handleChange} />
      <button className="ui blue button">Search</button>
    </form>
  )
}

export default SearchLocalForm
