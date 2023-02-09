import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function Rectify() {
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [openImport, setOpenImport] = useState(true);

  // const onOpenImportModal = () => setOpenImport(true);
  const onCloseImportModal = () => setOpenImport(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(true), 1000);

  //   // Fetch data here

  //   setLoading(false);
  // }, []);

  function Active() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
    setTimeout(() => setOpen(true), 3000);
  }
  return (
    <div style={{ color: "white" }}>
      <div className="app">
        {loading ? (
          <Modal
            open={openImport}
            onClose={onCloseImportModal}
            center
            classNames={{
              overlay: "customOverlay",
              modal: "init_modal",
            }}
          >
            <div className="im_inner">
              <button>Initializing...</button>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={Active}
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div>
        {/* <button onClick={onOpenModal}>Open modal</button> */}
        <Modal open={open} onClose={onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>

      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Rectify;
