import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer.jsx';

const initialState = {
  transactions: localStorage.getItem('transactionList') ? JSON.parse(localStorage.getItem('transactionList')) : []
};

const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: {
        id
      }
    })
  }
  
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        transaction
      }
    })
  }
  
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      { children }
    </GlobalContext.Provider>  
  )
}

export { GlobalContext, GlobalProvider };