import { combineReducers, createStore } from "redux";
import playersReducers from "./players/playersReducers";
import tacticReducers from "./tactic/tacticReducers";

const rootReducer = combineReducers({
  players: playersReducers,
  tactic: tacticReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const store = createStore(rootReducer);

export default store;
