import React, { useState, useEffect } from "react";
import "./Mint.css";
import AnimatedPage from "../../Components/AnimatedPage";
import gif from "../../Assets/gif.gif";
import item from "../../Assets/orca.png";
function Mint() {
  const [array, setArray] = useState([1]);
  const clickHandlerMinus = (e) => {
    if (array.length <= 10 && array.length >= 0) {
      const copy = [...array];
      copy.splice(0, 1);
      setArray(copy);
    }
  };
  const clickHandlerPlus = (e) => {
    if (array.length <= 9 && array.length >= 0) {
      setArray((prev) => {
        return [...prev, prev.length + 1];
      });
    }
  };
  return (
    <AnimatedPage>
      <div className="mint">
        <h1>Mint your killer whale</h1>
        <p>2500 “killer whales”</p>
        <p>1 of 3 collections released over the next 12 months</p>
        <p>
          Collect one of each to unlock your pass into our play to earn game
        </p>

        <img src={gif} alt="" className="flip" />
        <div className="row-add">
          <div className="additon-div">
            <div className="calc">
              <p onClick={clickHandlerMinus} className="minus">
                -
              </p>
              <p className="number">{array.length}</p>
              <p onClick={clickHandlerPlus} className="plus">
                +
              </p>
            </div>
          </div>
          <button className="mint-btn">Mint</button>
        </div>

        <div className="item_div">
          {array.map((elem, index) => {
            return (
              <img className="anim-left" key={index} src={item} alt="..." />
            );
          })}
        </div>
        <h1 style={{ marginTop: "20px" }}>Killerwhale Club NFTs</h1>
        <ul>
          <li>20% reflections to holders </li>
          <li>20% charity (Ocean plastic removal) </li>
          <li>15% treasury (used to deepen $OP LP)</li>
          <li>20% devfunds+marketing $OP </li>
          <li>10% development +marketing Protoverse x Orca Fund:</li>
          <li>15% play to earn developement</li>
        </ul>
        <h1 style={{ marginTop: "20px" }}>NFT Pricing</h1>
        <p>Bonding Curve Price Model:</p>
        <ul>
          <li>0-50 # Marketing</li>
          <li>50-1000 # 0.11 bnb</li>
          <li>1000-1750 # 0.22 bnb</li>
          <li>1750-2500 # 0.33 bnb</li>
        </ul>
      </div>
    </AnimatedPage>
  );
}

export default Mint;
