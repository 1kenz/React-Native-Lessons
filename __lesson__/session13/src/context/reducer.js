function reducer(state, action) {
  switch (action.type) {
    case "orange":
      state.backgroundColor = "orange";
      state.userName = "Mehmet";
      state.number = 34;
      return { ...state };

    case "square":
      state.number = state.number ** 2;
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
