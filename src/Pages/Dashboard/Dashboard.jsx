import React from "react";
import AnimatedPage from "../../Components/AnimatedPage";
import "./Dashboard.css";
function Dashboard() {
  return (
    <AnimatedPage>
      <div className="dashboard">
        <div className="top-grid-dash">
          <div className="col">
            <h1>$OP Price</h1>
            <p>$206.20</p>
          </div>
          <div className="col">
            <h1>Market Cap</h1>
            <p>$185,602,015</p>
          </div>
          <div className="col">
            <h1>Circulating Supply</h1>
            <p>900,070.1</p>
          </div>
          <div className="col">
            <h1>Backed Liquidity</h1>
            <p>100%</p>
          </div>
          <div className="col">
            <h1>Next Rebase</h1>
            <p>00:08:05</p>
          </div>
          <div className="col">
            <h1>Total Supply</h1>
            <p>1,073,932.47</p>
          </div>
        </div>
        <div className="row-col">
          <div className="col">
            <h1>$OP Price</h1>
            <p>$206.20</p>
          </div>
          <div className="col">
            <h1>Market Value of Treasury Asset</h1>
            <p>$5,669,400</p>
          </div>
        </div>
        <div className="row-col">
          <div className="col">
            <h1>Pool Value</h1>
            <p>$23,682,528</p>
          </div>
          <div className="col">
            <h1>$OP Insurance Fund Value</h1>
            <p>$2,178,652</p>
          </div>
        </div>
        <div className="row-col">
          <div className="col">
            <h1># Value of FirePit</h1>
            <p>209,740.67 $OP</p>
          </div>
          <div className="col">
            <h1>$ Value of FirePit</h1>
            <p>$34,324,962</p>
          </div>
          <div className="col">
            <h1>% FirePit : Supply</h1>
            <p>16.43%</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Dashboard;
