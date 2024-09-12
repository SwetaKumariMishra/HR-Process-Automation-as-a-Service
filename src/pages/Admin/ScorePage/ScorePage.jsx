import { useEffect, useState } from "react";
import { useFirebase } from "@/context/Firebase/FirebaseContext";
import { useParams } from "react-router-dom";

const ScorePage = () => {
  const firebase = useFirebase();
  const { id } = useParams();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.GetScoreByCandidateId(id).then((scoreData) => {
      setScores(scoreData.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, [firebase, id]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const dateObj = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JS Date
    return isNaN(dateObj)
      ? "Invalid Date"
      : dateObj.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
          timeZoneName: "short",
        });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        {scores.length > 0 ? `Scores for ${scores[0].CandidateName}` : "Candidate hasn't taken any exams"}
      </h1>
      {scores.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
                  Test Name
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
                  Score
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
                  Total Marks
                </th>
                <th className="py-2 px-4 bg-gray-200 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b border-gray-200">{score.setName}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{score.score}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{score.totalMark}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{formatDate(score.timestamp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-gray-700">The candidate hasn't taken any exams.</p>
      )}
    </div>
  );
};

export default ScorePage;
