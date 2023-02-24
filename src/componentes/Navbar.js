import React from 'react';
import cronometro from "../img/cronometro.png"

export default function Navbar(){
    return(
        <nav>
            <img src={cronometro} alt="cronometro" />
            <h1>Cronometro</h1>
        </nav>
    )

}
