import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import { languages } from './languages'

function App() {
    const [data, setData] = useState([]);
    const [currentLanguages, setCurrentLanguages] = useState([]);

    function onClick(language) {
        const tmp = data.slice()
        const codes = languages[language].slice()
        for (let i = 0; i < codes.length; i++) {
            if (!tmp.includes(codes[i])) {
                tmp.push(codes[i])
            }
        }
        setData(tmp);
    }

    return (
        <div className="App">
            <Map data={data}/>
            <ul>
                {Object.keys(languages).map((key, index) => {
                    return(
                        <li key={key}>
                            <button onClick={() => onClick(key)}>
                                {key}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
