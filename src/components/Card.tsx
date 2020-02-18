import React from 'react';
import styles from './card.module.scss';
import { IRobot } from "../container/App";

const Card = ({ name, email, id }: IRobot) => {
    return (
        <div className={styles.Card}>
            <img alt= "robots" width="200" height="200" src={`https://robohash.org/${id}?size=300x300`} />
            <div>
                <h2> {name} </h2>
                <h3> {email} </h3>
            </div>
        </div>
    )
};

export default Card;