function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      state.counter = state.counter + 1;
      return { ...state };

    case "DECREASE_COUNTER":
      state.counter = state.counter - 1;
      return { ...state };
    // return {...state, state.counter -1}  // tek satırda işlem

    default:
      return state;
  }
}

export { reducer };
