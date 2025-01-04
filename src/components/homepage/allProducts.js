import React from 'react'
import background from '../../assets/images/background-shopping-bags.png'
import icon from '../../assets/icons/shopping-bag.png'
import styles from './allProducts.module.css'
import { Link } from 'react-router-dom'
/* eslint-disable */

export default function allProducts() {
    return (
        <div className={styles.allProducts} >
            <img src={background} className={styles.background} />
            <a href="http://ecommmtest.great-site.net/shop-2/" className={styles.cta} ><img src={icon}  className={styles.icon}  /> <span className={styles.linkText} >عرض كل المنتجات</span> </a>
        </div>
    )
}
