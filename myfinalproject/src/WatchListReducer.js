//saw this idea online
export default (state, action) => {
  switch (action.type) {
    case "ADD-TO-WATCHLIST":
      //payload
      return {
        ...state,
        watchlist: [...state.watchlist, action.movie],
      };
    default:
      return state;
  }
};
