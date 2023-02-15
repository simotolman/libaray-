import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Book from '../components/books/Book'
import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BookPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/books.json')
    .then(resp => resp.json())
    .then(data => {
      const product = data.books.filter(item => (item.id === parseInt(id)) && item)
      if (product.length > 0) {
        setProduct(product[0])
      }
    })
  }, [id])
  return (
    <>
      <Navbar />
      { product && <Book product={product} /> }
      <Footer />
    </>
  )
}

export default BookPage