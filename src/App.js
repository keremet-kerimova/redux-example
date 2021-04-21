import React from "react";
import CounterAdvancedControls from "./components/CounterAdvancedConrols";
import CounterComplicatedControls from "./components/CounterComplicatedControls";
import CounterDisplay from "./components/CounterDisplay";
import CounterSimpleControls from "./components/CounterSimpleControls";

function App() {
    return (
        <div className="App">
        <CounterDisplay />
        <CounterSimpleControls />
        <CounterAdvancedControls />
        <CounterComplicatedControls />
        </div>
    )
}
export  default App;