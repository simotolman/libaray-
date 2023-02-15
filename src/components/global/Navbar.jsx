import styles from "./Navbar.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar} dir="rtl">
      <div className={styles.navContainer}>
        <div className={styles.navIcons}>
          <p dir="ltr">+212 7 123 456 789</p>
          <div className={styles.actions}>
            <div className={styles.icons}>
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaGooglePlusG />
            </div>
            <Link to="/login">تسجيل الدخول</Link>
          </div>
        </div>
        <div className={styles.navItems}>
          <div className={styles.logo}>
            <a href="/">مكتبتي</a>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li className = {styles.hasDrop}>
                <a href="/products">منتجاتنا</a>
                <ul className={styles.dropdown}>
                  <li>
                    <Link to="/products/books">كتب</Link>
                  </li>
                  <li>
                    <Link to="/products/videos">فيديوهات</Link>
                  </li>
                  <li>
                    <Link to="/products/audios">صوتيات</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.search}>
                <div>
                  <input type="text" placeholder="ابحث..." />
                  <button>ابحث</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
