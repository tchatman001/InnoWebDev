import React from "react";
import Image from "./Image";

const images = [
    "https://upload.wikimedia.org/wikipedia/en/4/4a/Tigger_disney.png",
    "https://upload.wikimedia.org/wikipedia/en/2/26/Tigger_2000.png",
    "https://upload.wikimedia.org/wikipedia/en/d/d5/Tigger_and_winnie_the_pooh.png",
    "https://upload.wikimedia.org/wikipedia/en/8/89/Tigger_and_roo-pooh.png"
];

function App() {
    return ( 
        <div>
            <h1> Tigger Gallery </h1>

        {
            images.map((url, index) => ( <
                Image key = { index }
                src = { url }
                width = "250" / >
            ))
        } 
        </div>
    );
}

export default App;
