import { AdminLayout } from "@/layouts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, ForgotPassword, LandingPage, Login, ResetPassword } from "./pages";
import { Signup } from "./pages";
import { AddCategory } from "./pages";
// import ForgotPassword from "./pages/forgotPassword";
// import ResetPassword from "./pages/resetPassword";
import Protected from "./utils/Protected";
import "./index.css";
import {
  AddEditCandidate,
  AssignExam,
  AssignPage,
  Candidate,
  Exam,
  HelpSupport,
  ExamSet,
  Question,
  QuestionSet,
  Settings,
  Score,
  ScorePage
} from "./pages/Admin";
import Edit from "./pages/Admin/Candidate/AddEditCandidate/Edit";
import QuestionSetList from "./pages/Admin/QuestionSet/QuestionSetList";
import { QuestionBank } from "./components/organisms";
import QuestionSetDetails from "./pages/Admin/QuestionSetDetails/QuestionSetDetails";


import "./index.css";
import { ExamComponent } from "./components/organisms/candidate_exam";
import Card from "./components/molecules/card/Card";
import ContactUs from "./pages/examPortalLandingPage/ContactUs";
import AboutUs from "./pages/examPortalLandingPage/AboutUs";
import ThankYouComponent from "./components/organisms/candidate_exam/ThankYouComponent";

function App() {
  // creating router
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <Protected Component={AdminLayout} />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          path: "dashboard",
        },
        {
          index: true,
          element: <Exam />,
          path: "Exam",
        },
        {
          index: true,
          element: <ExamSet/>,
          path: "ExamSet",
        },
        {
          index: true,
          element: <AddCategory />,
          path: "category",
        },
        {
          index: true,
          element: <Settings />,
          path: "settings",
        },
        {
          index: true,
          element: <HelpSupport />,
          path: "support",
        },
        {
          index: true,
          element: <Candidate />,
          path: "candidate",
        },
        {
          index: true,
          element: <Question />,
          path: "AddQuestion",
        },
        {
          index: true,
          element: <AssignExam/>,
          path: "AssignExam",
        },
        {
          index: true,
          element: <QuestionBank/> ,
          path: "question",
        },
        {
          index: true,
          element: <QuestionSet />,
          path: "questionSet",
        },
        {
          index: true,
          element: <Edit />,
          path: "/admin/candidate/:id",
        },
        {
          index: true,
          element: <AssignPage/>,
          path: "/admin/AssignExam/:id",
        },
        {
          index: true,
          element: <ScorePage/>,
          path: "/admin/Score/:id",
        },
        {
          index: true,
          element: <AddEditCandidate />,
          path: "/admin/candidate/addEditCandidate",
        },
        {
          index: true,
          element: <QuestionSetList />,
          path: "/admin/questionList",
        },
        {
          index: true,
          element: <Score/>,
          path: "/admin/Score",
        },
        {
          index: true,
          element: <QuestionSetDetails />,
          path: "/admin/questionList/:id",
        },

      ],
    },
    {
      index: true,
      element: <LandingPage />,
      path: "/",
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      index: true,
      element: <ExamComponent />,
      path: "card/Exam/:id",
    },
    {
      index: true,
      element: <Protected Component={Card} />,
      path: "/card",
    },
    {
      index: true,
      element: <ContactUs />,
      path: "/contactForm",
    },
    {
      index: true,
      element: <AboutUs />,
      path: "/about",
    },
    {
      index: true,
      element: <Signup />,
      path: "/signup",
    },
    {
      index: true,
      element: <ThankYouComponent />,
      path: "/thank-you",
    },
    {
      index: true,
      element: <ForgotPassword />,
      path: "/forgotPassword",
    },
    {
      index: true,
      element: <ResetPassword />,
      path: "/resetPassword",
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
