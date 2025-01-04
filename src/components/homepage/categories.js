import React from 'react'
import styles from './categories.module.css'
import { Link } from 'react-router-dom'
/* eslint-disable */
export default function categories() {
    return (
        <section className={styles.categories} >
            <a href="http://ecommmtest.great-site.net/product-category/%d9%85%d9%84%d8%a7%d8%a8%d8%b3/" >
                <div className={`${styles.category} ${styles.category1}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName1}`} > ملابس</h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d8%a7%d9%83%d8%b3%d8%b3%d9%88%d8%a7%d8%b1%d8%a7%d8%aa/" >
                <div className={`${styles.category} ${styles.category2}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName2}`} > شنط و محافظ </h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d9%85%d8%b3%d8%aa%d9%84%d8%b2%d9%85%d8%a7%d8%aa-%d8%b9%d9%86%d8%a7%d9%8a%d9%87-%d8%b4%d8%ae%d8%b5%d9%8a%d9%87/" >
                <div className={`${styles.category} ${styles.category3}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName3}`} > مستلزمات عناية شخصية </h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d9%85%d8%b3%d8%aa%d9%84%d8%b2%d9%85%d8%a7%d8%aa-%d8%a7%d9%84%d8%ad%d9%8a%d9%88%d8%a7%d9%86%d8%a7%d8%aa-%d8%a7%d9%84%d8%a7%d9%84%d9%8a%d9%81%d8%a9/" >
                <div className={`${styles.category} ${styles.category4}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName4}`} > مستلزمات الحيوانات الأليفة </h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d9%85%d9%84%d8%a7%d8%a8%d8%b3/" >
                <div className={`${styles.category} ${styles.category5}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName5}`} > الساعات الذكية </h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d9%85%d9%81%d8%b1%d9%88%d8%b4%d8%a7%d8%aa/" >
                <div className={`${styles.category} ${styles.category6}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName6}`} > مفروشات </h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d8%a7%d9%83%d8%b3%d8%b3%d9%88%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%87%d8%a7%d8%aa%d9%81/" >
                <div className={`${styles.category} ${styles.category7}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName7}`} >اكسسوارات موبايل</h1>
                </div>
            </a>
            <a href="http://ecommmtest.great-site.net/product-category/%d8%a7%d9%83%d8%b3%d8%b3%d8%b3%d9%88%d8%a7%d8%b1%d8%a7%d8%aa-%d8%a7%d9%84%d9%83%d9%85%d8%a8%d9%8a%d9%88%d8%aa%d8%b1/" >
                <div className={`${styles.category} ${styles.category8}`}>
                    <h1 className={`${styles.categoryName} ${styles.categoryName8}`} > اكسسوارات الكمبيوتر </h1>
                </div>
            </a>
        </section>
    )
}
