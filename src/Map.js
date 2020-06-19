import React, { useState } from "react";
import { scaleLinear } from "d3-scale";
import { languages } from "./languages";
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

const geoUrl =
    //"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

const colorScale = scaleLinear()
    .domain([0.29, 0.68])
    .range(["#ffedea", "#ff5233"]);

const Map = () => {
    const [data, setData] = useState(languages['English']);

    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 100
            }}
        >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                            geographies.map(geo => {
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={data[geo.properties['Alpha-2']] ? colorScale(data[geo.properties['Alpha-2']]) : "#F5F4F6"}
                                    />
                                );
                            })
                    }
                </Geographies>
        </ComposableMap>
    );
};

export default Map;
