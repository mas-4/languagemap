import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries-sans-antarctica.json";

const Map = ({ data }) => {
    const Active = 'green';
    const Inactive = '#dbdbdb';

    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 100,
            }}
            width={900}
            style={{  position: 'absolute', zIndex: '-1' }}
        >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                            geographies.map(geo => {
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={data.includes(geo.properties['Alpha-2']) ? Active : Inactive}
                                    />
                                );
                            })
                    }
                </Geographies>
        </ComposableMap>
    );
};

export default Map;
