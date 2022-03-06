import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import './style.css'
import RoomIcon from '@material-ui/icons/Room';
import PublicIcon from '@material-ui/icons/Public';
import DomainIcon from '@material-ui/icons/Domain';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

import Footer from '../Footer/Footer';



const HomePage = () => {
    const classes = useStyles();
  return( 

    <>
    <div className='container'>
    <div class="title">
    <h1 className='sub-title'>Become a Marlian</h1>
   
  </div>
  <div className="buttons">
  <Link to="/men">  <button  className='btn1'>Shop for Men </button>  </Link>
  <Link to="/women">  <button  className='btn2'>Shop for Women </button>  </Link>


    </div>
  
     
</div>
<div className="story-section">
    <div className="story-header">
        <h1 className='sub-story'>Proudly Black Owned</h1>
        <p>Marlian is a black-owned, ready-to-wear bold <br /> print clothing line offering quality, trendy African inspired <br /> fashion at affordable prices.</p>
        <div class="image-container">
           <img className='image' src="https://images.pexels.com/photos/935985/pexels-photo-935985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

           </div>
           <h1>Be bold, be proud, be you </h1>
           <p>Marlian helps you celebrate the vibrant African culture, <br />
            and feel connected to your roots with every garment.</p>
    </div>
</div>
{/* <main className='main'>
  <article> <DomainIcon className={classes.article}    /> 
  <div className={classes.sub}><h1>100% Black-owned</h1></div>
  <div className='sub-article'>Proudly black-owned and <br /> dedicated to celebrating <br /> African culture</div>  </article>
  <article> <ZoomInIcon  className={classes.article}  /> <div className={classes.sub}><h1>Perfect fit for all sizes</h1></div>
  <div className='sub-article'>Our garments are designed <br /> to make you feel like <br /> royalty, whatever your size</div>  </article>
  <article> <RoomIcon  className={classes.article}    /> <div className={classes.sub}><h1>Designed in the USA</h1></div>
  <div className='sub-article'>Conceived and developed <br /> in Norristown, <br /> PA to the <br /> highest quality</div>  </article> 
  <article> < PublicIcon  className={classes.article}  />  <div className={classes.sub}><h1>Unique designs</h1></div>
  <div className='sub-article'>Every Marlian garment is <br /> designed in-house by our <br /> all female design team</div>  </article>
  
  </main> */}
 
    </>
  
  
  
);
}

export default HomePage;
