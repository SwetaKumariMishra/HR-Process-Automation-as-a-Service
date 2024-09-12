import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase/FirebaseContext";
import { useNavigate } from "react-router-dom";


const QuestionSetList = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [questionSet, setQuestionSet] = useState([]);

  useEffect(() => {
    // Fetch questions from firebase
    firebase
      .ListAllQuestionSet()
      .then((questionSet) => setQuestionSet(questionSet.docs));
  }, [firebase]);

  const handleViewClick = (id) => {
    navigate(`/admin/questionList/${id}`);
  };

  const handleDelete = (id) => {
    firebase.DeleteQuestionSet(id);
    firebase
    .ListAllQuestionSet()
    .then((questionSet) => setQuestionSet(questionSet.docs));
    alert("Question Deleted Successfully")
    
  }

  // console.log(questionSet.map((data) => data.data().newSet.questionIds));
    

  return (
    <div className="h-full w-full mt-10">
      <h1 className="text-center font-extrabold text-3xl">
        Available Question Sets
      </h1>
      <div className="grid grid-cols-1 gap-2 md  md:grid-cols-2 lg:grid-cols-3">
        {/* start card */}
        {questionSet.map((doc) => (
          <div key={doc.id} className="card w-96 bg-[#EEEEEE] text-black my-8 shadow-xl transform transition duration-500 hover:scale-105">
            <div className="card-body flex items-center justify-center">
              <h2 className="card-title">{doc.data().newSet.setName}</h2>
              <div className="card-actions justify-center">
                <button onClick={() => handleViewClick(doc.id)} className="btn bg-[#76ABAE]">view</button>
                <button onClick={() => handleDelete(doc.id)} className="btn bg-[#e85858]">delete</button>
              </div>
            </div>
          </div>
        ))}
        {/* end card */}
      </div>
    </div>
  );
};

export default QuestionSetList;