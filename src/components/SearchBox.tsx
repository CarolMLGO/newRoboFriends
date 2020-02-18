import React from 'react';
import styles from './searchbox.module.scss';

interface ISearchBoxProps {
    searchChange(event: React.SyntheticEvent < HTMLInputElement > ): void
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
    return (
        <div>
            <input aria-label="Search robots" type="text" className={styles.search__input} placeholder="Search robots" onChange={searchChange}/>
        </div>
    )
};

export default SearchBox;