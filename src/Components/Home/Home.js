import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts, selectProductChange, fetchAllProducts } from '../../store/product';
import { selectProductOnPage, setCurrentPage, selectCurrentPage } from '../../store/productOnPage';
import Pagination from '../Pagination/Pagination.js';
import Product from '../Product/Product';
import home from './home.css'
export default function Home() {

  const currentPage = useSelector(selectCurrentPage)


  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllProducts())
  },[])

  const currentPerPage = useSelector(selectProductOnPage)

  console.log('currentPage',currentPage)

  console.log('currentPerPage',currentPerPage)

  const products = useSelector(selectProductChange)

  console.log('products.length',products.length)


  const lastProductIndex = currentPage * currentPerPage;
  const firstProductIndex = lastProductIndex - currentPerPage;

  let currentCountry = [];

  if( products != null && products.length != 0) {
    currentCountry = products.slice(firstProductIndex, lastProductIndex);
  }

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }


  return (
    <>
      <div className="home-wrapper">
        {currentCountry &&
          currentCountry.map((el) => (
            <div key={el._id} className="home-product-wrapper">
              <Product
                id={el._id}
                title={el.title}
                category={el.category}
                price={el.price}
                imageUrl={el.imageUrl}
                el={el}
                star={el.star}
              />
            </div>
          ))}
      </div>
      {products && (
        <Pagination 
        totalCount={products.length} 
        currentPerPage={currentPerPage}
        paginate={paginate} />
      )}
    </>
  );
}
