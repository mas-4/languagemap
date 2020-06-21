import React, { useState, useEffect } from 'react';

import './App.css';
import Map from './Map';
import { languages } from './languages'
import CheckboxesGroup from './Checkboxes'

// The default selected statuses
const DFLT = ['de facto', 'majority', 'official'];
// The complete list of status options
const statusOptions = Object.keys(languages).sort();

const tmp = [];
for (let status of statusOptions) {
    tmp.push(...Object.keys(languages[status]))
}
const uniqueTmp = new Set(tmp);
// The complete list of all languages
const languageOptions = [...uniqueTmp].sort()


function constructData(stats, langs) {
    /* This function iterates through the active statuses and the current
     * languages to construct an array of country codes to be rendered green */
    const codes = []
    for (let i = 0; i < stats.length; i++) {
        const tmpLangs = Object.keys(languages[stats[i]]);
        for (let j = 0; j < langs.length; j++) {
            if (tmpLangs.includes(langs[j])){
                codes.push(...languages[stats[i]][langs[j]]);
            }
        }
    }
    return codes
}

function App() {

    const [data, setData] = useState([]);
    const [currentLanguages, setCurrentLanguages] = useState([]);
    const [currentStatuses, setCurrentStatuses] = useState(DFLT);
    useEffect(() => {
        const codes = constructData(currentStatuses, currentLanguages);
        setData(codes);
    },
        [currentLanguages, currentStatuses]
    )

    function changeLanguage(lang) {
        const tmp = currentLanguages.slice();
        if (tmp.includes(lang)) {
            tmp.splice(tmp.indexOf(lang), 1);
        } else {
            tmp.push(lang);
        }
        setCurrentLanguages(tmp);
    }
    function changeStatus(stat) {
        const tmp = currentStatuses.slice();
        if (tmp.includes(stat)) {
            tmp.splice(tmp.indexOf(stat), 1);
        } else {
            tmp.push(stat);
        }
        setCurrentStatuses(tmp);
    }

    return (
        <div className="App">
            <Map data={data}/>
            <CheckboxesGroup
                options={statusOptions}
                current={currentStatuses}
                handleChange={changeStatus}
                title="Language Status"
            />
            <CheckboxesGroup
                options={languageOptions}
                current={currentLanguages}
                handleChange={changeLanguage}
                title="Language"
            />
        </div>
    );
}

export default App;
