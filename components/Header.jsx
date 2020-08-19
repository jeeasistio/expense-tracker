import React from 'react';
import {
  makeStyles,
  Typography,
  AppBar
} from '@material-ui';

const Header = () => {
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoStyle: {
      padding: '10px 0px'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <AppBar className={classes.root} position="static">
      <Typography className={classes.logoStyle} component="h1" variant="h5">Expense Tracker</Typography>
    </AppBar>
  )
};

export default Header;