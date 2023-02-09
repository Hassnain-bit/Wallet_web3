import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".Loader").classList.add("hidden");
    }, 3000);
  }, []);

  return (
    <>
      <div class="Loader">
        <div class="spinnerPairHolder">
          <div class="spinnerPair">
            <div class="spinnerPairCercle"></div>
            <div class="spinnerPairCercle"></div>
          </div>
          <div class="spinnerPair">
            <div class="spinnerPairCercle"></div>
            <div class="spinnerPairCercle"></div>
          </div>
          <div class="spinnerPair">
            <div class="spinnerPairCercle"></div>
            <div class="spinnerPairCercle"></div>
          </div>
          <div class="spinnerPair">
            <div class="spinnerPairCercle"></div>
            <div class="spinnerPairCercle"></div>
          </div>
          <div class="spinnerPair">
            <div class="spinnerPairCercle"></div>
            <div class="spinnerPairCercle"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
