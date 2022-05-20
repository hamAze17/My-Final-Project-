import React, { createContext, useReducer, useEffect } from "react";
import { useState } from "react";
import WatchListReducer from "./WatchListReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

// creating the watchlist context
export const WatchContext = createContext(initialState);
export const WatchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WatchListReducer, initialState);
  const [fav, setFav] = useState([]);

  //setting the watchlist in localstorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  //actions
  const addToWatchList = (movie) => {
    //payload
    dispatch({ type: "ADD-TO-WATCHLIST", movie: movie });
    //console.log(movie);
  };

  return (
    <WatchContext.Provider
      value={{
        watchlist: state.watchlist,
        addToWatchList,
        fav,
        setFav,
      }}
    >
      {children}
    </WatchContext.Provider>
  );
};
