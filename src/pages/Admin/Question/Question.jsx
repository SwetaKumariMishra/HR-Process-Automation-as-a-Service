import { useEffect, useState } from "react";
import { useFirebase } from "../../../context/Firebase/FirebaseContext";

const Question = () => {
  const firebase = useFirebase();

  const [QuestionName, setQuestionName] = useState("");
  const [Options, setOptions] = useState(["", "", "", ""]);
  const [CorrectOption, setCorrectOption] = useState("");
  const [Category, setCategory] = useState("");
  const [selectCategories, setSelectCategories] = useState([]);



  useEffect(() => {
    firebase
      .ListAllCategory()
      .then((category) => setSelectCategories(category.docs));
  }, [firebase]);

 

  const handleChange = (index, event) => {
    const newOptions = [...Options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("adding Questions..");
    await firebase.HandleAddQuestion(
      QuestionName,
      Options,
      CorrectOption,
      Category
    );
    console.log("Add SuccessFully");
    alert("Questions Added successfully");
    setQuestionName("");
    setOptions(["", "", "", ""]);
    setCategory("");
    setCorrectOption("");
  };

  return (
    <div className="max-w-md mx-auto mt-5 shadow-xl">
      <form className="px-5 py-5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-sm font-medium text-gray-700"
          >
            Question:
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={QuestionName}
            onChange={(e) => setQuestionName(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#31363F]"
          />
        </div>
        {Options.map((option, index) => (
          <div key={index} className="mb-4">
            <label
              htmlFor={`option${index + 1}`}
              className="block text-sm font-medium text-gray-700"
            >
              Option {index + 1}:
            </label>
            <input
              type="text"
              id={`option${index + 1}`}
              name={`option${index + 1}`}
              value={option}
              onChange={(e) => handleChange(index, e)}
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#31363F]"
            />
          </div>
        ))}
        <div className="mb-4">
          <label
            htmlFor="correct"
            className="block text-sm font-medium text-gray-700"
          >
            Correct Option:
          </label>
          <input
            type="text"
            id="correct"
            name="correct"
            value={CorrectOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#31363F]"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            required
            id="category"
            name="category"
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#31363F]"
          >
            <option value="">Select a category</option>
            {selectCategories.map((category) => (
              <option key={category.id} value={category.data().name}>
                {category.data().name}
              </option>
            ))}
          </select>

          <div className="mt-6 flex justify-center">
            <button className="btn bg-[#76ABAE]" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Question;
