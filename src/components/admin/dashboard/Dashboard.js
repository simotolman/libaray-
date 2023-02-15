import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.dashboard} dir="rtl">
      <div className={styles.dashboardContainer}>
        <div className={styles.sidebar}>
          <div className={styles.logo}>
            <a href="">مكتبتي</a>
          </div>
          <ul>
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end
              >
                منتجات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="add-product"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                إضافة منتج
              </NavLink>
            </li>
          </ul>
          <div className={styles.actions}>
            <button>إعدادات</button>
            <button className={styles.logout} onClick={() => navigate("/")}>
              تسجيل الخروج
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
