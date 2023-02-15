import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Audio from '../components/audios/Audio'
import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AudioPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/audios.json')
    .then(resp => resp.json())
    .then(data => {
      const product = data.audios.filter(item => (item.id === parseInt(id)) && item)
      if (product.length > 0) {
        setProduct(product[0])
      }
    })
  }, [id])
  return (
    <>
      <Navbar />
      { product && <Audio product={product} /> }
      <Footer />
    </>
  )
}

export default AudioPage