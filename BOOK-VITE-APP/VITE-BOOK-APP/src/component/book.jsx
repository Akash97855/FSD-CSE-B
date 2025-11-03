import React from 'react'
import '../App.css'
const Book = () => {
  return (
    <div className="card">
      <img src={book.image} width="200" height="200"/>
      <h3>Title: {Book.title}</h3>
      <h4>Price: {book.price}/-</h4>
      <button>Add To Cart</button>
    </div>
  )
}

export default Book
