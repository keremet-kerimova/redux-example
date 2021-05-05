// import React from "react";
// import ColorDisplay from "./components/ColorDisplay";
// import CounterAdvancedControls from "./components/CounterAdvancedConrols";
// import CounterDisplay from "./components/CounterDisplay";
// import CounterSimpleControls from "./components/CounterSimpleControls";
// import  ColorSimpleColors from "./components/ColorSimpleColors";
// import SliderControls from "./components/Slidercontrols";

 

// function App() {
//     return (
//         <div className="App">
//         <CounterDisplay />
//         <CounterSimpleControls />
//         <CounterAdvancedControls />
//         <ColorDisplay />
//         <ColorSimpleColors />
//         <SliderControls />
   
//         </div>
//     )
// }
// export  default App;

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();

  function onRemoveCallback(id) {
    dispatch({ type: "REMOVE", id: id });
  }

  function onAddCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    dispatch({ type: "ADD", text: data.get('new') });
  }

  const results = Object.keys(items).map(id => (
    <li key={id}>
      <span>{items[id]}</span>
      <button onClick={() => onRemoveCallback(id)}>Remove</button>
    </li>
  ));

  return (
    <div className="App">
      <form onSubmit={onAddCallback}>
        <input type="text" name="new" required />
        <button>Add</button>
      </form>
      <ul>
        {results}
      </ul>
    </div>
  );
}

export default App;