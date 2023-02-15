import { useState } from "react";
import styles from "./Login.module.css";
import loginImage from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const loginHandler = (event) => {
    event.preventDefault();
    const form = document.getElementById("form");
    if (name === "Salma" && pass === "salma123") {
      navigate("/admin");
    } else {
      let inputName = document.getElementById("name");
      let inputPass = document.getElementById("pass");
      inputName.classList.add(styles.error);
      inputPass.classList.add(styles.error);
    }
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <Link to="/">الرجوع</Link>
        <div className={styles.image}>
          <img src={loginImage} alt="" />
        </div>
        <div className={styles.form} dir="rtl">
          <h1>سجل دخولك :</h1>
          <form id="form">
            <div>
              <label htmlFor="name">اسم المستخدم:</label>
              <input
                dir="ltr"
                type="text"
                id="name"
                placeholder="ادخل اسم المستخدم..."
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="pass">كلمة السر:</label>
              <input
                dir="ltr"
                type="password"
                id="pass"
                placeholder="ادخل كلمة السر..."
                required
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
            </div>
            <button type="submit" onClick={loginHandler}>
              دخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
