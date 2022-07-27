import React from "react";
import AnimatedPage from "../../Components/AnimatedPage";
import "./Account.css";
function Account() {
  return (
    <AnimatedPage>
      <div className="dashboard account">
        <div className="row-col">
          <div className="col acc-col">
            <h1>Your Balance</h1>
            <h2>0</h2>
            <p>0 $OP</p>
          </div>
          <div className="col acc-col">
            <h1>APY</h1>
            <h2>916,474%</h2>
            <p>Daily ROI 2.54%</p>
          </div>
          <div className="col acc-col">
            <h1>Next Rebase:</h1>
            <h2>00:09:56</h2>
            <p>You will earn money soon</p>
          </div>
        </div>
        <div className="bot-acc">
          <div className="row-acc">
            <p>Current $OP Price</p>
            <p>$206.06</p>
          </div>
          <div className="row-acc">
            <p>Next Reward Amount</p>
            <p>0 $OP</p>
          </div>
          <div className="row-acc">
            <p>Next Reward Amount USD</p>
            <p>$0</p>
          </div>
          <div className="row-acc">
            <p>Next Reward Yield</p>
            <p>0.02355%</p>
          </div>
          <div className="row-acc">
            <p>ROI(1-Day Rate) USD</p>
            <p>$0</p>
          </div>
          <div className="row-acc">
            <p>ROI(5-Day Rate)</p>
            <p>11.96%</p>
          </div>
          <div className="row-acc">
            <p>ROI(5-Day Rate) USD</p>
            <p>$0</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Account;
