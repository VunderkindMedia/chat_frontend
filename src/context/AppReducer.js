import {
  CHAT_INIT
} from "./types";

export const initialState = {
  socket: null
};

export default function AppReducer(state, action) {
  switch (action.type) {
    case CHAT_INIT:
      return { ...state, socket: action.socket };
    default:
      return state;
  }
}
