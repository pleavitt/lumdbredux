import React, {useState} from 'react'
import "./Search.scss"
const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="search-wank">
      <input
        type="text"
        value={search}
        className="input is-rounded search-bar"
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
