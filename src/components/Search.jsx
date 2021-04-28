import React from 'react'
import '../css/Search.css'

const Search = ({ value, onChange }) => {

    function handleChange(event) {
        onChange(event.target.value);
    }
    
    return (
        <input type="text" value={value} onChange={handleChange} placeholder="  Search" />
    )
}

export default Search;