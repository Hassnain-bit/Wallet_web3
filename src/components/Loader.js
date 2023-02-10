import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".Loader").classList.add("hidden");
    }, 3000);
  }, []);

  return (
    <>
      <div className="Loader">
        <div className="spinnerPairHolder">
          <div className="spinnerPair">
            <div className="spinnerPairCercle"></div>
            <div className="spinnerPairCercle"></div>
          </div>
          <div className="spinnerPair">
            <div className="spinnerPairCercle"></div>
            <div className="spinnerPairCercle"></div>
          </div>
          <div className="spinnerPair">
            <div className="spinnerPairCercle"></div>
            <div className="spinnerPairCercle"></div>
          </div>
          <div className="spinnerPair">
            <div className="spinnerPairCercle"></div>
            <div className="spinnerPairCercle"></div>
          </div>
          <div className="spinnerPair">
            <div className="spinnerPairCercle"></div>
            <div className="spinnerPairCercle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
