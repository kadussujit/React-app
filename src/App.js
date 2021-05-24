import React from "react";
import homepage from './images/grocery.jpg';
import bakery from './images/dairy.jpg';
import fruits from './images/fruits.jpg';
import beverage from './images/beverage.png' ;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function Home() {
  return <div className="headerone"><h2>Home</h2><div>
  
  <div>
      <img src={homepage} alt="Grocery logo"/>
    </div>
  <p className="para">This is homepage. Homepage text comes here. More details will be added soon. </p>
  </div></div>;
}

export default function App() {
  return (
    <Router>
      <div>
     
		
		<div class="topnav">
		  <Link to="/">Home</Link>
		   <Link to="/vegetables">Fruits and Vegetables</Link>
		 <Link to="/bakery">Bakery and Dairy</Link>
     <Link to="/beverage">Beverages</Link>
		 
		</div>

        <Switch>
          <Route path="/vegetables">
            <Vegetables />
          </Route>
          <Route path="/bakery">
            <Bakery />
          </Route>
          <Route path="/beverage">
            <Beverage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
	  
	  

    </Router>
  );
}


function Vegetables() {
  return <div className="headerone"><h2>Fruits and Vegetables</h2><div>
  <div >
      <img src={fruits} alt="Fruits and Vegetables logo" />
    </div>
  <p className="para" >Get fresh fruits and vegetables everyday in the morning. 
  </p>
  </div></div>;
}

function Bakery() {
  
    return <div className="headerone"><h2>Bakery and Dairy</h2><div>
	<div>
      <img src={bakery} alt="Bakery logo"/>
    </div>
  <p className="para">Bakery and dairy products here. Select the product you want to purchase.</p>
  </div></div>;
  
}

function Beverage(){

  return <div className="headerone"><h2>Beverages</h2><div>
<div>
    <img src={beverage} alt="Beverage logo"/>
  </div>
<p className="para">Beverages text here. Select the product you want to purchase.</p>
</div></div>;

}
