import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function consolelog(){
    console.log(
        "%c Vexio!! ",
        "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgba(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
      );
      console.log(
        "%c Welcome to our Console Panel",
        "font-weight: bold; font-size: 30px; color: white; text-shadow: 3px 3px 0 rgb(217,31,38)"
      );
      console.log(
        "%c Congratulations on Coming Here, This is just the Beginning, We are middle of making some Epic Features 💻",
        "font-weight: bold; font-size: 20px; color: cyan;"
      );
      console.log(
        "%c If you hangout in developer tools and inspect element we are pretty much similar 😉",
        "font-weight: bold; font-size: 20px; color: cyan"
      );
      console.log(
        "%c If you wanna join us go to 🚀 ==> https://join.vexio.xyz ",
        "font-weight: bold; font-size: 20px; color: yellow"
      );
      console.log(
        "%c P.S. If someone told you to copy/paste something here you have an 11/10 chance you're being scammed. Pasting anything in here could give attackers access to your Vexio account also Called Self-XSS  ",
        "font-weight: bold; font-size: 15px; color: red"
      );
    
}
consolelog()