import React, { useContext } from 'react';
import {
  makeStyles,
  Paper,
  Typography,
  Divider
} from '@material-ui'

import { GlobalContext } from '/contexts/GlobalState.jsx';

const IncomeExpenses = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignContent: 'center',
      textAlign: 'center'
    },
    incomeStyle: {
      color: '#090'
    },
    expensesStyle: {
      color: '#f55'
    }
  }))

  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(({ amount }) => amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  const expenses = Math.abs(amounts
      .filter(amount => amount < 0)
      .reduce((acc, val) => acc + val, 0))
    .toFixed(2);

  return (
    <Paper className={classes.root}>
      <div>
        <Typography>Income</Typography> 
        <Typography className={classes.incomeStyle} variant="h6">${income}</Typography>
      </div>
      <Divider orientation="vertical" flexItem />
      <div>
        <Typography>Expenses</Typography> 
        <Typography className={classes.expensesStyle} variant="h6">${expenses}</Typography>
      </div>
    </Paper>
  )
};

export default IncomeExpenses;