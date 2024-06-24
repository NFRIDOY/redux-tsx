import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Redux</h1>
            <div className="h-screen flex flex-row-reverse justify-center items-center">
                <button 
                className="btn btn-success text-white"
                >
                    Increment
                </button>
                <div className="mx-10">0</div>
                <button 
                className="btn btn-error text-white"
                >
                  Decrement

                </button>
            </div>
        </>
    );
}

export default App;
