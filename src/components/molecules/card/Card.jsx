import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "@/context/Firebase/FirebaseContext";

function Card() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);
  const [selectedQuestionSetID, setSelectedQuestionSetID] = useState(null);
  const [exams, setExams] = useState([]);
  const [examSetIDs, setExamSetIDs] = useState([]);
  const [examSets, setExamSets] = useState([]);
  const [titles, setTitles] = useState([]);
  const [marks, setMarks] = useState([]);
  const [questionSetIds, setQuestionSetIds] = useState([]);
  const [questionSets, setQuestionSets] = useState([]);
  const id = sessionStorage.id;

  

  useEffect(() => {
    firebase.getExams(id).then((exams) => {
      const examDocs = exams.docs;
      setExams(examDocs);

      const extractedExamSetIDs = examDocs.map((data) => data.data().examSetIDs);
      setExamSetIDs(extractedExamSetIDs.flat());
      console.log("Extracted Exam Set IDs:", extractedExamSetIDs.flat());
    });
  }, [firebase, id]);

  useEffect(() => {
    if (examSetIDs.length > 0) {
      const fetchExamSets = async () => {
        try {
          const examSetPromises = examSetIDs.map((examSetID) => {
            return firebase.getExamSet(examSetID);
          });
          const examSetResults = await Promise.all(examSetPromises);
          setExamSets(examSetResults);

          const titles = examSetResults.map((result) => result.data().tittle);
          const marks = examSetResults.map((result) => result.data().mark);
          const questionSetIds = examSetResults.map((result) => result.data().questionSetIds);
          const flattenedQuestionSetIds = questionSetIds.flat();

          setTitles(titles);
          setMarks(marks);
          setQuestionSetIds(flattenedQuestionSetIds);

          console.log("Titles:", titles);
          console.log("Marks:", marks);
          console.log("Question Set IDs:", flattenedQuestionSetIds);
        } catch (error) {
          console.error("Error fetching exam sets:", error);
        }
      };

      fetchExamSets();
    }
  }, [examSetIDs, firebase]);

  useEffect(() => {
    if (questionSetIds.length > 0) {
      const fetchQuestionSets = async () => {
        try {
          const questionSetPromises = questionSetIds.map((questionSetID) => {
            return firebase.getQuestionSet(questionSetID);
          });
          const questionSetResults = await Promise.all(questionSetPromises);
          setQuestionSets(questionSetResults);

          console.log("Fetched Question Sets:", questionSetResults);
        } catch (error) {
          console.error("Error fetching question sets:", error);
        }
      };

      fetchQuestionSets();
    }
  }, [questionSetIds, firebase]);

  const handleClick = (questionSetID, marks) => {
    if (showTerms) {
      navigate(`exam/${questionSetID}`, { state: { marks } });
    } else {
      setSelectedQuestionSetID(questionSetID);
      setShowTerms(true);
    }
  };

  const handleAgree = (marks) => {
    navigate(`exam/${selectedQuestionSetID}`, { state: { marks } });
  };

  return (
    <>
      <div className="navbar bg-black flex items-center justify-center">
        <h1 className="font-semibold text-white text-2xl capitalize">
          Number of Available Exam Set: <span className="text-red">{questionSets.length}</span>
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#76ABAE] to-[#222831] flex-wrap">
        {questionSets.map((set, index) => (
          <div key={set.id} className="card bg-white w-96 shadow-2xl rounded-lg overflow-hidden m-4">
            <figure>
              <img
                className="w-full h-auto"
                src="https://img.freepik.com/free-photo/group-young-adults-studying-together-having-good-time-school-library_662251-1224.jpg"
                alt="Study Group"
              />
            </figure>
            <div className="p-6">
              <h2 className="card-body text-2xl font-bold text-gray-800 mb-4">
                <span className="text-gray-500">Question Set Name:</span> {set.data().newSet.setName}
              </h2>
              <p className="text-gray-600 mb-4">
                <span className="text-gray-500">Exam Set Name:</span> {titles.join(', ')}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="text-gray-500">Date:</span> {exams.map((data) => data.data().examDate).join(', ')}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-[#76ABAE] text-white font-semibold rounded hover:bg-[#5a8d96] transition duration-300 ease-in-out"
                  onClick={() => handleClick(set.id, marks)}
                >
                  Start Exam
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showTerms && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-10 rounded-md w-3/5">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-gray-700 mb-4">
              Please read and agree to the terms and conditions before proceeding with the exam. By clicking "Agree," you confirm that you have read, understood, and accepted all the terms and conditions.
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-[#76ABAE] text-white font-semibold rounded hover:bg-[#5a8d96] transition duration-300 ease-in-out mr-2"
                onClick={() => handleAgree(marks[selectedQuestionSetID])}
              >
                Agree
              </button>
              <button
                className="px-4 py-2 bg-[#EEEEEE] text-gray-800 font-semibold rounded hover:bg-[#dcdcdc] transition duration-300 ease-in-out"
                onClick={() => setShowTerms(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
