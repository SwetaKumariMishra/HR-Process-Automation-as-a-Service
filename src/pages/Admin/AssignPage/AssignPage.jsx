import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFirebase } from "@/context/Firebase/FirebaseContext";
import { MdDelete } from "react-icons/md";

const QuestionSet = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const id = useParams();

  

  const [selectedExam, setSelectedExam] = useState("");
  const [selectedExamsList, setSelectedExamsList] = useState([]);
  const [examSet, setExamSet] = useState([]);
  const [examDuration, setExamDuration] = useState("");
  const [examDate, setExamDate] = useState("");

  useEffect(() => {
    firebase.ListAllExamSet().then((data) => setExamSet(data.docs));
  }, [firebase]);

  const handleChange = (event) => {
    const selectedExamName = event.target.value;
    setSelectedExam(selectedExamName);

    const selectedExamObject = examSet.find(
      (exam) => exam.data().tittle === selectedExamName
    );
    if (
      selectedExamObject &&
      !selectedExamsList.includes(selectedExamObject)
    ) {
      setSelectedExamsList([
        ...selectedExamsList,
        selectedExamObject,
      ]);
    }
  };

  const handleDeselectQuestion = (id) => {
    setSelectedExamsList(
      selectedExamsList.filter((exam) => exam.id !== id)
    );
  };

  

  const handleAssignExam = () => {
    const examSetIDs = selectedExamsList.map((exam) => exam.id);

    firebase
      .HandleAssign( id, examSetIDs, examDuration, examDate )
      .then(() => {
        console.log("Exam Assign Successfully successfully!");
        alert("SuccessFully Assign the Exam to this user");
        setExamDuration("");
        setExamDate("");
        setSelectedExamsList([]);
        setSelectedExam("");
        navigate('/admin/AssignExam')
      })
      .catch((error) => {
        console.error("Error creating question set: ", error);
      });
  };


  return (
    <div className="flex flex-col bg-gray-100 m-12 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
        Assign an exam to this Candidate
      </h2>
      <select
        onChange={handleChange}
        className="p-3 border rounded mb-4 bg-gray-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#31363F]"
        value={selectedExam}
      >
        <option value="">Select an Exam Set</option>
        {examSet.map((exam) => (
          <option key={exam.id} value={exam.data().tittle}>
            {exam.data().tittle}
          </option>
        ))}
      </select>
      <div className="mb-4">
        <label
          htmlFor="examDuration"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Exam Duration (in seconds):
        </label>
        <input
          required
          type="number"
          name="examDuration"
          className="block w-full p-2 border text-black border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#31363F]"
          value={examDuration}
          onChange={(e) => setExamDuration(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="examDate"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Exam Date:
        </label>
        <input
          required
          type="date"
          name="examDate"
          className="block w-full p-2 border text-black border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#31363F]"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
        />
      </div>
      <div className="flex justify-center mb-6">
        <button
          className="btn bg-[#76ABAE] text-white font-semibold py-2 px-4 rounded shadow hover:bg-[#65989a] transition duration-300"
          onClick={handleAssignExam}
        >
          Assign Exam
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {selectedExamsList.map((exam) => (
          <div
            key={exam.id}
            className="bg-gray-50 rounded-lg shadow p-4 flex justify-between items-center"
          >
            <p className="text-lg font-semibold text-gray-800">
              {exam.data().tittle}
            </p>
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => handleDeselectQuestion(exam.id)}
            >
              <MdDelete className="text-2xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSet;
