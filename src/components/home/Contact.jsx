import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1>تواصل معنا</h1>
        <form dir="rtl">
          <div className={styles.item}>
            <label htmlFor="name">الإسم الكامل :</label>
            <input type="text" placeholder="ادخل الاسم..." id="name" required />
          </div>
          <div className={styles.item}>
            <label htmlFor="email">البريد الإلكتروني :</label>
            <input
              type="email"
              placeholder="ادخل البريد الاكتروني..."
              id="email"
              required
            />
          </div>
          <div className={styles.item}>
            <label htmlFor="message">الرسالة:</label>
            <textarea id="message" placeholder="اكتب رسالتك..."></textarea>
          </div>
          <button>إرسال</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
