import React from "react";
import Header from "./Components/Header";
import Typingbox from "./Components/Typingbox";
import Footer from "./Components/Footer";
import "../src/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () =>{
    return(
        <div className="App">
            <Header/>
            <Typingbox/>
            <Footer/>

        </div>

    );
};

export default App;