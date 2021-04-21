import React from "react";
import ColorDisplay from "./components/ColorDisplay";
import CounterAdvancedControls from "./components/CounterAdvancedConrols";
import CounterDisplay from "./components/CounterDisplay";
import CounterSimpleControls from "./components/CounterSimpleControls";
import  ColorSimpleColors from "./components/ColorSimpleColors";
import SliderControls from "./components/Slidercontrols";

 

function App() {
    return (
        <div className="App">
        <CounterDisplay />
        <CounterSimpleControls />
        <CounterAdvancedControls />
        <ColorDisplay />
        <ColorSimpleColors />
        <SliderControls />
   
        </div>
    )
}
export  default App;