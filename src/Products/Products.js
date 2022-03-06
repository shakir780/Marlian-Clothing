import React,{useState,useEffect} from 'react'
import {Grid,Container,Typography} from '@material-ui/core';
import Product from '../Products/Product/Product';

import useStyles from './styles';
import {commerce} from '../lib/commerce';



const Men = ({  addProduct,Mencategories,onAddToCart }) => {
    
  const classes=useStyles();
  return (
    <div>
      <>
     
  
     <div className='theRbody'>
     
       <div className="imagebox">
   <img src="https://cdn.shopify.com/s/files/1/0309/5068/6764/t/5/assets/zzz_w8px.png?v=1617713501280 " width="100%" height="auto" />
 </div>
 <div className="textbox-cont">
   <div className="textbox">
     <h1>Men's Marlian Clothing</h1>
      <p>Release Your African Spirit This <br/> Summer With Our Electric Range Of <br /> African Clothing. 
      </p>
      <br/>
      <h2>Proudly Made in Nigeria!</h2>
   </div>
 </div>
       {Mencategories.map(category =>{
           return(
             

            <div className="Mcard-body">
           
           
  <div className='Mcard-container'>
            {category.productsData.map((product,index)  => (
              <div className="Mcard">
                <Product product={product} addProduct={addProduct} onAddToCart={onAddToCart} key={index.id}  />
              </div>
            ))}
          </div>
          </div>
          
          
          )
        })}
     
     </div>
    </>
    </div>
  );
};

export default Men