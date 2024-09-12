import { useState, useEffect } from "react";
import { useFirebase } from "@/context/Firebase/FirebaseContext";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [questionSet, setQuestionSet] = useState([]);
  const [selectedQuestionSet, setSelectedQuestionSet] = useState("");
  const [selectedQuestionSetList, setSelectedQuestionSetList] = useState([]);

  // variables for Inputs....
  const [tittle, setTittle] = useState("");
  const [mark, setMark] = useState("");
  const [noOfQuestionSet, setNoOfQuestionSet] = useState("");

  useEffect(() => {
    // Fetch questions from firebase
    firebase.ListAllQuestionSet().then((data) => setQuestionSet(data.docs));
  }, [firebase]);

  const handleChange = (event) => {
    const selectedQuestionSetName = event.target.value;
    setSelectedQuestionSet(selectedQuestionSetName);

    const selectedQuestionSetObject = questionSet.find(
      (question) => question.data().newSet.setName === selectedQuestionSetName
    );
    if (
      selectedQuestionSetObject &&
      !selectedQuestionSetList.includes(selectedQuestionSetObject)
    ) {
      setSelectedQuestionSetList([
        ...selectedQuestionSetList,
        selectedQuestionSetObject,
      ]);
    }
  };

  const HandleCreateQuestionSet = () => {
    //collecting QuestionSets ids for storing the ids.
    const questionSetIds = selectedQuestionSetList.map((data) => data.id);

    firebase
      .HandleCreateExam(tittle, mark, noOfQuestionSet, questionSetIds)
      .then(() => {
        console.log("Question Set Added Successfully");
        alert(" Successfully Created ");
        setTittle('');
        setMark("");
        setNoOfQuestionSet("");
        setSelectedQuestionSetList([]);
        setSelectedQuestionSet("");
        navigate('/admin/ExamSet')

      });
  };

  // console.log(mark);
  // console.log(tittle);
  // console.log(noOfQuestionSet);
  // console.log(selectedQuestionSetList.map((data) => data.id));

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-white">
      <p className="text-3xl text-center mt-10 font-extrabold animate-bounce">
        Create an Exam
      </p>
      <div className="flex flex-col w-[60vw] items-center justify-center m-10 shadow-xl p-20 bg-[#EEEEEE] rounded-lg shadow-[#2e2d2f] transform transition duration-500 hover:scale-110">
        <input
          type="text"
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
          placeholder="Tittle of the Exam"
          className="input input-bordered w-full max-w-xs rounded-lg p-2 border-2 focus:outline-none focus:ring-1 focus:ring-[#31363F] transition duration-300 ease-in-out"
        />
        <input
          type="number"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          placeholder="Total Mark"
          className="input input-bordered w-full max-w-xs rounded-lg mt-4 p-2 border-2 focus:outline-none focus:ring-2 focus:ring-[#31363F] transition duration-300 ease-in-out"
        />
        <input
          value={noOfQuestionSet}
          onChange={(e) => setNoOfQuestionSet(e.target.value)}
          type="number"
          placeholder="No of Question Set"
          className="input input-bordered w-full max-w-xs rounded-lg mt-4 p-2 border-2 focus:outline-none focus:ring-2 focus:ring-[#31363F] transition duration-300 ease-in-out"
        />
        <select
          onChange={handleChange}
          value={selectedQuestionSet}
          className="select select-bordered w-full max-w-xs mt-4 rounded-lg p-2 border-2 focus:outline-none focus:ring-2 focus:ring-[#31363F] transition duration-300 ease-in-out"
        >
          <option value="">Select Question Sets</option>
          {questionSet.map((set, index) => (
            <option key={index} value={set.data().newSet.setName}>
              {set.data().newSet.setName}
            </option>
          ))}
        </select>

        {selectedQuestionSetList.length > 0 && (
          <div className=" flex mt-5 bg-transparent p-2 rounded-lg shadow-md gap-2">
            {selectedQuestionSetList.map((set, index) => (
              <div key={index} className=" p-2 bg-transparent rounded-lg">
                <h4 className="font-semibold">{set.data().newSet.setName}</h4>
              </div>
            ))}
          </div>
        )}
        <button onClick={HandleCreateQuestionSet} className="btn bg-[#76ABAE] mt-5">
          Create
        </button>
      </div>
    </div>
  );
};

export default Exam;
