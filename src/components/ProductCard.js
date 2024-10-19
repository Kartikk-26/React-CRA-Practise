import React from 'react'

const ProductCard = ({name,price})=>{
    return(
        <div  style ={styles.card}>
            <h2>{name}</h2>
            <p>Price: {price}</p>
        </div>
    )
}

const styles = {
    card: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      width: '150px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }
  };

export default ProductCard