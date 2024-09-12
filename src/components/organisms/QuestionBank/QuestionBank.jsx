import { useEffect, useState } from "react";
import { Modal } from "@/components/atoms";
import { useFirebase } from "../../../context/Firebase/FirebaseContext";
import { FaEye, FaTrash } from "react-icons/fa";

const QuestionBank = () => {
  const firebase = useFirebase();

  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    firebase.ListAllQuestion().then((question) =>
      setQuestions(question.docs)
    );
  }, [firebase]);

  const handleViewButtonClick = (question) => {
    setSelectedQuestion({
      id: question.id,
      ...question.data(),
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Question?"
    );
    if (confirmDelete) {
      try {
        await firebase.DeleteQuestion(id);
        setQuestions((prevQuestions) =>
          prevQuestions.filter((q) => q.id !== id)
        );
        handleCloseModal(); // Close the modal after deletion
        console.log("Successfully deleted");
      } catch (error) {
        console.error("Error deleting question:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedQuestion(null);
  };

  return (
    <div className="m-5">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Question</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id} className="text-center">
                <td className="border px-4 py-2">{question.data().QuestionName}</td>
                <td className="border px-4 py-2">{question.data().Category}</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn bg-transparent hover:bg-gray-200 rounded-full p-2"
                    onClick={() => handleViewButtonClick(question)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="btn bg-transparent hover:bg-gray-200 rounded-full p-2 ml-2"
                    onClick={() => handleDelete(question.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        fn={handleDelete}
        question={selectedQuestion}
        isVisible={isModalVisible}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default QuestionBank;
