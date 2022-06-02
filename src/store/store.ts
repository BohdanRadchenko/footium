import { combineReducers, createStore } from "redux";
import playersReducers from "./players/playersReducers";

const rootReducer = combineReducers({
  players: playersReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = createStore(rootReducer);

export default store;
