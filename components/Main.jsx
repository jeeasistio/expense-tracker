import React from 'react';
import Balance from './Main/Balance.jsx';
import IncomeExpenses from './Main/IncomeExpenses.jsx';
import TransactionList from './Main/TransactionList.jsx';
import AddTransaction from './Main/AddTransaction.jsx';
import {
  makeStyles,
  Grid
} from '@material-ui';

const Main = () => {
  
  const useStyles = makeStyles(theme => ({
    root: {
      padding: '20px 10px',
      margin: 0,
      width: '100%'
    }
  }))
  
  const classes = useStyles();
  
  return (
    <Grid className={classes.root} spacing="2" justify="center" alignItems="center" container component="main">
      <Grid item sm="7" xs="12" component="section"><Balance /></Grid>
      <Grid item sm="7" xs="12" component="section"><IncomeExpenses /></Grid>
      <Grid item sm="7" xs="12" component="section"><AddTransaction /></Grid>
      <Grid item sm="7" xs="12" component="section"><TransactionList /></Grid>
    </Grid>
  )
}

export default Main;