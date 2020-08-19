import React, { useContext } from 'react';
import {
  makeStyles,
  Typography,
  Paper
} from '@material-ui';

import { GlobalContext } from '/contexts/GlobalState.jsx';

const Balance = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      padding: '10px 0px'
    }
  }));

  const classes = useStyles();

  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map(({ amount }) => amount)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  return (
    <Paper className={classes.root}>
      <Typography>Your Balance</Typography>
      <Typography variant="h5">${balance}</Typography>
    </Paper>
  )
}

export default Balance;