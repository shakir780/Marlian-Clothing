import {alpha, makeStyles } from "@material-ui/core";
const useStyles=makeStyles((theme)=>({

    Bar:{
        backgroundColor:'white',
        marginTop:theme.spacing(3.5),
        height:'120px',
      
    },
    Bar2:{
        backgroundColor:'#ada996',
        marginTop:theme.spacing(0),
        height:'50px',
    },
    BarText:{
textAlign:'center',
padding:'0.2rem',
    },
    discount:{
      textAlign:'center',
      paddingTop:'0.2rem',
      paddingBottom:'0.2rem',
   
    },
   
    grow:{
        flexGrow:1,
        
    },
   

    MenuButton:{
        marginRight:theme.spacing(2),
        color:"black",
        [theme.breakpoints.up('md')]:{
            display:'none',
        },
    },
    title:{
        display:'none',
        color:"black",
        [theme.breakpoints.up('sm')]:{
            display:'block',
        },
    },
    
        search: {
            position: 'relative',
            borderRadius: '20px',
            backgroundColor: alpha(theme.palette.common.black, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.black, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '450px',
            height:'40px',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(15),
            
            },
          },
          searchIcon: {
              color:'black',
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          inputRoot: {
    color: 'inherit',
  },
  inputInput: {
      fontSize:"20px",
      color:'black',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch',
    },
  },
  sectionDesktop:{
    marginRight:theme.spacing(5),
      display:'none',
      color:'black',
      [theme.breakpoints.up('md')]:{
          display:'flex',
     
      },
  },
  nav:{
    width: '100%',
  
    [theme.breakpoints.down('sm')]:{
     display:'none',
 },
  },
  
    menuItem:{
        color:'orange',
    
  },
  sectionMobile:{
      display:'flex',
      color:'black',
      [theme.breakpoints.up('md')]:{
          display:'none',
      },
  },
        }
    

))

export default useStyles;