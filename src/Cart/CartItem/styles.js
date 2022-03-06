import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    
    width: '100%',
      height: '310px',
    overflow: 'hidden',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));