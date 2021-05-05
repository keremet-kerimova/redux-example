// import React, { Component } from 'react';

// // const initialState = {
// //   number: 0,
// // }

// // const counterReducers = (state = initialState, action) => {
// //   const newState = { ...state } 
// //   switch (action.type) {
// //       case "increment_by_1":
// //           return { ...state, number: state.number + 1 }
// //       case "decrement_by_1":
// //           return { ...state, number: state.number - 1 }
// //       case "increment_by_10":
// //           return { ...state, number: state.number + 10 }
// //       case "decrement_by_10":
// //           return { ...state, number: state.number - 10 }
// //       case "multiply_by_2":
// //           return { ...state, number: state.number * 2 }
// //       case "divide_by_2":
// //           return { ...state, number: state.number / 2 }
// //           case "random":
// //       return { ...state, number: Math.floor(Math.random () * 10000)};

// //       case "canoutto":
// //         return { ...state, number: state.number = 0 }
// //    }
// //    }
// //     return state;

// // export default counterReducers;


// import { useDispatch, useSelector } from "react-redux";

// const SliderControls = () => {
//   const dispatch = useDispatch();

//   function changeSliderCallBack({ target}){
//     dispatch({type: "change_slider", color: target.value})
//   }
//   return (
//     <div><h2> Slider controls</h2>
//    <input type="range" onChange={changeSliderCallBack}/><br></br>
//    <input type="range" onChange={changeSliderCallBack} /><br></br>
//    <input type="range" onChange={changeSliderCallBack} />
//     </div>
//   );
// }
// export default SliderControls;