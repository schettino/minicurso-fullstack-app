import * as types from './constants';

const initialState = {
  isLoading: false,
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
    default:
      return state;
  }
}

export default reducer;
