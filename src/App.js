import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe,fetchIsAdmin, selectIsAdmin } from "./store/auth";
import HeaderBottom from "./Components/HeaderBottom/HeaderBottom";
import HeaderMiddle from "./Components/HeaderMiddle/HeaderMiddle";
import HearedTop from "./Components/HeaderTop/HeaderTop";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AboutUs from "./Pages/AboutUs/AboutUs.js";
import PayAndDelivery from "./Pages/PayAndDelivery/PayAndDelivery.js";
import ExchangeAndReturn from "./Pages/ExchangeAndReturn/ExchangeAndReturn.js";
import Contacts from "./Pages/Contacts/Contacts.js";
import Cart from "./Pages/Cart/Cart.js";
import AdminOrders from "./Pages/Admin/AdminOrders/AdminOrders.js";
import AdminProducts from "./Pages/Admin/AdminProducts/AdminProducts.js";
import AdminCategories from "./Pages/Admin/AdminCategories/AdminCategories.js";
import AdminUsers from "./Pages/Admin/AdminUsers/AdminUsers.js";
import PageUser from "./Pages/PageUser/PageUser";
import Home from "./Components/Home/Home";
import AddProduct from './Pages/Admin/AddProduct/AddProduct.js'
import FullProduct from "./Components/FullProduct/FullProduct";
import FullAdminOrder from "./Pages/Admin/FullAdminOrder/FullAdminOrder";
import AdminEditCategory from "./Pages/Admin/AdminEditCategory/AdminEditCategory";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const dispatch = useDispatch();

  const isAdmin = useSelector(selectIsAdmin);

  console.log('isAdmin',isAdmin)

  React.useEffect(() => {
    dispatch(fetchAuthMe());
    dispatch(fetchIsAdmin())
  }, []);

  return (
    <div className="App">
      {isAdmin ? (
        <>
          <HearedTop />
          <HeaderMiddle />
          <HeaderBottom />
          <AdminPanel />
          <div className="all-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Path not resolved</h1>} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="pay-and-delivery" element={<PayAndDelivery />} />
            <Route path="exchange-and-return" element={<ExchangeAndReturn />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="admin-orders" element={<AdminOrders />} />
            <Route path="admin-products" element={<AdminProducts />} />
            <Route path="admin-categories" element={<AdminCategories />} />
            <Route path="admin-users" element={<AdminUsers />} />
            <Route path="page-user" element={<PageUser />} />
            <Route path="admin-products/add-product" element={<AddProduct />} />
            <Route path='product/:id' element={<FullProduct/>}/>
            <Route path='product/:id/edit' element={<AddProduct/>}/>
            <Route path='admin-orders/:id' element={<FullAdminOrder/>}/>
            <Route path="admin-categories/:id/edit" element={<AdminEditCategory/>} />
          </Routes>
          </div>
        </>
      ) : (
        <>
          <HearedTop />
          <HeaderMiddle />
          <HeaderBottom />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Path not resolved</h1>} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="pay-and-delivery" element={<PayAndDelivery />} />
            <Route path="exchange-and-return" element={<ExchangeAndReturn />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="page-user" element={<PageUser />} />
            <Route path='product/:id' element={<FullProduct/>}/>
            <Route path='product/:id/edit' element={<AddProduct/>}/>
            <Route path='admin-orders/:id' element={<FullAdminOrder/>}/>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
