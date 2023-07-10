import React, { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % 10000000);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    // Calculate individual digit values
    const sevenDigit = Math.floor((count / 1000000) % 10);
    const sixDigit = Math.floor((count / 100000) % 10);
    const fiveDigit = Math.floor((count / 10000) % 10);
    const fourDigit = Math.floor((count / 1000) % 10);
    const threeDigit = Math.floor((count / 100) % 10);
    const twoDigit = Math.floor((count / 10) % 10);
    const oneDigit = Math.floor(count % 10);
  
    return (
      <div className="big-counter justify-content-center mt-5 mb-2">
        <h1></h1>
        <div className="d-flex justify-content-center">
            <div className="card clock">
                <h5 className="counter-number mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                </h5>
            </div>
          <div className="card" id="seven-digit">
            <h5 className="counter-number mt-4">{sevenDigit}</h5>
          </div>
          <div className="card" id="six-digit">
            <h5 className="counter-number mt-4">{sixDigit}</h5>
          </div>
          <div className="card" id="five-digit">
            <h5 className="counter-number mt-4">{fiveDigit}</h5>
          </div>
          <div className="card" id="four-digit">
            <h5 className="counter-number mt-4">{fourDigit}</h5>
          </div>
          <div className="card" id="three-digit">
            <h5 className="counter-number mt-4">{threeDigit}</h5>
          </div>
          <div className="card" id="two-digit">
            <h5 className="counter-number mt-4">{twoDigit}</h5>
          </div>
          <div className="card" id="one-digit">
            <h5 className="counter-number mt-4">{oneDigit}</h5>
          </div>
        </div>
      </div>
    );
  };

export default Timer;