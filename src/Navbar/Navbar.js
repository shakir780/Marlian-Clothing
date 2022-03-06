import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import useStyles from './style';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';



const options=[
    <Link to='/'>Home</Link>,
   
    <Link to='/women'>Women</Link> ,
    <Link to='/kids'>Kids</Link>,
    <Link to='/Men'>Men</Link>,
    <Link to='/accessories'>accessories</Link>,
   
    
    ]
    const ITEM_HEIGHT=48;
const Navbar = ({totalItems}) => {
    const classes=useStyles();
    const[anchorEl,setAnchorEl]=React.useState(null);

const [menuEl,setMenuEl]=React.useState(null)
const open=Boolean(menuEl)

const handleClick=(event)=>{
    setMenuEl(event.currentTarget);
}
const handleClose=()=>{
    setMenuEl(null)
}

    const[mobileMoreAnchorEl,setMobileMoreAnchorEl]=React.useState(null);
const[menuIcon,setMenuIcon]=React.useState(false);


    const [value, setValue] = React.useState(0);


    const isMenuOpen=Boolean(anchorEl);
    const isMobileMenuOpen=Boolean(mobileMoreAnchorEl);
    
    const handleProfileMenuOpen=(event)=>{
        setAnchorEl(event.currentTarget)
    }
    const handleMobileMenuClose=()=>{
        setMobileMoreAnchorEl(null);
    }
    const handleMenuClose=()=>{
        setAnchorEl(null);
        handleMobileMenuClose();  
    }
    const handleMobileMenuOpen=(event)=>{
        setMobileMoreAnchorEl(event.currentTarget);
    }
const menuId='primary-search-account-menu';
const renderMenu=(
    <Menu 
    anchorEl={anchorEl}
    anchorOrigin={{vertival:'top',horizontal:'right'}}
    id={menuId}
    keepMounted
    transformOrigin={{vertical:'top',horizontal:'right'}}
    open={isMenuOpen}
    onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
);
const mobileMenuId='primary-search-account-menu-mobile';
const renderMobileMenu=(
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{vertical:'top',horizontal:'right'}}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{vertical:'top',horizontal:'right'}}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    >

        <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
    edge="end"

    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"

    color="inherit">
        
          <AccountCircle />
        
    </IconButton>
    <p>Profile</p>
        </MenuItem>
      
        {/* <IconButton aria-label=" add to wishlist" color='inherit'>
    <Badge badgeContent={2} color="secondary">
    <FavoriteBorderIcon />
        </Badge>
    </IconButton>
    <p>wishlist</p> */}
   

        <MenuItem>
        <IconButton aria-label=" add to basket" color='inherit'>
    <Badge badgeContent={totalItems} color="secondary">
    <ShoppingBasketIcon />
        </Badge>
    </IconButton>
    <p>Shopping basket</p>
    </MenuItem>



    </Menu>
)




return(
<>
<div  >
    <AppBar  className={classes.Bar2}>
    <h1 className={classes.discount}>UP TO 50% OFF CLEARANCE - SHOP NOW | FREE SHIPPING ON $99+ IN US</h1>
    </AppBar>
</div>

    <div className={classes.grow}>
        <AppBar className={classes.Bar} >
<Toolbar>
    <IconButton
    edge="start"
className={classes.MenuButton}
color="inherit"
aria-label='open drawer'
onClick={handleClick}
>

    <MenuIcon />
</IconButton>

<Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
             
            height:'100%',
            width: '50%',
            color:'white',
           
            textDecorationLine:'underline',
           
            backgroundColor:'rgb(235, 232, 232)'
          
          },
        }}
      >
        {options.map((option) => (
          <MenuItem className={classes.menuItem} key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
<Typography className={classes.title} variant="h4" noWrap> Marlians Clothing</Typography>
<div className={classes.search}>
    <div className={classes.searchIcon}>
        <SearchIcon />
    </div>
    <InputBase
    placeholder="SEARCH"
    classes={{
        root:classes.inputRoot,
        input:classes.inputInput,
    }}
    inputProps={{'aria-label' : 'search'}}
    />
</div>
<div className={classes.grow} />
<div className={classes.sectionDesktop}>
    <IconButton
    edge="end"

    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen}
    color="inherit">
        
          <AccountCircle />
        
    </IconButton>
    {/* <IconButton aria-label=" add to wishlist" color='inherit'>
    <Badge badgeContent={2} color="secondary">
    <FavoriteBorderIcon />
        </Badge>
    </IconButton> */}

    <IconButton  component={Link} to="/cart"  aria-label=" add to basket" color='inherit'>
    <Badge badgeContent={totalItems} color="secondary">
    <ShoppingBasketIcon />
        </Badge>
    </IconButton>

</div>
<div className={classes.sectionMobile}>
    <IconButton 
    aria-label="show more"
    aria-controls={mobileMenuId}
    aria-haspopup="true"
    onClick={handleMobileMenuOpen}
    color="inherit"
    >
        <MoreIcon />
    </IconButton>
</div>
</Toolbar>


<div className={classes.nav}>
<BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
   
     
      <BottomNavigationAction component={Link} to="/" label="Home" />
      <BottomNavigationAction component={Link} to="/women" label="WOMEN" />
      <BottomNavigationAction component={Link} to="/men" label="MEN"  />
      <BottomNavigationAction component={Link} to="/kids" label="KIDS"  />
      {/* <BottomNavigationAction component={Link} to="/accessories" label="ACCESSORIES"  /> */}
     
    </BottomNavigation>
    </div>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
     
    </div>
    
    </>
)
}

export default Navbar;
