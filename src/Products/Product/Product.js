import React from 'react';
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStyles from './styles'
import {faEye,faHeart,faCartShopping,faStar} from '@fortawesome/free-solid-svg-icons'
import './styles.css'
const Product = ({product,onAddToCart}) => {
  const classes=useStyles();
 
  const CartTin=()=>{
onAddToCart(product.id,1)
  }
  
  return( 
<>
      <div className="imgBx">
        <img src={product.image.url}  />
        <ul className="action">
          {/* <li> <FontAwesomeIcon icon={faHeart} />
          <span>Add to wishlist</span>
          </li> */}
          <li> <FontAwesomeIcon icon={faCartShopping} onClick={CartTin} />
          <span>Add to Cart</span></li>
          
          <li><FontAwesomeIcon icon={faEye} />
          <span>View Details</span></li>
        </ul>
      </div>
   

    <div className="content">
      <div className="productName">
        <h3>{product.name}</h3>
      </div>
      <div className="price_rating">
        <h2>{product.price.formatted_with_symbol}</h2>
     
<div className="rating">
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
<FontAwesomeIcon icon={faStar} />
</div>

    </div>
  </div>
 </>
  
  )};

export default Product;
