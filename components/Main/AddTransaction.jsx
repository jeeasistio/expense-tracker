import React, { useState, useContext, useEffect } from 'react';
import {
  makeStyles,
  Paper,
  Typography,
  FormControl,
  TextField,
  OutlinedInput,
  InputAdornment,
  Button
} from '@material-ui'
import { GlobalContext } from '/contexts/GlobalState.jsx';

const IncomeExpenses = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      padding: '20px 20px'
    }
  }));

  const classes = useStyles();

  const { addTransaction, transactions } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const createTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
    e.target.reset();
  }

  useEffect(() => {
    localStorage.setItem('transactionList', JSON.stringify(transactions));
  }, [transactions])

  return (
    <Paper className={classes.root}>
      <Typography>Add new transaction</Typography>
      <form onSubmit={createTransaction}>
        <TextField onChange={(e) => setText(e.target.value)} margin="normal" size="small" helperText="Text" label="Enter Text..." fullWidth multiline variant="outlined" />
        <TextField onChange={(e) => setAmount(e.target.value)} margin="normal" size="small" helperText="Amount ( positive: Income | negative: Expense )" fullWidth type="number" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} variant="outlined" />
        <Button color="primary" fullWidth type="submit" variant="contained">Add transaction</Button>
      </form>
    </Paper>
  )
};

export default IncomeExpenses;