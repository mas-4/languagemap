import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import { languages } from './languages'

function constructData(currentStatuses, currentLanguages) {
    /* This function iterates throught he active statuses and the current
     * languages to construct an array of country codes to be rendered green */
    const codes = []
    for (let s of currentStatuses) {
        for (let l of currentLanguages) {
            if (l in languages[s]) {
                codes.push(...languages[s][l])
            }
        }
    }
    return codes
}

function App() {
    const DFLT = ['de facto', 'majority', 'official']

    const [data, setData] = useState([]);
    const [currentLanguages, setCurrentLanguages] = useState([]);
    const [currentStatuses, setCurrentStatuses] = useState(DFLT);

    function clickLanguage(language) {
        const tmp = currentLanguages.slice();
    }

    return (
        <div className="App">
            <Map data={data}/>
            <ul>
                {Object.keys(languages).map((key, index) => {
                    /* statuses */
                    return(
                        <li key={key}>
                            <button onClick={() => clickLanguage(key)}>
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
