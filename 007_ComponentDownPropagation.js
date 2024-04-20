import React from "react";

function ComponentDownPropagation({ title = "title default", show }) {
    // Fragment demo
    return (
        <React.Fragment>
            <h2>Events in props {title}</h2>
            <button onClick={() => show("Hello")}>Click</button>
        </React.Fragment>
    );
}

export default ComponentDownPropagation;