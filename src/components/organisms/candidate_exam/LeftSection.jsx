const LeftSection = ({
  question,
  questionIndex,
  questionLength,
  selectedOption,
  onNext,
  onPrevious,
  onOptionSelect,
  onReset,
  questionSet
}) => {

   

  return (
    <div className="p-4 bg-white shadow-md ml-4 h-screen">
      <h2 className="text-2xl font-semibold mb-8">
        {questionSet.newSet.setName} - Question {questionIndex + 1}
      </h2>
      {question ? (
        <div>
          <p className="text-xl font-bold mb-4"> Q.{question.QuestionName}</p>
          <div className="flex flex-col gap-4 h-34 overflow-y-auto">
            {question.Options && question.Options.length > 0 ? (
              question.Options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`option${index}`}
                    name={`options${questionIndex}`}
                    value={index}
                    className="mr-2"
                    checked={selectedOption?.index === index}
                    onChange={() => onOptionSelect(index)}
                  />
                  <label htmlFor={`option${index}`} className="text-lg">
                    {option}
                  </label>
                </div>
              ))
            ) : (
              <p>No options available</p>
            )}
          </div>
        </div>
      ) : (
        <p>No question selected</p>
      )}
      <div className="flex justify-between mt-10">
        <div className="flex gap-3">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              questionIndex === 0 && "hidden"
            }`}
            onClick={onPrevious}
          >
            Previous
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              questionIndex === questionLength - 1 && "hidden"
            }`}
            onClick={onNext}
          >
            Next
          </button>
        </div>
        <div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onReset}
            disabled={selectedOption === null}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
