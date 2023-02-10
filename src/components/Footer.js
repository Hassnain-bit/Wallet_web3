import React from "react";

function Footer() {
  return (
    <>
      <div className="copyright-main">
        <div className="container-fluid">
          <div className="wrapper">
            <p className="copy-right heading-S">
              Copyright © 2022 Blockchain Rectification . All rights reserved.
            </p>
            <div className="linkk-otr">
              <p className="linkk-inr">
                <a href="index.html" className="linkk-page heading-S">
                  Privacy Policy{" "}
                </a>{" "}
                •{" "}
                <a href="index.html" className="linkk-page heading-S">
                  {" "}
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
