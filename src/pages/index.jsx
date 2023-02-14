import { ProductCard } from "../components"
import {data} from "../server/mock"
import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"
export default function Home() {

  const [products, setProducts] = useState([])
  const [fontSize, setFontSize] = useState(14)
  const [totalProducts, setTotalProducts] = useState(0)

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value)
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("data")
   if(localStorageData) {
    const localDataMadeObject = JSON.parse(localStorageData)
    setProducts(localDataMadeObject.products);
   }else{
    setProducts(data.products)
    localStorage.setItem("data", JSON.stringify(data))
   }
  },[])

  useEffect(() => {
    if(products && products.length > 0){
      localStorage.setItem("data", JSON.stringify({products:products}))
    }
    let totalQty = 0;
for (let i = 0; i < products.length; i++) {
    totalQty += Number(products[i].qty, 10)? Number(products[i].qty, 10) : 0;
  }
  setTotalProducts(totalQty)
  },[products])

  return (
    <>
    <main>
    <h1>Edit the title of the fonts</h1>
        <input type="range" min="10" max="30" placeholder="14" onChange={handleFontSizeChange}/>
      <section className={styles.section}>
      {
        products.map((product) => (
          <ProductCard product={product} key={product.id} id={product.id} setProducts={setProducts} products={products} fontSize={fontSize} />  
        )
          
         )
      }
      </section>
      <h2>Total: {totalProducts}</h2>
    </main>
    </>
  )
}
