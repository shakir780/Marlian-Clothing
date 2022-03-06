import React from 'react'
import {Typography,Button,Card,CardActions,CardContent,CardMedia} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useStyles from './styles'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import '../styles.css'
const CartItem = ({item,onUpdateCartQty,onRemoveFromCart}) => {
    const classes=useStyles();
  return (
    <div className="basket-product">
        
<div className='item'>
    <div className="product-image">
        <img src={item.image.url} alt="" className='product-frame' />
    </div>
    <div className="product-details">
        <h4><string><span className='item-quantity'>{item.quantity}</span>*</string> {item.name}</h4>
    </div>
    </div>
    <div className="price">{item.line_total.formatted_with_symbol}</div>
    <div className="quantity">
        
    </div>
            {/* <CardContent className={classes.cardContent}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5" color="secondary"></Typography>
      </CardContent> */}
      

<CardActions className={classes.cardActions}>
    <div className={classes.buttons}>
        <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity -1)  }>-</Button>
        <Typography>{item.quantity}</Typography>
        <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
    </div>
    <Button variant='contained' type="button" color="secondary"onClick={()=> onRemoveFromCart(item.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
</CardActions>

       

        
        </div>
  )
}

export default CartItem