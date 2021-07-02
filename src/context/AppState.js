import React, { useReducer } from "react";
import { AppContext } from "./AppContext";
import AppReducer, { initialState } from "./AppReducer";
import {
  CHAT_INIT,
} from "./types";
import {BASE_URL} from '../config';
import io from "socket.io-client";

export const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const chatInit = async () => {
    const options = {
      credentials:"include"
    };
    try {

      fetch(BASE_URL, options).then((r) => {
        console.log(r);
        dispatch({ type: CHAT_INIT, socket: io(BASE_URL) });
      });

    } catch (e) {
      console.log("Ошибка: " + e);
      throw new Error(e);
    }
  };

  const connect = (fieldsValue) => {
    try {
      state.socket.emit('findUser', fieldsValue)
    } catch (e) {
      console.log("Ошибка: " + e);
      throw new Error(e);
    }
  };


  return (
    <AppContext.Provider
      value={{
        socket: state.socket,
        chatInit,
        connect
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
