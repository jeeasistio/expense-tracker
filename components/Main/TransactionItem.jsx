import React, { useContext } from 'react';
import {
  makeStyles,
  ListItem,
  Typography,
  IconButton,
  Icon
} from '@material-ui';
import { GlobalContext } from '/contexts/GlobalState.jsx';

const TransactionItem = ({ text, amount, id }) => {

  const useStyles = makeStyles(theme => ({
    listItemStyle: {
      display: 'flex'
    },
    textStyle: {
      flex: 1
    },
    amountStyle: {
      color: amount < 0 ? '#f55' : '#090'
    }
  }))

  const classes = useStyles();

  const { deleteTransaction } = useContext(GlobalContext);


  return (
    <ListItem className={classes.listItemStyle}>
        <Typography className={classes.textStyle}>{text}</Typography>
        <Typography variant="subtitle2" className={classes.amountStyle}>{amount}</Typography>
        <IconButton onClick={() => deleteTransaction(id)}><Icon>delete</Icon></IconButton>
      </ListItem>
  )
}

export default TransactionItem;