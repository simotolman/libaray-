import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>كتب، فيديوهات، صوتيات</h1>
          <p>
          كتب رائعة والكتب الأشهر والكتب المميزة ومن أروع الكتب..المكتبة الإلكترونيّة لتحميل و قراءة الكتب المصوّرة بنوعية PDF و تعمل على الهواتف الذكية والاجهزة الكفيّة أونلاين..
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
