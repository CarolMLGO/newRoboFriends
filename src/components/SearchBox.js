import React from 'react';
import styles from './searchbox.module.scss';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input aria-label="Search robots" type="text" className={styles.search__input} placeholder="Search robots" onChange={searchChange}/>
        </div>
    )
};

export default SearchBox;