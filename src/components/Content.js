import React from "react";
import styled from 'styled-components'

const DivContent = styled.h1`
color: #7b3030;
text-decoration: underline;
font-family: 'Merriweather', serif;
font-size: 200%;
`

function Content(props) {

    const { icerik } = props;
    return (
        <div>
            <DivContent>
                {icerik.title}
            </DivContent>
            <img src={icerik.url} alt={icerik.title} />
        </div>
    )
};

export default Content;