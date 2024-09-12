import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "@/context/Firebase/FirebaseContext";

const QuestionSetDetails = () => {
  const { id } = useParams();
  const firebase = useFirebase();

  const [questionSet, setQuestionSet] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestionSet = async () => {
      try {
        const doc = await firebase.ListQuestionSetById(id);
        if (doc.exists) {
          const questionSetData = doc.data();
          setQuestionSet(questionSetData);

          // Fetch the details of each question using its id.......

          const questionDetails = await Promise.all(
            questionSetData.newSet.questionIds.map(async (questionId) => {
              try {
                const questionDoc = await firebase.ListQuestionById(questionId);
                if (questionDoc.exists) {
                  return questionDoc.data();
                } else {
                  console.error(
                    `Question with ID ${questionId} does not exist.`
                  );
                  return null;
                }
              } catch (error) {
                console.error(
                  `Error fetching question with ID ${questionId}:`,
                  error
                );
                return null;
              }
            })
          );

          setQuestions(questionDetails.filter((question) => question !== null));
        } else {
          console.error(`Question set with ID ${id} does not exist.`);
        }
      } catch (error) {
        console.error("Error fetching question set:", error);
      }
    };

    fetchQuestionSet();
  }, [firebase, id]);

  if (!questionSet) {
    return (
        <div className="h-full w-full flex items-center justify-center">
        <span className="loading loading-dots loading-lg mt-40 pt-48"></span>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#EEEEEE]">
      <div>
        <h1 className="text-center text-3xl font-semibold p-5">
          {questionSet.newSet.setName}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-[#76ABAE] font-bold">
              <th>Questions</th>
              <th>Category</th>
              <th>Correct Option</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>Q. {question.QuestionName || "Unknown Question"}</td>
                <td>{question.Category || "No category available"}</td>
                <td>
                  {question.CorrectOption || "No correct option available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionSetDetails;
