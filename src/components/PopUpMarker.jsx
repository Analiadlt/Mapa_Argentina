import React from "react";

export default function PopUpMarker({data}) {
  return( <div>
    <h2>{data.capital}</h2>
    <p>Provincia: {data.provincia}</p>
    <p>Habitantes: {data.poblacion}</p>
    </div>);
}
