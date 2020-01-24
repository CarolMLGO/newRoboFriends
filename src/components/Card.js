import React from 'react';
import styles from './card.module.scss';

const Card = ({ name, email, id }) => {
    return (
        <div className={styles.Card}>
            <img alt= "robots" width="200" height="200" src={`https://robohash.org/${id}?set=set2`} />
            <div>
                <h2> {name} </h2>
                <h3> {email} </h3>
            </div>
        </div>
    )
};

export default Card;