const initialState = {
  coin: {
    id: null,
    name: null,
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
    default:
      return state;
  }
}

export default reducer;
