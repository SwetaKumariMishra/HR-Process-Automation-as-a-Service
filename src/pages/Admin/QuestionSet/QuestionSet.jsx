import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "@/context/Firebase/FirebaseContext";
import { MdDelete } from "react-icons/md";

const QuestionSet = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedQuestionsList, setSelectedQuestionsList] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [setName, setSetName] = useState(""); // State for the set name

  useEffect(() => {
    // Fetch questions from firebase
    firebase.ListAllQuestion().then((question) => setQuestions(question.docs));
  }, [firebase]);

  

  const handleChange = (event) => {
    const selectedQuestionName = event.target.value;
    setSelectedQuestion(selectedQuestionName);

    const selectedQuestionObject = questions.find(
      (question) => question.data().QuestionName === selectedQuestionName
    );
    if (
      selectedQuestionObject &&
      !selectedQuestionsList.includes(selectedQuestionObject)
    ) {
      setSelectedQuestionsList([
        ...selectedQuestionsList,
        selectedQuestionObject,
      ]);
      event.target.value = "";
    }
  };

  const handleDeselectQuestion = (id) => {
    setSelectedQuestionsList(
      selectedQuestionsList.filter((question) => question.id !== id)
    );
  };

  const handleCreateSet = () => {
    // Collecting the Id s of selected Question List and stored in an array
    const questionIds = selectedQuestionsList.map((question) => question.id);
    // Create a new set object and passing The value of SetName and ids....
    const newSet = {
      setName,
      questionIds,
    };

    firebase
      .createQuestionSet(newSet) 
      .then(() => {
        console.log("Question set created successfully!");
        alert("Question Set Created Successfully")
        setSetName("");
        setSelectedQuestionsList([]);
        setSelectedQuestion("");
        navigate('/admin/questionList')

      })
      .catch((error) => {
        console.error("Error creating question set: ", error);
      });
  };

  return (
    <div className="flex flex-col bg-[#EEEEEE] m-12 min-h-full p-6 rounded-lg shadow-md">
      <select
        onChange={handleChange}
        className="p-2 border rounded mb-4"
        value={selectedQuestion}
      >
        <option value="">Select a question</option>
        {questions.map((question) => (
          <option key={question.id} value={question.data().QuestionName}>
            {question.data().QuestionName}-[{question.data().Category}]
          </option>
        ))}
      </select>
      <div className="mb-4">
        <label
          htmlFor="setName"
          className="block text-sm font-medium text-gray-700"
        >
          Set Name:
        </label>
        <input
          required
          type="text"
          name="setName"
          className="appearance-none block w-full px-3 py-2 border text-black border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-purple focus:border-[#31363F] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          value={setName}
          onChange={(e) => setSetName(e.target.value)} // Update the set name state
        />
      </div>
      <div className="flex justify-end mb-4">
        <button
          className="btn bg-[#76ABAE]"
          onClick={handleCreateSet} // Attach the handler to the button
        >
          Create Set
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {selectedQuestionsList.map((question) => (
          <div key={question.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-800 font-bold">
                {" "}
                Q. {question.data().QuestionName}
              </p>
              <button
                className="btn bg-transparent text-black rounded"
                onClick={() => handleDeselectQuestion(question.id)}
              >
                <MdDelete className="text-red-600 text-lg"/>
              </button>
            </div>
            <ul className="list-disc ml-6">
              {question.data().Options &&
                question.data().Options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSet;
