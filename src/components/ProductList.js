import React from 'react'
import ProductCard from './ProductCard'

const ProductList = () =>{
    const products = [
        {id :1 , name: "Laptop",price:80000},
        {id :2 , name: "Phone",price:50000},
        {id :3 , name: "Tablet",price:70000},
    ]

    return(
        <div style ={StyleSheet.container}>
            {
                products.map(product =>(
                    <ProductCard key ={product.id} name ={product.name} price ={product.price}/>
                ))
            }

        </div>
    )
}

const styles = {
    container: {
      display: 'flex',
      gap: '20px',
      padding: '20px'
    }
  };

export default ProductList