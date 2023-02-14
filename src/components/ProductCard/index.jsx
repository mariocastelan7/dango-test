import React from 'react'
import styles from "./styles.module.css"
import Image from "next/image"
import {useState, useEffect} from "react"
export const ProductCard = ({product, setProducts, products, fontSize, id}) => {

    const {title, descripcion, price, image, info_url} = product
    const [localProduct, setLocalProduct] = useState(product)

    const handleTitleChange = (e) => {
      setLocalProduct({
        ...localProduct,
         title: e.target.value
        });
      const newProudcts = [...products];
      newProudcts[id] = localProduct;
    setProducts(newProudcts)
    }

    const handleQtyChange = (e) => {
      setLocalProduct({
        ...localProduct,
         qty: e.target.value,
        });
      const newProudcts = [...products];
      newProudcts[id] = {...localProduct, qty: e.target.value,};
      setProducts(newProudcts)
    }

    let divStyle = {
      color: 'blue',
      fontSize: `${fontSize}px`,
    };


  return (
    <article className={styles.container}>
       <Image
        alt="Product image"
        src={image}
        width={300}
        height={300}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
        <input className={styles.title} type="text" value={localProduct.title} onChange={handleTitleChange} style={divStyle} />
        <div className={styles.pricese}>
            <span> ${price} </span>
            <input type="number" value={localProduct.qty} onChange={handleQtyChange} />
        </div>
        <br />
        <p> Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion </p>
        <button className={styles.button}> Add to cart </button>
        <br />
        <br />
        
        <a href={info_url} className={styles.learnMore} >Learn More</a>   
    </article>
  )


}
