import React from 'react'
import styles from './SearchBarStyle.module.css'
const SearchBar = ({ updatePageNumber, setSearch }) => {
    return (
        <form className='d-flex justify-content-center gap-4 mb-5'>
            <input onChange={(e) => {
                updatePageNumber(1)
                setSearch(e.target.value)
            }} placeholder="Enter the character's name" className={styles.input} />
        </form>
    )
}

export default SearchBar
