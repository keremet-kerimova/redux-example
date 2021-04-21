import React from "react";
import ColorDisplay from "./components/ColorDisplay";
import CounterAdvancedControls from "./components/CounterAdvancedConrols";

import CounterDisplay from "./components/CounterDisplay";
import CounterSimpleControls from "./components/CounterSimpleControls";

function App() {
    return (
        <div className="App">
        <CounterDisplay />
        <CounterSimpleControls />
        <CounterAdvancedControls />
        <ColorDisplay />
   
        </div>
    )
}
export  default App;