/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const Signup = ({ toggleModal }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalVisible(false);
      toggleModal()
    }
  };

  return (
    <>
       {modalVisible && (
        <>
      <div
        onClick={handleBackdropClick}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      ></div>

      <div
        ref={modalRef}
        className="ui card"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "solid 1px black",
          borderRadius: ".5em",
          padding: "1em",
          width: "30%",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h4>Username</h4>
        <input style={{ borderRadius: ".5em", width: "75%" }}></input>
        <h4>Password</h4>
        <input style={{ borderRadius: ".5em", width: "75%" }}></input>
        <button
          className="ui button"
          style={{
            width: "60%",
            backgroundColor: "#4D4D4D",
            color: "white",
            marginTop: "1em",
          }}
        >
          Create Account
        </button>
      </div>
      </>
       )}
    </>
  );
};

export default Signup;