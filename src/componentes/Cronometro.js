import React, { useEffect, useState } from "react";

const Cronometro = () => {
    const [tempo, setTempo] = useState(0);
    const [rodando, setRodando] = useState(false);
    useEffect(() => {
      let interval;
      if (rodando) {
        interval = setInterval(() => {
          setTempo((prevTempo) => prevTempo + 10);
        }, 10);
      } else if (!rodando) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [rodando]);
    return (
      <div className="cronometro">
        <div className="container">
          <span>{("0" + Math.floor((tempo / 60000) % 60)).slice(-2)} : </span>
          <span>{("0" + Math.floor((tempo / 1000) % 60)).slice(-2)} : </span>
          <span>{("0" + ((tempo / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="btn">
            <div>
              <button className="btns" onClick={() => setRodando(true)}>Iniciar</button>
              <button className="btns" onClick={() => setRodando(false)}>Parar</button>
              <button className="btns" onClick={() => setTempo(0)}>Reset</button>
            </div>
        </div>
      </div>
    );
  };
export default Cronometro;