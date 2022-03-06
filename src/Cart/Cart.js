import React from 'react'
import {Container,Typography,Button,Grid} from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import { mergeClasses } from '@material-ui/styles'
import { Link } from 'react-router-dom';
import './styles.css';
import useStyles from './style'
const Cart = ({cart,  onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const classes=useStyles();
    
 
const EmptyCart=()=>(
    <Typography variant="subtitle1">You have no items in your shopping cart,start adding some</Typography>
)
const FilledCart=()=>(
    <>

 
    <div className='main'>
        <div className="basket">

       
        <div className='basket-labels'>
        <ul>
        <li className='item item-heading'>Product</li>
        <li className="price">Price</li>
        <li className='quantity'>Quantity</li>
        
    </ul>
        </div>

    
{cart.line_items.map((item)=>(
<div  >
   
    <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
     </div>
     

))}
 </div>
 <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>Empty cart</Button>

   <aside>

  
    <div className="summary">
               <div className="summary-total-items">{cart.line_items.length} <span className='total-items'>Items in your Bag</span></div>
    
    <div className="summary-subtotal">
        <div className="summary-subtotal">
            <div className="subtotal-title">Subtotal</div>
            <div className="subtotal-value final-value" id='basket-subtoal'>{cart.subtotal.formatted_with_symbol}</div>
        </div>
    </div>
    <div className="summary-delievery">
        <select name="delievery-collection" className='summary-delivery-selection'>
<option value="0" selected="selected">Select Collection or Delievery</option>
<option value="first-class" >Pay when recieve</option>
<option value="second-class" >Pay by Marlian wallet</option>
<option value="signed-for" >Pay by card</option>

        </select>
    </div>
    <div className="summary-total">
        <div className="total-title">Total</div>
        <div className="total-value final-value" id='basket-total'>{cart.subtotal.formatted_with_symbol}</div>
    </div>
    <Link to="/checkout" className="summary-checkout">
        <button   className="checkout-cta">Check out</button>
    
    </Link>
    {/* <div className={classes.cardDetails}>
        <Typography variant="h4">
            Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
         
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="primary">Checkout Button</Button>
        </div>
    </div> */}
    </div>
    </aside>
    </div>
    </>

)
if(!cart.line_items) return 'Loading'

  return (
    <Container>
    <div className={classes.toolbar}></div>
    <Typography className={classes.title} variant="h5"></Typography>
    {   !cart.line_items.length===0 ? <EmptyCart /> : <FilledCart />}

    </Container>
  )
}

export default Cart