import React,{useState,useEffect} from 'react'
import {Grid,Container,Typography, useTheme} from '@material-ui/core';
import useStyles from './styles';

import {commerce} from '../../lib/commerce';
import Product from '../Product/Product';
import Footer from '../../Footer/Footer';
import '../style.css'




const Accessories = ({  addProduct,Accessoriescategories,onAddToCart}) => {
 
 
  const classes=useStyles();
  const theme = useTheme();
  return (
   <>
     
  
    <div className='theRbody'>
    
      <div className="imagebox">
  <img src="https://cdn.shopify.com/s/files/1/0309/5068/6764/t/5/assets/untitled_HlzU.jpg?v=1617952981822" width="100%" height="auto" />
</div>
<div className="textbox-cont">
  <div className="textbox">
    <h1>Children's Marlian Clothing</h1>
     <p>Let kids be kids. Let them enjoy colour and let them be comfy. You will love our kid's African clothing, nearly as much as they do!
     </p>
     <br/>
     <h2>Proudly Made in Nigeria!</h2>
  </div>
</div>
  
  
     
       {Accessoriescategories.map(category =>{
           return(
             
          

            <div className="Kcard-body">
           
         
  <div className='Kcard-container'>
            {category.productsData.map((product,index) => (
              <div className="Kcard">
                <Product  product={product} addProduct={addProduct} onAddToCart={onAddToCart} key={index.id} />
              </div>
            ))}
          </div>
         
          </div>
       
          
          
          )
        })}
     
     
    </div>
    </>
  );
};

export default Accessories