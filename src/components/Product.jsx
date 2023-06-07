
// import React from 'react'
import "./App.css"
const Product = (x) => {
    return (
        <div className='productCard' onClick={() => {
          return alert("Barang " + x.judul2+ " Harga " + x.price + " Merupakan kulitas terbaik")}}>
        <img src={x.gambar} alt="" className='productImage'/>
        <h2 className="productName">{x.judul}</h2>
        <x className="productName">{x.judul2}</x>
        <x className="productPrice">{x.price}</x>
        </div>
      )
    
}

export default Product