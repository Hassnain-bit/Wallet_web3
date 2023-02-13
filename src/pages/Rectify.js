import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Phrase from "../components/Forms/Phrase";
import Keystone from "../components/Forms/Keystone";
import PrivateKey from "../components/Forms/PrivateKey";

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
            Complete Rectification
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
              <h3>Import wallet to complete rectification process</h3>

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
                  <Phrase/>
                </TabPanel>
                <TabPanel>
                  <Keystone/>
                </TabPanel>
                <TabPanel>
                  <PrivateKey/>
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
