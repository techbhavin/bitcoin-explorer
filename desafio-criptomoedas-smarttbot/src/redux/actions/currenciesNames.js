import fetchEndpoint from '../../services/fecthEndPoint';

export const REQUEST_CURRENCIES_API = 'REQUEST_API';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_Currencies_SUCCESS';
export const REQUEST_CURRENCIES_FAILURE = 'REQUEST_Currencies_FAILURE';

export const requestCurrenciesApi = () => ({
  type: REQUEST_CURRENCIES_API,
});

export const requestCurrenciesSuccess = (currenciesNames) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  currenciesNames,
});

const requestCurrenciesFailure = (error) => ({
  type: REQUEST_CURRENCIES_FAILURE,
  error,
});

export const getCurrenciesNames = (endpoint) => {
  return (dispatch) => {
    dispatch(requestCurrenciesApi());
    return fetchEndpoint(endpoint).then(
      (currenciesNamesandValues) =>
        dispatch(
          requestCurrenciesSuccess(Object.keys(currenciesNamesandValues))
        ),
      (error) => dispatch(requestCurrenciesFailure(error))
    );
  };
};
