// import { useState } from "react";
// import { useDispatch } from "react-redux";
// const CounterAdvancedColors = () => {
//   const [number, setNumber] = useState(0);
//   const dispatch = useDispatch();
//   function setCallback() {
//     dispatch({ type: "set_number", number: +number });
//   }
//   return (
//     <div>
//       <h2>Advanced controls</h2>
//       <div>
//         <input type="number" onChange={({ target }) => setNumber(target.value)} />
//         <button onClick={setCallback}>Set</button>
//       </div>
//     </div>
//   );
// // }
// export default CounterAdvancedColors