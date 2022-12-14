import coinApi from '../../service/coinApi';

export const ADD_USER = 'ADD_USER';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDIT_EXPENSE_ID = 'EDIT_EXPENSE_ID';

export const addingUsers = (emails) => (
  {
    type: 'ADD_USER',
    emails,
  }
);

export const saveCurrencies = (payload) => (
  { type: 'SAVE_CURRENCIES',
    payload,
  }
);

export const loading = () => ({
  type: 'LOADING',
  loading: true,

});

export const saveExpenses = (data) => ({
  type: 'SAVE_EXPENSES',
  data,
});

export const deleteExpenses = (delet) => ({
  type: 'DELETE_EXPENSE',
  delet,
});

export const editExpenses = (edit) => ({
  type: 'EDIT_EXPENSE',
  edit,
});

export const editExpensesId = (ids) => ({
  type: 'EDIT_EXPENSE_ID',
  ids,
});

export function fetchCurrencieThunk() {
  return (dispatch) => { // thunk declarado
    dispatch(loading());
    return fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const keys = Object.keys(data);
        dispatch(saveCurrencies(keys.filter(
          (element) => element !== 'USDT',
        ))); // ok
      });
  };
}

/* dispatch(console.log(saveCurrencies(keys.filter(
  (element) => element !== 'USDT',
)))); */

// chama a api normal

export const saveExpenseError = (error) => ({ type: 'SAVE_EXPENSE_ERROR', error });

export const saveExpenseThunk = (walletForm) => async (dispatch) => {
  try {
    const response = await coinApi();
    const exchangeRates = response;
    const payload = { ...walletForm, exchangeRates };
    dispatch(saveExpenses(payload));
  } catch (error) {
    dispatch(saveExpenseError(error));
  }
};
