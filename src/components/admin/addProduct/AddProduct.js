import React from "react";
import styles from "./AddProduct.module.css";

const AddProduct = () => {
  return (
    <section className={styles.addProduct}>
      <div className={styles.addProductContainer}>
        <h1>إضافة منتج</h1>
        <form>
          <div>
            <label htmlFor="name"> اسم المنتج :</label>
            <input
              id="name"
              type="text"
              placeholder="اكتب اسم المنتج..."
              required
            />
          </div>
          <div>
            <label htmlFor="category"> فئة المنتج :</label>
            <select id="category">
              <option value="choose">اختر فئة</option>
              <option value="book">كتاب</option>
              <option value="video">فيديو</option>
              <option value="music">صوتي</option>
            </select>
          </div>
          <div>
            <label htmlFor="description"> وصف المنتج :</label>
            <textarea
              id="description"
              required
              placeholder="اكتب الوصف"
            ></textarea>
          </div>
          <div>
            <label htmlFor="price"> ثمن المنتج :</label>
            <input id="price" type="number" required />
          </div>
          <div>
            <label htmlFor="rating"> تقييم المنتج :</label>
            <select id="category">
              <option value="0">اختر فئة</option>
              <option value="1">نجمة</option>
              <option value="1.5">نجمة ونصف</option>
              <option value="2">نجمتان</option>
              <option value="2.5">نجمتان ونصف</option>
              <option value="3">3 نجمات</option>
              <option value="3.5">3 نجمات ونصف</option>
              <option value="4">4 نجمات</option>
              <option value="4.5">4 نجمات ونصف</option>
              <option value="5">5 نجمات</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">  المنتج :</label>
            <input id="price" type="file" required accept="video/* audio/* " />
          </div>
          <button type="submit">إضافة</button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
