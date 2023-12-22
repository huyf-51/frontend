import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";

import one from '../../src/Components/Assets/productImage/1.jpg'
import two from '../../src/Components/Assets/productImage/2.jpg'
import three from '../../src/Components/Assets/productImage/3.jpg'
import four from '../../src/Components/Assets/productImage/4.jpg'
import five from '../../src/Components/Assets/productImage/5.jpg'
import six from '../../src/Components/Assets/productImage/6.jpg'
import seven from '../../src/Components/Assets/productImage/7.jpg'
import eight from '../../src/Components/Assets/productImage/8.webp'
import nine from '../../src/Components/Assets/productImage/9.webp'
import ten from '../../src/Components/Assets/productImage/10.jpg'
import elevent from '../../src/Components/Assets/productImage/11.jpg'
import twelve from '../../src/Components/Assets/productImage/12.jpg'
import thirteen from '../../src/Components/Assets/productImage/13.jpg'
import fourteen from '../../src/Components/Assets/productImage/14.jpg'
import fifteen from '../../src/Components/Assets/productImage/15.jpg'
import sixteen from '../../src/Components/Assets/productImage/16.png'
import seventeen from '../../src/Components/Assets/productImage/17.png'
import eighteen from '../../src/Components/Assets/productImage/18.jpg'
import nineteen from '../../src/Components/Assets/productImage/19.jpg'
import twenty from '../../src/Components/Assets/productImage/20.jpg'

const ShopCategory = (props) => {

  // limit product in every page
  let limit = 4;

  // state variable
  const [allproducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(1)
  const [productCount, setProductCount] = useState()

  // call api to get product for each page by product category and page number
  const fetchInfo = async (page) => {
    await fetch(`${process.env.REACT_APP_API}/${props.category}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products)
        setProductCount(data.productCount)
      })
  }

  // reset page when enter to other category
  useEffect(() => {
    setPage(1)
    fetchInfo(1);
  }, [props.category])

  // call api again when change category and page number
  useEffect(() => {
    fetchInfo(page);
  }, [page, props.category])

  // set page when it change
  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <div className="shopcategory">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing {productCount === 0 ? 0 : (page - 1) * limit + 1} - {productCount / page < limit ? productCount : page * limit}</span> out of {productCount} Products</p>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          switch (item.id) {
            case 1: item.image = one; break;
            case 2: item.image = two; break;
            case 3: item.image = three; break;
            case 4: item.image = four; break;
            case 5: item.image = five; break;
            case 6: item.image = six; break;
            case 7: item.image = seven; break;
            case 8: item.image = eight; break;
            case 9: item.image = nine; break;
            case 10: item.image = ten; break;
            case 11: item.image = elevent; break;
            case 12: item.image = twelve; break;
            case 13: item.image = thirteen; break;
            case 14: item.image = fourteen; break;
            case 15: item.image = fifteen; break;
            case 16: item.image = sixteen; break;
            case 17: item.image = seventeen; break;
            case 18: item.image = eighteen; break;
            case 19: item.image = nineteen; break;
            case 20: item.image = twenty; break;
          }
          return <Item id={item.id} key={i} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
      <div className="shopcategory-pagination">
        <button className="pagination-btn" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Previous</button>
        <button className="pagination-btn" onClick={() => handlePageChange(page + 1)} disabled={productCount / page <= limit}>Next</button>
      </div>
    </div>
  );
};

export default ShopCategory;
