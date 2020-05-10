import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { notes } from "./reducers/notes";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      notes: notes,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
