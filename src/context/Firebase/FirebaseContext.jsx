import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import PropTypes from "prop-types";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBylU4qCp0j1ikUp49p9mZ2c3dwZK68AvE",
  authDomain: "hr-automation-3641e.firebaseapp.com",
  projectId: "hr-automation-3641e",
  storageBucket: "hr-automation-3641e.appspot.com",
  messagingSenderId: "486497029624",
  appId: "1:486497029624:web:50280cc322fa6a9e681a0d",
};

export const useFirebase = () => useContext(FirebaseContext);
const FirebaseApp = initializeApp(firebaseConfig);
const fireStore = getFirestore(FirebaseApp);

/////functions  to add category....
const HandleAddCategory = async (name) => {
  return await addDoc(collection(fireStore, "Category"), {
    name,
  });
};

//function to add Questions---
const HandleAddQuestion = async (
  QuestionName,
  Options,
  CorrectOption,
  Category
) => {
  return await addDoc(collection(fireStore, "Question"), {
    QuestionName,
    Options,
    CorrectOption,
    Category,
  });
};

//Function to Handle Add Exams....
const HandleCreateExam = async (
  tittle,
  mark,
  noOfQuestionSet,
  questionSetIds
) => {
  return await addDoc(collection(fireStore, "Exam"), {
    tittle,
    mark,
    noOfQuestionSet,
    questionSetIds,
  });
};

////Function to List all category
const ListAllCategory = () => {
  return getDocs(collection(fireStore, "Category"));
};
///function to delete Category
const DeleteCategory = (id) => {
  const docRef = doc(fireStore, "Category", id);
  return deleteDoc(docRef);
};

 //function to delete QuestionSet
 const DeleteQuestionSet = (id) => {
  const docRef = doc(fireStore, "QuestionSet", id);
  return deleteDoc(docRef)
 }

/// FUNCTION TO EDIT CATEGORY....

const UpdateCategory = async (id, name) => {
  const docRef = doc(fireStore, "Category", id);
  await updateDoc(docRef, {
    name: name,
  });
};

// Function to add candidate

const AddCandidate = async (userName, email, password, phone) => {
  return await addDoc(collection(fireStore, "Candidate"), {
    userName,
    email,
    password,
    phone,
    isAdmin: false,
  });
};

//function to save Candidate Score
const SaveCandidateScore = async (
  CandidateID,
  CandidateName,
  email,
  score,
  totalMark,
  setName
) => {
  return await addDoc(collection(fireStore, "CandidateScore"), {
    CandidateID,
    CandidateName,
    email,
    score,
    totalMark,
    setName,
    timestamp: new Date(),
  });
};

//function to add Question sets
const createQuestionSet = async (newSet) => {
  return await addDoc(collection(fireStore, "QuestionSet"), {
    newSet,
  });
};

// Function to list candidate
const ListAllCandidate = () => {
  return getDocs(collection(fireStore, "Candidate"));
};

//function to list all Score
const ViewAllScore = () => {
  return getDocs(collection(fireStore, "CandidateScore"));
};

//function to list All Questions
const ListAllQuestion = () => {
  return getDocs(collection(fireStore, "Question"));
};
//function to list All Question sets...
const ListAllQuestionSet = () => {
  return getDocs(collection(fireStore, "QuestionSet"));
};
//function to list all Exam Sets..
const ListAllExamSet = () => {
  return getDocs(collection(fireStore, "Exam"));
};

// function to List candidate by id
const ListById = async (id) => {
  const docRef = doc(fireStore, "Candidate", id);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

/// function to list QuestionSet By id
const ListQuestionSetById = async (id) => {
  const docRef = doc(fireStore, "QuestionSet", id);
  const docSnap = await getDoc(docRef);
  return docSnap;
};
////function to list Questions By Id
const ListQuestionById = async (questionId) => {
  const docRef = doc(fireStore, "Question", questionId);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

////function to list ExamSet By Id
const ListExamSetById = async (setId) => {
  const docRef = doc(fireStore, "Exam", setId);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

// Function to delete Candidate
const DeleteCandidate = (id) => {
  const docRef = doc(fireStore, "Candidate", id);
  return deleteDoc(docRef);
};
//function to delete Question
const DeleteQuestion = (id) => {
  const docRef = doc(fireStore, "Question", id);
  return deleteDoc(docRef);
};

// Function to edit candidate
const EditCandidate = async (id, userName, email, password, phone) => {
  const docRef = doc(fireStore, "Candidate", id);
  await updateDoc(docRef, {
    userName: userName,
    email: email,
    password: password,
    phone: phone,
  });
};

//function to get Score according to the userId

const GetScoreByCandidateId = async (id) => {
  const q = query(
    collection(fireStore, "CandidateScore"),
    where("CandidateID", "==", id)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot
};

// Function to get candidate by email and password
const GetCandidateByEmailAndPassword = async (email, password) => {
  const q = query(
    collection(fireStore, "Candidate"),
    where("email", "==", email),
    where("password", "==", password)
  );
  const querySnapshot = await getDocs(q);
  let candidate = null;
  querySnapshot.forEach((doc) => {
    candidate = { id: doc.id, ...doc.data() };
  });
  return candidate;
};

// export const FirebaseProvider = ({children}) => {
//   return (
//     <FirebaseContext.Provider
//       value={{
//         HandleAddCategory,
//         ListById,
//         ListAllCategory,
//         DeleteCategory,
//         UpdateCategory,
//         AddCandidate,
//         ListAllCandidate,
//         DeleteCandidate,
//         EditCandidate,
//         GetCandidateByEmailAndPassword // Add the get candidate function here
//       }}
////HandleAssign Exam....
const HandleAssign = async (id, examSetIDs, examDuration, examDate) => {
  const CollectionRef = collection(fireStore, "Candidate", id.id, "Exam");
  const result = await addDoc(CollectionRef, {
    examSetIDs: examSetIDs,
    examDuration: examDuration,
    examDate: examDate,
  });
  return result;
};
///// list the assign Exam to user
const getExams = async (id) => {
  const collectionRef = collection(fireStore, "Candidate", id, "Exam");
  const results = await getDocs(collectionRef);
  return results;
};
//function to get exam set by id
const getExamSet = async (id) => {
  const DocRef = doc(fireStore, "Exam", id);
  const results = await getDoc(DocRef);
  return results;
};

const getQuestionSet = async (id) => {
  const DocRef = doc(fireStore, "QuestionSet", id);
  const results = await getDoc(DocRef);
  return results;
};

export const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider
      value={{
        HandleAssign,
        getExams,
        getExamSet,
        getQuestionSet,
        HandleAddQuestion,
        ListExamSetById,
        HandleCreateExam,
        ListQuestionById,
        ListQuestionSetById,
        ListAllQuestionSet,
        ListAllExamSet,
        createQuestionSet,
        ListAllQuestion,
        DeleteQuestion,
        HandleAddCategory,
        ListById,
        ListAllCategory,
        DeleteCategory,
        UpdateCategory,
        AddCandidate,
        ListAllCandidate,
        DeleteCandidate,
        EditCandidate,
        GetCandidateByEmailAndPassword,
        SaveCandidateScore,
        ViewAllScore,
        GetScoreByCandidateId,
        DeleteQuestionSet
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

FirebaseContext.propTypes = {
  children: PropTypes.string.isRequired,
};
