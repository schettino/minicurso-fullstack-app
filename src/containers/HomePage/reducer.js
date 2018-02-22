import * as types from './constants';

const initialState = {
  isLoading: false,
  searchTerm: '',
  coinlist: [],
  searchlist: [],
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COINLIST:
      return {...state, isLoading: true};
    case types.LOAD_COINLIST_OK:
      return {...state, coinlist: action.payload.coinlist, isLoading: false};
    case types.LOAD_COINLIST_ERROR:
      return {...state, error: action.error, loading: false};

    case types.FILTER_COINS:
      return {...state, searchTerm: action.payload.searchTerm};
    case types.FILTER_COINS_OK:
      return {...state, searchlist: action.payload.result};
    default:
      return state;
  }
}

export default reducer;
