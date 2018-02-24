import * as types from './constants';

const initialState = {
  coin: {
    algorithm: null,
    coinName: null,
    id: null,
    imageUrl: null,
    name: null,
    totalCoinSupply: null,
    rank: null,
    volumeLastDayUSD: null,
    volumeLastDayBRL: null,
    BRL: null,
    USD: null,
    changes: {
      lastHour: null,
      lastDay: null,
      lasWeek: null,
    },
  },

  // meta
  isLoading: true,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_COIN_INFO:
      return {...initialState};
    default:
      return state;
  }
}

export default reducer;
