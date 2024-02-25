import React, { useState } from "react";
import Datefield from "./Date_field";
import TimeField from "./Timepicker";
import Modal from "react-modal";

const Add_transaction = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Add Transaction</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Transaction Modal"
      >
        <div className="border-2 border-green-950 h-[70%] w-[30%] ">
          <div className="ml-5 mt-5">Add Transaction</div>

          {/* Rest of your modal content here */}

          <div>
            <button
              className="bg-add_button text-white ml-7 mt-5 p-2 rounded-lg w-24"
              onClick={closeModal}
            >
              Add
            </button>
            <button
              className="bg-add_button text-white ml-7 mt-5 p-2 rounded-lg"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Add_transaction;
