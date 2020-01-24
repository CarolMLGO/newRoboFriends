import React from 'react';
import styles from './scroll.module.scss';

const Scroll = (props) => {
    return (
        <div className={styles.Scroll}>
            {props.children}
        </div>
    )
};

export default Scroll;