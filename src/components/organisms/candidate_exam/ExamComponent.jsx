import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import LeftSection from "./LeftSection";
import Timer from "./Timer";
import { useFirebase } from "@/context/Firebase/FirebaseContext";

const ExamComponent = () => {
  const firebase = useFirebase();
  const { id } = useParams();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [questionSet, setQuestionSet] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const navigate = useNavigate();
  const location = useLocation();
  const { marks } = location.state || {};

  

  
  // Fetch the question set by ID
  useEffect(() => {
    firebase.ListQuestionSetById(id).then((data) => {
      const questionSetData = data.data();
      setQuestionSet(questionSetData);
    });
  }, [firebase, id]);

  // Fetch questions based on question IDs in the question set
  useEffect(() => {
    if (questionSet && questionSet.newSet.questionIds.length > 0) {
      const fetchQuestions = async () => {
        try {
          const questionPromises = questionSet.newSet.questionIds.map((questionID) =>
            firebase.ListQuestionById(questionID)
          );
          const questionResults = await Promise.all(questionPromises);
          setQuestions(
            questionResults.map((q, index) => ({
              ...q.data(),
              id: questionSet.newSet.questionIds[index],
            }))
          );
          setSelectedOptions(Array(questionResults.length).fill(null));
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
  
      fetchQuestions();
    }
  }, [questionSet, firebase]);
  

  

  // Timer countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleQuestionClick = (questionIndex) => {
    setSelectedQuestionIndex(questionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedQuestionIndex < questions.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  const handleOptionSelect = (optionIndex) => {
    if (
      selectedQuestionIndex !== null &&
      selectedQuestionIndex >= 0 &&
      selectedQuestionIndex < questions.length &&
      questions[selectedQuestionIndex]?.Options &&
      optionIndex >= 0 &&
      optionIndex < questions[selectedQuestionIndex].Options.length
    ) {
      const selectedOption = {
        id: questions[selectedQuestionIndex].id,
        option: questions[selectedQuestionIndex].Options[optionIndex],
        index: optionIndex,
      };

      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[selectedQuestionIndex] = selectedOption;
      setSelectedOptions(updatedSelectedOptions);

      const updatedQuestions = [...questions];
      updatedQuestions[selectedQuestionIndex].answered = true;
      setQuestions(updatedQuestions);
    } else {
      console.error("Invalid option index or options not available.");
    }
  };

  const handleReset = () => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[selectedQuestionIndex] = null;
    setSelectedOptions(updatedSelectedOptions);

    const updatedQuestions = [...questions];
    updatedQuestions[selectedQuestionIndex].answered = false;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = async () => {
    const totalMarks = questions.length * 5; // Each question is worth 5 marks
    const correctAnswers = questions.reduce((score, question, index) => {
      if (selectedOptions[index]?.option === question.CorrectOption) {
        return score + 5; // Each correct answer gives 5 marks
      }
      return score;
    }, 0);
  
    console.log(`Your score is: ${correctAnswers} out of ${totalMarks}`);
   // Store score in Firestore
    try {
      await firebase.SaveCandidateScore(
        sessionStorage.id,
        sessionStorage.userName,
        sessionStorage.email,
        correctAnswers,
        totalMarks,
        questionSet.newSet.setName
      );
      console.log("Score saved successfully!");
    } catch (error) {
      console.error("Error saving score:", error);
    }
    navigate("/thank-you");
  };
  

  if (!questionSet || questions.length === 0) {
    return <div>Loading...</div>;
  }

    // console.log(sessionStorage);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex justify-center bg-black text-white py-4 animate__fadeInDown">
        <h1 className="text-3xl font-bold">Online Test - ( {questionSet.newSet.setName} )</h1>
      </div>
      <div className="flex flex-grow justify-center items-center gap-8 px-8 py-8 animate__fadeInUp">
        <div className="w-full max-w-3xl animate__fadeInLeft">
          <LeftSection
            question={selectedQuestionIndex !== null ? questions[selectedQuestionIndex] : null}
            questionIndex={selectedQuestionIndex}
            questionLength={questions.length}
            selectedOption={selectedOptions[selectedQuestionIndex]}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
            onOptionSelect={handleOptionSelect}
            onReset={handleReset}
            questionSet={questionSet}
          />
        </div>
        <div className="w-1/3 flex h-full flex-col gap-4 rounded-md bg-white p-4 shadow-md animate__fadeInRight">
          <Timer timeLeft={timeLeft} formatTime={formatTime} />
          <div className="p-4 rounded-md bg-indigo-100 animate__fadeIn">
            <h2 className="text-2xl font-semibold text-center text-indigo-800 mb-5">
              Question Palette
            </h2>
            <div className="flex flex-wrap justify-start">
              {questions.map(({ id, answered }, index) => (
                <div
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                  className={`w-12 h-12 flex justify-center items-center rounded-full m-2 text-lg font-bold cursor-pointer transition-transform transform hover:scale-110 ${
                    index === selectedQuestionIndex
                      ? "border-2 border-yellow-400 bg-blue-500"
                      : answered
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-6 transition-transform transform hover:scale-105"
            onClick={handleSubmit}
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamComponent;
