import React, { useState } from 'react';
import './App.css';
import Map from './Map';
import { languages } from './languages'

function App() {
    const [data, setData] = useState({});

    function onClick(language) {
        const tmp = Object.assign({}, data)
        const dist = languages[language];
        Object.keys(dist).forEach(key => {
            if (key in tmp) {
                tmp[key] += dist[key];
            } else {
                tmp[key] = dist[key];
            }
        })
        setData(tmp);
    }

    return (
        <div className="App">
            <Map data={data}/>
            <ul>
                {Object.keys(languages).map((key, index) => {
                    return(
                        <li>
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
