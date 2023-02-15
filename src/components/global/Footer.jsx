import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer} dir="rtl">
        <div className={styles.details}>
          <div className={styles.logo}>
            <a href="/">مكتبتي</a>
          </div>
          <p>
            مكتبتي هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
            ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور
            او فلاير على سبيل المثال ... او نماذج مواقع انترنت ... وعند موافقه
            العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع
            النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية
            بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات
            للتصميم الاساسي.
          </p>
        </div>
        <div className={styles.link}>
          <ul>
            <li>
              <a href="/">الأساسية</a>
            </li>
            <li>
              <a href="/">منتجاتنا</a>
            </li>
            <li>
              <a href="/">التعليمات</a>
            </li>
            <li>
              <a href="/">الدعم</a>
            </li>
          </ul>
        </div>
        <div className={styles.news}>
          <div className={styles.icons}>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGooglePlusG />
          </div>
          <div className={styles.letter}>
            <p>انظم الى النشرة الإخبارية</p>
            <form>
              <input type="email" placeholder="أدخل بريدك الإلكتروني..." />
              <button>إنظم الان</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
