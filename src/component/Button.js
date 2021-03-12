import React from "react";

export default function Button() {
    return (
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
    );
}