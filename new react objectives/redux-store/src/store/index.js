import {createStore} from 'redux';
import {configureStore} from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

/** if we have one reducer we will declare as simple as below */
// const store = configureStore({
//     reducer: counterReducer
// });

/** if we have multiple reducers we will declare them inside an object of the reducer
 * reducer should receive only one value*/
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;
