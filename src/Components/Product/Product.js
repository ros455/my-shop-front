import React from "react";
import Raiting from "../Rating/Rating";
import AddToCart from "../AddToCart/AddToCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { fetchRemoveProducts } from "../../store/product";
import StarRatings from 'react-star-ratings';
import product from "./product.css";

export default function Product({
  id,
  title,
  description,
  category,
  price,
  language,
  palette,
  year,
  pageCount,
  author,
  publishingHouse,
  imageUrl,
  isFullProduct,
  isEdit,
  el,
  data,
  star,
}) {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      console.log("delete product function", id);
      dispatch(fetchRemoveProducts(id));
    }
  };

  console.log("isFullProduct", isFullProduct);

  console.log('star',star)
  return (
    <>
      {isEdit ? (
        <div className="edit-product-wrapper">
          <div className="edit-title-wrapper">
            <p>{title}</p>
          </div>
          <div className="edit-category-wrapper">
            <p>{category}</p>
          </div>
          <div className="edit-price-wrapper">
            <p>{price}</p>
          </div>
          <div className="edit-button-wrapper">
            <button onClick={onClickRemove}>
              <AiFillDelete className="AiFillDelete" />
            </button>
            <Link to={`/product/${id}/edit`}>
              <p>
                <BsPencilFill className="BsPencilFill" />
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <>
          {isFullProduct ? (
            <>
              <div className="full-product-image-wrapper">
                {imageUrl && <img src={`http://localhost:3333${imageUrl}`} />}
              </div>
              <div className="full-products-title-wrapper">
                <h2 className="full-products-title">{title}</h2>
              </div>
              <p>{description}</p>
              <Raiting data={data}/>
            </>
          ) : (
            <>
              <Link to={`product/${id}`}>
                <div className="product-image-wrapper">
                  {imageUrl && <img src={`http://localhost:3333${imageUrl}`} />}
                </div>
              </Link>
              <Link to={`product/${id}`}>
                <h5>{`${title && title.substring(0, 15)}...`}</h5>
              </Link>

              <div>
              <StarRatings
                    rating={star}
                    starRatedColor="#ffd700"
                    numOfStars={5}
                    name="rating"
                    starSelectingHoverColor="yellow"
                    starDimension="15px"
                  />
              </div>

              <div className="product-price-button-wrapper">
                <p className="product-price">{price} грн</p>
                <AddToCart el={el} />
              </div>
            </>
          )}
          <div className="product-category-wrapper">
            <p>Категорія: {category}</p>
          </div>
          {isFullProduct && (
            <>
              <div className="full-product-price-button-wrapper">
                <div>
                  <AddToCart el={data} />
                </div>
                <p className="product-price">{price} грн</p>
              </div>
              <div className="product-parametr-wrapper">
                <h2>Характеристики:</h2>
              {language && <div className="product-parametr-item-wrapper">
                  <p>Мова:</p>
                  <p>{language}</p>
                </div>}
              {palette &&  <div className="product-parametr-item-wrapper">
                <p>Палітра:</p>
                <p>{palette}</p>
              </div>}
              {year && <div className="product-parametr-item-wrapper">
                  <p>Рік видання:</p>
                  <p>{year}</p>
                </div>}
              {pageCount && <div className="product-parametr-item-wrapper">
                  <p>Кількість сторінок:</p>
                  <p>{pageCount}</p>
                </div>}
              {author && <div className="product-parametr-item-wrapper">
                  <p>Автор:</p>
                  <p>{author}</p>
                </div>}
              {publishingHouse && <div className="product-parametr-item-wrapper">
                  <p>Видавництво:</p>
                  <p>{publishingHouse}</p>
                </div>}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
