import React from "react";

function Image({ src, width }) {
    return ( <
        img src = { src }
        width = { width }
        alt = "Tigger" /
        >
    );
}

export default Image;