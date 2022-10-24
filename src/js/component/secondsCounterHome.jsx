import React, { useEffect, useState } from "react";

const SecondsCounter = () =>{
    const [seconds, setSeconds] = useState (0)
    const FuncionContador = () =>{
    setTimeout (() => { 
        setSeconds(seconds +1)
    }, 1000);

}

    useEffect(FuncionContador, [seconds])
	return  (
        <div>
            <p> {seconds} </p>
        </div>
    )}

export default SecondsCounter;