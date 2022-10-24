// Metodo 1
// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// // include your styles into the webpack bundle
// import "../styles/index.css";

// //import your own components
// import Home from "./component/home.jsx";

// import SecondsCounter from "./component/secondsCounter.jsx"

// let contador = 0;
// let interval = setInterval(() =>{
//     contador ++;
//     console.log(contador)
//     ReactDOM.render(<SecondsCounter contador={contador}/>, document.querySelector("#app"));

// }, 1000)

// //render your react application
// // ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));

//Metodo 2

// Metodo 1
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


// render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));