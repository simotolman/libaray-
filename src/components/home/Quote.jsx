import styles from "./Quote.module.css";

const Quote = () => {
  return (
    <section className={styles.quote} dir="rtl">
      <div className={styles.overlay}></div>
      <div className={styles.quoteContainer}>
        <p>“التجارب لا تقرأ في الكتب ولكن الكتب تساعد على الانتفاع بالتجارب”</p>
        <span>عباس محمود العقاد, خلاصة اليومية والشذور</span>
      </div>
    </section>
  );
};

export default Quote;
