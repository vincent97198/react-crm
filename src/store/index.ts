import { createStore, combineReducers, applyMiddleware,  } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { chatReducer, systemReducer } from "./reducers";
import { customerReducer } from "../reducers/customer";
import { authReducer } from "../reducers/auth";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  customer: customerReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [ thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}