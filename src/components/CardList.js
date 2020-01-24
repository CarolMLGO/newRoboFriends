import React from 'react';
import Card from "./Card";
import styles from "./cardlist.module.scss";

const CardList = ({ robots }) => {
    return (
        <div className={styles.CardList}>
        {
            robots.map(cur => {
                return <Card key={cur.id} name={cur.name} email={cur.email} id ={cur.id}/>
            })
            
        }
        </div>
    )
};

export default CardList;