import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import one from '../Assets/productImage/1.jpg'
import two from '../Assets/productImage/2.jpg'
import three from '../Assets/productImage/3.jpg'
import four from '../Assets/productImage/4.jpg'
import five from '../Assets/productImage/5.jpg'
import six from '../Assets/productImage/6.jpg'
import seven from '../Assets/productImage/7.jpg'
import eight from '../Assets/productImage/8.webp'
import nine from '../Assets/productImage/9.webp'
import ten from '../Assets/productImage/10.jpg'
import elevent from '../Assets/productImage/11.jpg'
import twelve from '../Assets/productImage/12.jpg'
import thirteen from '../Assets/productImage/13.jpg'
import fourteen from '../Assets/productImage/14.jpg'
import fifteen from '../Assets/productImage/15.jpg'
import sixteen from '../Assets/productImage/16.png'
import seventeen from '../Assets/productImage/17.png'
import eighteen from '../Assets/productImage/18.jpg'
import nineteen from '../Assets/productImage/19.jpg'
import twenty from '../Assets/productImage/20.jpg'


const Popular = (props) => {
  return (
    <div className='popular'>
      <h1>POPULAR</h1>
      <hr />
      <div className="popular-item">
        {/* show all product in popular */}
        {props.data.map((item,i)=>{
            switch(item.id) {
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
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
