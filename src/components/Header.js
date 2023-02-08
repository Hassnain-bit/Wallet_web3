import React from "react";
import header_img from '../images/img-hero-img-home-2.png';
import { ConnectWallet } from "@thirdweb-dev/react";

function Header() {
  return (
    <>
      <div class="hero2-main">
        <div class="container-fluid">
          <div class="row row-custom">
            <div class="col-lg-5 col-content-otr">
              <div class="col-content-inr">
                <h1 class="heading heading-h1">Wallet Rectification</h1>
                <p class="desc heading-L">
                  Every digital artwork on Upside is authentic and truly unique.
                  Blockchain technology makes this new aproch to digital
                  ownership possible.
                </p>
                <p class="desc heading-L">
                  Open and decentralized protocol for syncing various Wallets
                  issues on Secure Server. This is not an app but a protocol
                  that establishes a remote resolution between all noncustodial
                  wallet
                </p>
                <p class="desc heading-L">
                  It is an online server which gets you across to every wallet
                  representative to enable effective complain and rectification
                  of issues.
                </p>
                <p class="desc heading-L">
                  You will be on a chat with an Artificial Intelligence Robot
                  with zero Human interference.
                </p>
                <div class="action">
                  {/* <button
                    href="wallet/index.html"
                    class="btn-primary-1 btn-hero heading-SB connectBtn"
                    id="connectBtn"
                  >
                    Connect Wallet
                  </button> */}
                  <ConnectWallet className="btn-primary-1 btn-hero heading-SB connectBtn" accentColor="#019DEA" colorMode="dark" />
                  
                  <a href="index.html"></a>
                  <div class="btn-hero heading-SB" id="slect-main">
                    <select
                      class="select2-hidden-accessible select2"
                      id="select2-main"
                      aria-invalid="false"
                      data-select2-id="select2-data-1-x6av"
                      tabindex="-1"
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
          <img
            class="hero-img"
            src={header_img}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
