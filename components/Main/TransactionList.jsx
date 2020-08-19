import React, { useContext } from 'react';
import {
  makeStyles,
  Paper,
  Typography,
  List
} from '@material-ui';
import TransactionItem from './TransactionItem.jsx';

import { GlobalContext } from '/contexts/GlobalState.jsx';

const TransactionList = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '15px 20px'
    }
  }));

  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);

  return (
    <Paper className={classes.root}>
      <Typography>History</Typography>
      <List>
        {transactions.map( ({text, amount, id}) => {
          return (<TransactionItem text={text} amount={amount} id={id} />)
        })}
      </List>
    </Paper>
  )
};

export default TransactionList;