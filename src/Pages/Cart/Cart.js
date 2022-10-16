import React from "react";
import axios from "../../axios.js";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import TotalCarSum from "../../Components/TotalCarSum/TotalCarSum";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  selectCart,
  incrementCart,
  decrementCart,
  removeCart,
  removeAll,
  totalSum,
} from "../../store/cart";
import {
  getNowa,
  getNowaCity,
  fetchNowa,
  fetchNowaCity,
} from "../../store/nowaPost.js";
import cart from "./cart.css";

export default function Cart() {
  const [city, setCity] = React.useState("");
  const [cityRef, setCityRef] = React.useState(null);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [phone, setPhone] = React.useState("+380");
  const [email, setEmail] = React.useState("");
  const [postNumber, setPostNumber] = React.useState("");
  const [comment, setComment] = React.useState("");
  const order = useSelector(selectCart);
  let totalSum = 0;
  console.log('city',city)
  console.log('cityRef',cityRef)
  console.log('postNumber',postNumber)
  const nowa = useSelector(getNowa);
  const nowaCity = useSelector(getNowaCity);

  React.useEffect(() => {
    dispatch(fetchNowa(city));
  }, [city]);

  React.useEffect(() => {
    console.log("many city");
    dispatch(fetchNowaCity(cityRef));
  }, [cityRef]);

  order.forEach((el) => {
    totalSum += el.price * el.count;
  });

  const dispatch = useDispatch();

  console.log("order", order);

  const remove = (id) => {
    dispatch(removeCart(id));
  };

  const removeAllProductFromCart = () => {
    dispatch(removeAll());
  };

  const increment = (id) => {
    dispatch(incrementCart(id));
  };

  const decrement = (el) => {
    dispatch(decrementCart(el._id));
  };

  const onSubmit = async () => {
    try {
      const fields = {
        firstName,
        lastName,
        fatherName,
        phone,
        email,
        city,
        postNumber,
        comment,
        order,
        totalSum,
      };

      const { data } = await axios.post("/create-order", fields);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("order", order);

  const selectedChange = (e) => {
    setCityRef(e.target.value)
  }

  const selectedChangeCityPostAddress = (e) => {
    console.log('ERROR!!!')
    setPostNumber(e.target.value)
  }

  return (
    <div className="cart-wrapper">
      {order.length != 0 ? (
        <>
          <div className="cart-wrapper-top">
            <Button
              variant="outline-danger"
              className="cart-remove-all"
              onClick={() => removeAllProductFromCart()}
            >
              {" "}
              Видалити всі товари
            </Button>
            <div className="cart-total-sum-wrapper">
              <p>Загальна вартість</p>
              <TotalCarSum />
            </div>
          </div>
          {order.map((el) => (
            <div key={el._id} className="cart-item-wrapper">
              <div className="cart-image-wrapper">
                <img src={`http://localhost:3333${el.imageUrl}`} />
              </div>
              <div className="cart-element-wrapper">
                <div>
                  <h3>{el.title}</h3>
                </div>
                <div>
                  <div>
                    <p>Ціна: {el.price * el.count}</p>
                  </div>
                  <div className="cart-button-wrapper">
                    <Button variant="dark" onClick={() => increment(el._id)}>
                      +
                    </Button>
                    <p>{el.count}</p>
                    <Button variant="dark" onClick={() => decrement(el)}>
                      -
                    </Button>
                    <AiTwotoneDelete
                      className="AiTwotoneDelete"
                      onClick={() => remove(el._id)}
                    >
                    </AiTwotoneDelete>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h3>Відправка виключно новою поштою</h3>
          </div>
          <form className="cart-form-wrapper">
            <div className="cart-form-top">
              <div className="cart-form-middle-item">
                <p>Імя</p>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="cart-form-middle-item">
                <p>Прізвище</p>
                <input
                  type="phone"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="cart-form-middle-item">
                <p>По батькові</p>
                <input
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </div>
            </div>
            <div className="cart-form-middle">
              <div className="cart-form-middle-item">
                <p>Телефон</p>
                <input
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="cart-form-middle-item">
                <p>Ел. пошта</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="cart-form-middle">
              <div className="cart-form-middle-item-city">
                <p>Ваше місто</p>
                <input value={city} onChange={(e) => setCity(e.target.value)} />
                <div className="cart-form-middle-item-select">
        {city &&
          nowa.map((el, index) => (
            <div key={index}>
              <select
                // onChange={selectedChange}
                onClick={selectedChange}
              >
                {el.Addresses.map((item, i) => (
                  <option key={i} value={item.DeliveryCity}>
                    {item.Present}
                  </option>
                ))}
              </select>
            </div>
          ))}
      </div>
              </div>
            </div>
            <div className="cart-form-middle">
            {cityRef && (
              <>
              <div className="cart-form-middle-item">
                <p>Номер відділення</p>
                <div className="cart-form-middle-item-select">
              <select
          onClick={selectedChangeCityPostAddress}>
            {nowaCity &&
              nowaCity.map((el, idx) => (
                <option 
                key={idx}
                value={el.Description}>{el.Description}</option>
              ))}
          </select>
              </div>
              </div>
              </>
        )}
            </div>
            <div className="cart-form-bottom">
              <textarea
                placeholder="Коментар до замовлення..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="outline-primary"
                onClick={onSubmit}
              >
                Оформити замовлення
              </Button>
            </div>
          </form>
        </>
      ) : (
        <h2>В корзині поки що нічого немає</h2>
      )}
    </div>
  );
}
