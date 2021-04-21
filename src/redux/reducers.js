import React, { Component } from 'react';

const initialState = {
  number: 0,
}

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
      case "increment_by_1":
          return { ...state, number: state.number + 1 }
      case "decrement_by_1":
          return { ...state, number: state.number - 1 }
      case "increment_by_10":
          return { ...state, number: state.number + 10 }
      case "decrement_by_10":
          return { ...state, number: state.number - 10 }
      case "multiply_by_2":
          return { ...state, number: state.number * 2 }
      case "divide_by_2":
          return { ...state, number: state.number / 2 }
    //   case "random":
    //     return Math.floor(Math.random() * max);

      case "canoutto":
        return { ...state, number: state.number = 0 }
        

  }
  
  return state;
}

export default counterReducers;
