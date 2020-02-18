import React from 'react';
import styles from './scroll.module.scss';

type Props = {
    children ? : JSX.Element
}

const Scroll = (props: Props) => {
    return (
        <div className={styles.Scroll}>
            {props.children}
        </div>
    )
};

export default Scroll;