import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Video from '../components/videos/Video'
import { useParams } from 'react-router-dom'
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const VideoPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/videos.json')
    .then(resp => resp.json())
    .then(data => {
      const product = data.videos.filter(item => (item.id === parseInt(id)) && item)
      if (product.length > 0) {
        setProduct(product[0])
      }
    })
  }, [id])
  return (
    <>
      <Navbar />
      { product && <Video product={product} /> }
      <Footer />
    </>
  )
}

export default VideoPage