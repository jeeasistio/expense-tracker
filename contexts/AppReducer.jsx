const AppReducer = (state, { type, payload }) => {
  switch (type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.id !== payload.id)
      }
      break;

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [payload.transaction, ...state.transactions]
      }
      break;

    default:
      return state;
      break;
  }
}

export default AppReducer;