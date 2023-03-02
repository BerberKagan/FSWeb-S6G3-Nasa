import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "../src/components/Content";
import "./App.css";

function App() {
    const [info, setInfo] = useState(null);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod", {
                params: {
                    api_key: "DEMO_KEY"
                }
            })
            .then(function (response) {
                console.log(response.data);
                setInfo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
        console.log("sayfam render oldu");
    }, []);
    return (
        <div className="App">
            {info && (
                <Content icerik = {info}/>
            )}
        </div>
    )
}

export default App;
