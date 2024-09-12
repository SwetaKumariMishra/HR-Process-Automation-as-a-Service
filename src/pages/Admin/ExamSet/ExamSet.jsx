import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase/FirebaseContext";

const ExamSet = () => {
  const firebase = useFirebase();
  const [examSet, setExamSet] = useState([]);
  const [selectedSet, setSelectedSet] = useState(null);
  const [questionSets, setQuestionSets] = useState([]);

  useEffect(() => {
    firebase.ListAllExamSet().then((data) => setExamSet(data.docs));
  }, [firebase]);

  const openModal = async (set) => {
    setSelectedSet(set);
    const questionSetIds = set.data().questionSetIds;
    const questionSetsData = await Promise.all(questionSetIds.map(async (setId) => {
      const doc = await firebase.ListExamSetById(setId); 
      return doc.data();
    }));
    setQuestionSets(questionSetsData);
  };

  const closeModal = () => {
    setSelectedSet(null);
    setQuestionSets([]); // Clear question sets when modal is closed
  };

  
  return (
    <div className="h-full w-full p-4">
      <h1 className="text-2xl font-extrabold text-center mb-7">
        Available Exam sets
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {examSet.map((set) => (
          <div 
            key={set.id} 
            className="card w-full bg-[#EEEEEE] text-black transform transition-transform hover:scale-105 hover:shadow-lg">
            <div className="card-body flex flex-col items-center justify-center">
              <h2 className="card-title text-lg font-semibold">{set.data().tittle}</h2>
              <p className="mt-2">Total Mark: <span>{set.data().mark}</span></p>
              <p>No of Set: <span>{set.data().noOfQuestionSet}</span></p>
              <div className="card-actions mt-4">
                <button 
                  onClick={() => openModal(set)} 
                  className="btn bg-[#76ABAE]">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedSet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#31363F] text-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Selected Question Set For this Exam</h2>
            <p className="mb-4">Total Mark: {selectedSet.data().mark}</p>
            <p className="mb-4">Number of Sets: {selectedSet.data().noOfQuestionSet}</p>
            <h3 className="text-lg font-semibold mb-2">Question Sets:</h3>
            <ul>
              {questionSets.map((questionSet, index) => (
                <li key={index}>data</li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button 
                onClick={closeModal} 
                className="btn bg-[#76ABAE]">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamSet;
