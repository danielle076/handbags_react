import React from 'react';
import './App.css';

// Stap 1 Buttons
// Buttons aangemaakt binnen een <div>
function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav className="button">
            <button type="button"
                    onClick={() => console.log("Naar de collectie")}
            >to the collection
            </button>
            <button type="button"
                    onClick={() => console.log("Shop alle tassen")}
            >shop all bags
            </button>
            <button
                disabled={true}
            >pre-orders
            </button>
        </nav>
        </>
    );
}

export default App;