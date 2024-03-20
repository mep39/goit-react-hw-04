import Modal from "react-modal";
// import css from "../ImageModal/ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement(document.getElementById("root"));

export default function ImageModal({ onRequestClose, isOpen, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <img src={imageUrl} alt="Enlarged image" />
      </div>
    </Modal>
  );
}
