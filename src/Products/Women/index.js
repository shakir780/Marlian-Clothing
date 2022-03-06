import React,{useState,useEffect} from 'react'
import {Grid,Container,Typography} from '@material-ui/core';
import useStyles from './styles';
import {commerce} from '../../lib/commerce';
import Product from '../Product/Product';

import '../style.css'

const Women = ({  addProduct,Womencategories,onAddToCart}) => {

  const classes=useStyles();
  return (
  
    <>
     
  
    <div className='theRbody'>
    
      <div className="imagebox">
  <img src="https://cdn.shopify.com/s/files/1/0309/5068/6764/t/5/assets/womensafrican_8XRy.jpg?v=1617368662991" width="100%" height="auto" />
</div>
<div className="textbox-cont">
  <div className="textbox">
    <h1>Women's Marlian Clothing</h1>
     <p>Release Your African Spirit This <br /> Summer With Our Beautiful Range Of African Clothing. 
     </p>
     <br/>
     <h2>Proudly Made in Nigeria!</h2>
  </div>
</div>
  
     
       {Womencategories.map(category =>{
           return(
             <div>
          
           
            <div className="Wcard-body">
         
         
  <div className='Wcard-container'>
            {category.productsData.map((product ,index) => (
              <div  className="Wcard">
                <Product product={product} onAddToCart={onAddToCart} key={index.id}  />
              
              </div>
            ))}
          </div>
          </div>
          
          </div>
          )
        })}
     
     </div>
    </>
  );
};

export default Women