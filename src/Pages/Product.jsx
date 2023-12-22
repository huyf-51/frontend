import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

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

const Product = () => {
  // get all product
  const { products } = useContext(ShopContext);

  // get product id
  const { productId } = useParams();

  // find product by product id
  const product = products.find((e) => e.id === Number(productId));
  switch (product.id) {
    case 1: product.image = one; break;
    case 2: product.image = two; break;
    case 3: product.image = three; break;
    case 4: product.image = four; break;
    case 5: product.image = five; break;
    case 6: product.image = six; break;
    case 7: product.image = seven; break;
    case 8: product.image = eight; break;
    case 9: product.image = nine; break;
    case 10: product.image = ten; break;
    case 11: product.image = elevent; break;
    case 12: product.image = twelve; break;
    case 13: product.image = thirteen; break;
    case 14: product.image = fourteen; break;
    case 15: product.image = fifteen; break;
    case 16: product.image = sixteen; break;
    case 17: product.image = seventeen; break;
    case 18: product.image = eighteen; break;
    case 19: product.image = nineteen; break;
    case 20: product.image = twenty; break;
  }
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
