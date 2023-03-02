import React from "react";

function Content(props) {

    const { icerik } = props;
    return (
        <div id="content">
            <h1>{icerik.title}</h1>
            <img src={icerik.url} alt={icerik.title} />
        </div>
    )
};

export default Content;