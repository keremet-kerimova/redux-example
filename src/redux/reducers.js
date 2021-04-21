import React, { Component } from 'react';

// const initialState = {
//   number: 0,
// }

// const counterReducers = (state = initialState, action) => {
//   const newState = { ...state } 
//   switch (action.type) {
//       case "increment_by_1":
//           return { ...state, number: state.number + 1 }
//       case "decrement_by_1":
//           return { ...state, number: state.number - 1 }
//       case "increment_by_10":
//           return { ...state, number: state.number + 10 }
//       case "decrement_by_10":
//           return { ...state, number: state.number - 10 }
//       case "multiply_by_2":
//           return { ...state, number: state.number * 2 }
//       case "divide_by_2":
//           return { ...state, number: state.number / 2 }
//           case "random":
//       return { ...state, number: Math.floor(Math.random () * 10000)};

//       case "canoutto":
//         return { ...state, number: state.number = 0 }
//    }
//    }
//     return state;

// export default counterReducers;


const initialState = {
  number: 0,
}
const counterReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "set_number":
      newState.number = action.number;
      return newState;
    case "increment_by_1":
      newState.number++;
      return newState;
    case "increment_by_10":
      newState.number += 10;
      return newState;
    default:
      break;
  }
  return state;
}
export default counterReducer