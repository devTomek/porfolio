import { createStore } from 'redux';
import rootReducer from "./rootReducer";

export default function configureStore(initialState = {}) {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}