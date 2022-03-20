import React from "react";
import NavBar from './components/NavBar';
import product from './products';
import Cards from "./components/cards";
import Footer from "./components/Footer";



function App() {
  function callCards(product){
      return <Cards key={product.id} id={product.id} img={product.img} name={product.name} rate={product.rate}/>;
  } 
  return (
    <div>
      <NavBar />
      <div className="row" style={{marginLeft: "50px"}}>
        {product.map(callCards)}
        {product.map(callCards)}
        {product.map(callCards)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
