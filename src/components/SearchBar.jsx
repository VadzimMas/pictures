import { useState } from 'react';
import './SearchBar.scss'

function SearchBar({ onSubmit }) {
    const [search, setSearch] = useState('')

    function handleClick(e) {
        e.preventDefault()
        onSubmit(search)
        setSearch('')
    }

    return (
        <div className='search-bar'>
            <form>
                <input
                    type="search"
                    name=""
                    id=""
                    placeholder="inter search term"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={handleClick}
                >Submit</button>
            </form>
        </div>
    )
}

export default SearchBar