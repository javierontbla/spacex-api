import React from 'react'

import './SearchBox.css'

const SearchBox = ({ searchField }) => {
    return (
        <div className='wrapper'>
            <input 
                className='inputSearch' 
                type='search' 
                placeholder=''
                onChange={ searchField }
            />
        </div>
    )
}

export default SearchBox