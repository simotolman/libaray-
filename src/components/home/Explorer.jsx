import { useEffect, useState } from "react";
import styles from "./Explorer.module.css";
import { FaStar, FaStarHalf, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explorer = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = () => {
    return fetch('http://localhost:3000/api/products.json')
      .then(resp => resp.json())
      .then(data => setProducts(data.products))
  }

  const setCategory = (category) => {
    if (category == "books")
      return "كتب"
    if (category == "videos")
      return "فيديوهات"
    if (category == "audios")
      return "صوتيات"
  }

  useEffect(() => {
    fetchProducts()
  }, [products])
  return (
    <section className={styles.explorer}>
      <div className="container">
        <div className={styles.explorerContainer}>
          <h2>اكتشف منتجاتنا</h2>
          <div className={styles.products}>
            { products.map((product, i) => (
              <Link to={`/products/${product.category}/${product.id}`} key={i}>
                <div className={styles.product}>
                  <div className={styles.image}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className={styles.details}>
                    <h3>{product.title}</h3>
                    <span>{setCategory(product.category)}</span>
                    <div className={styles.actions}>
                      <div className={styles.rate}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                      </div>
                      <p>
                        <span>
                          إقرأ المزيد
                          <FaArrowLeft />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )) }
          </div>
          <Link to="/products">إكتشف المزيد</Link>
        </div>
      </div>
    </section>
  );
};

export default Explorer;
