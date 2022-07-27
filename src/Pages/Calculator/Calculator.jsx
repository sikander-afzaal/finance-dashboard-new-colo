import React, { useState } from "react";
import "./Calculator.css";
// Using an ES6 transpiler like Babel
import Slider from "react-rangeslider";

// To include the default styles
import "react-rangeslider/lib/index.css";
import AnimatedPage from "../../Components/AnimatedPage";
function Calculator() {
  const [value, setValue] = useState(1);
  const [amount, setAmount] = useState(0);
  const [apy, setApy] = useState(383025.8);
  const [purchase, setPurchase] = useState(206.53);
  const [future, setFuture] = useState(206.53);
  const [initial, setInitial] = useState(0);
  const [currentWealth, setCurrentWealth] = useState(0);
  const [estimate, setEstimate] = useState(0);
  const [potential, setPotential] = useState(0);

  const handleChange = (value) => {
    setValue(value);
  };
  const inputHandler = (e) => {
    const set = e.target.dataset.val;
    switch (set) {
      case "amount":
        setAmount(e.target.value);
        break;
      case "apy":
        setApy(e.target.value);
        break;
      case "purchase":
        setPurchase(e.target.value);
        break;
      case "future":
        setFuture(e.target.value);
        break;

      default:
        break;
    }
    console.log();
  };
  return (
    <AnimatedPage>
      <div className="calculator dashboard">
        <div className="top-calc">
          <h1>Calculator</h1>
          <p>Estimate your returns</p>
        </div>
        <div className="row-col calc-col">
          <div className="col">
            <h1>$OP Price</h1>
            <p>$206.43</p>
          </div>
          <div className="col">
            <h1>Current APY</h1>
            <p>916,474%</p>
          </div>
          <div className="col">
            <h1>Your $OP Balance</h1>
            <p>0 $OP</p>
          </div>
        </div>
        <div className="input-grid">
          <div className="input-div">
            <h2>$OP Amount</h2>
            <div className="input">
              <input
                data-val={"amount"}
                onChange={inputHandler}
                value={amount}
                type="number"
              />
              <h1>MAX</h1>
            </div>
          </div>
          <div className="input-div">
            <h2>APY (%)</h2>
            <div className="input">
              <input
                onChange={inputHandler}
                data-val={"apy"}
                value={apy}
                type="number"
              />
              <h1>CURRENT</h1>
            </div>
          </div>
          <div className="input-div">
            <h2>$OP price at purchase ($)</h2>
            <div className="input">
              <input
                onChange={inputHandler}
                data-val={"purchase"}
                value={purchase}
                type="number"
              />
              <h1>CURRENT</h1>
            </div>
          </div>
          <div className="input-div">
            <h2>Future $OP market price ($)</h2>
            <div className="input">
              <input
                onChange={inputHandler}
                data-val={"future"}
                value={future}
                type="number"
              />
              <h1>CURRENT</h1>
            </div>
          </div>
        </div>
        <div className="slider">
          <h1>{value}</h1>
          <Slider min={1} max={365} value={value} onChange={handleChange} />
        </div>
        <div className="estimates">
          <div className="row-estimate">
            <p>Your initial investment</p>
            <p>${initial}</p>
          </div>
          <div className="row-estimate">
            <p>Current wealth</p>
            <p>${currentWealth}</p>
          </div>
          <div className="row-estimate">
            <p>$OP rewards estimation</p>
            <p>{estimate} $OP</p>
          </div>
          <div className="row-estimate">
            <p>Potential return</p>
            <p>${potential}</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Calculator;
