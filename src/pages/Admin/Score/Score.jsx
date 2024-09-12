import { useState, useEffect } from "react";
import { useFirebase } from "@/context/Firebase/FirebaseContext";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";

const Score = () => {
  const firebase = useFirebase();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    firebase
      .ListAllCandidate()
      .then((candidate) =>
        setDatas(candidate.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      );
  }, [firebase]);

  return (
    
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 text-gray-900">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Candidate Score
        </h1>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#76ABAE] text-white">
            <tr>
              <th className="px-6 py-3 text-center font-semibold text-sm uppercase">
                UserName
              </th>
              <th className="px-6 py-3 text-center font-semibold text-sm uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-center font-semibold text-sm uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-center font-semibold text-sm uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {datas &&
              datas.map((data) => (
                <tr
                  key={data.id}
                  className="text-center bg-white odd:bg-gray-50 hover:bg-gray-100 transition duration-200"
                >
                  <td className="border-t px-6 py-4 text-center">
                    {data.userName}
                  </td>
                  <td className="border-t px-6 py-4 text-center">
                    {data.email}
                  </td>
                  <td className="border-t px-6 py-4 text-center">
                    {data.phone}
                  </td>
                  <td className="border-t px-6 py-4 text-center">
                    <div className="flex justify-center space-x-2">
                      <Link to={`/admin/Score/${data.id}`}>
                        <button className="btn bg-[#31363F] text-white">
                          <GrView />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Score;
