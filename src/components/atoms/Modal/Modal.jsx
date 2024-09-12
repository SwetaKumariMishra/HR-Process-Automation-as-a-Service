import React from "react";

const Modal = ({ question, isVisible, onClose, fn }) => {
  if (!isVisible || !question) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Q.{question.QuestionName}</h3>
        {question.Options.map((option, id) => (
          <p key={id} className="py-4">
            {option}
          </p>
        ))}
        <p className="py-4">Correct Answer: {question.CorrectOption}</p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
          <button className="btn bg-[#7AB2B2]">Edit</button>
          <button onClick={() => fn(question.id)} className="btn bg-[#C40C0C] text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
