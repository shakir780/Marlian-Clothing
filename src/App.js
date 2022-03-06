import React, {useState,useEffect} from 'react'
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/Homepage';
import Products from './Products/Products';
import Women from './Products/Women';
import Kids from './Products/Kids';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accesories from './Products/Accessories';
import {commerce} from '././lib/commerce';
import Cart from './Cart/Cart';
import Checkout from './CheckoutForm/Checkout/Checkout';


function App() {

  const [Womencategories,setWomenCategories]=useState([]);
  const [Mencategories,setMenCategories]=useState([]);
  const [Kidscategories,setKidsCategories]=useState([]);
  const [Accessoriescategories,setAccesoriesCategories]=useState([]);

  const [cart,setCart]=useState({})
  const [order,setOrder]=useState({})
const [errorMessage,setErrorMessage]=useState('')
  const fetchWomenProducts=async () =>{
   
    const {data:products } = await commerce.products.list({
      limit: 100, category_slug: ['Women']});
    const {data: categoreiesData} = await commerce.categories.list();
const productPerCategory=categoreiesData.reduce((acc,category)=>{
  return[
    ...acc,
    {
      ...category,
      productsData:products.filter((product)=>
      product.categories.find((cat)=>cat.id === category.id)
      ),
    },
  ];

},[])
setWomenCategories(productPerCategory)
  }


  const fetchMenProducts=async () =>{
   
    const {data:products } = await commerce.products.list({
      limit: 100, category_slug: ['Men']});
    const {data: categoreiesData} = await commerce.categories.list();
const productPerCategory=categoreiesData.reduce((acc,category)=>{
  return[
    ...acc,
    {
      ...category,
      productsData:products.filter((product)=>
      product.categories.find((cat)=>cat.id === category.id)
      ),
    },
  ];

},[])
setMenCategories(productPerCategory)
  }

  const fetchKidsProducts=async () =>{
   
    const {data:products } = await commerce.products.list({
      limit: 100, category_slug: ['Kids']});
    const {data: categoreiesData} = await commerce.categories.list();
const productPerCategory=categoreiesData.reduce((acc,category)=>{
  return[
    ...acc,
    {
      ...category,
      productsData:products.filter((product)=>
      product.categories.find((cat)=>cat.id === category.id)
      ),
    },
  ];

},[])
setKidsCategories(productPerCategory)
  }


  const fetchAccessoriesProducts=async () =>{
   
    const {data:products } = await commerce.products.list({
      limit: 100, category_slug: ['accessories']});
    const {data: categoreiesData} = await commerce.categories.list();
const productPerCategory=categoreiesData.reduce((acc,category)=>{
  return[
    ...acc,
    {
      ...category,
      productsData:products.filter((product)=>
      product.categories.find((cat)=>cat.id === category.id)
      ),
    },
  ];

},[])
setAccesoriesCategories(productPerCategory)
  }


  const fetchCart=async()=>{
    const cart=await commerce.cart.retrieve();
    setCart(cart);
  }
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

const refreshCart=async()=>{
  const newCart=await commerce.cart.refresh();
  setCart(newCart);
}

  const handleCaptureCheckout=async(checkoutTokenId,newOrder)=>{
    try{
      const incomingOrder=await commerce.checkout.capture(checkoutTokenId,newOrder)
      setOrder(incomingOrder)
      refreshCart();
    }
    catch(error){
setErrorMessage(error.data.error.message);
    }
  }

  useEffect(()=>{
    fetchWomenProducts();
    fetchMenProducts();
    fetchKidsProducts();
    fetchAccessoriesProducts();
    fetchCart();
  
    },[]);

 
  

  

  
  
  
      
    
  return (
    <div className="App">
      <Router>
   <Navbar totalItems={cart.total_items} />
   <Routes>
     <Route path="/" element={<HomePage />} />

    
     <Route path="/men" element={<Products Mencategories={Mencategories} onAddToCart={handleAddToCart}  />} />
     <Route path="/women" element={<Women Womencategories={Womencategories}  onAddToCart={handleAddToCart} />} />
     <Route path="/kids" element={<Kids Kidscategories={Kidscategories} onAddToCart={handleAddToCart} />} />
     <Route path="/accessories" element={<Accesories Accessoriescategories={Accessoriescategories} onAddToCart={handleAddToCart} />} />
     <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} /> } /> 
     <Route path="/checkout" element={<Checkout cart={cart} 
     order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} /> } /> 
     
     
     
   </Routes>
   
   
  
  
   </Router>
    </div>
  );
}


export default App;
