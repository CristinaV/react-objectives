import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

/** using redux toolkit */
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

/** Old way using just redux*/
// const counterReducer = (state = initialCounterState, action) => {
//   if(action.type === 'increment') {
//       return {
//           counter: state.counter + 1,
//           showCounter: state.showCounter
//       }
//   }
//   if(action.type === 'decrement') {
//       return {
//           counter: state.counter - 1,
//           showCounter: state.showCounter
//       }
//   }
//
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//
//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//
//   return state;
// };
//
// const store = createStore(counterReducer);
// export default counterReducer;
