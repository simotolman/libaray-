import styles from "./Video.module.css";
import { FaStar } from "react-icons/fa";
const DetailsProduct = ({ product }) => {
  return (
    <section className={styles.details} dir="rtl">
      <div className={styles.detailsContainer}>
        <h1>جميع المعلومات عن المنتج </h1>
        <div className={styles.details}>
          <div className={styles.image}>
            <video controls>
              <source src={product.url} type="video/mp4" />
            </video>
          </div>
          <div className={styles.content}>
            <h3>{product.title}</h3>
            <p>
            {product.description}
            </p>
            <div className={styles.rating}>
              <p>تقييم :</p>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
            <div className="btns">
              <a href={product.url} download>تحميل</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsProduct;
