import { MdOutlineCreate } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbCategory2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { VscDesktopDownload } from "react-icons/vsc";
import { SiGoogleforms } from "react-icons/si";
import { FaQuestionCircle } from "react-icons/fa";
import { FaFileCircleQuestion } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { SiTestcafe } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_LINKS =[
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/admin/Dashboard',
        icon: <RxDashboard />
    },
    {
        key: 'Assign',
        label: 'Assign Exam',
        path: '/admin/AssignExam',
        icon: <MdAssignmentAdd />
    },
    {
        key: 'Exam',
        label: 'Create Exam',
        path: '/admin/Exam',
        icon: <MdOutlineCreate />
    },
    {
        key: 'ExamSet',
        label: 'Exams ',
        path: '/admin/ExamSet',
        icon: <SiTestcafe />
    },
   
    {
        key: 'Category',
        label: 'Category',
        path: '/admin/category',
        icon: <TbCategory2 />
    },
    {
        key: 'Candidate',
        label: 'Candidate',
        path: '/admin/candidate',
        icon: <SiGoogleforms />
    },
    {
        key: 'AddQuestion',
        label: 'Add Questions',
        path: '/admin/AddQuestion',
        icon: <FaQuestionCircle />
    },
    {
        key: 'question',
        label: 'Questions Bank',
        path: '/admin/question',
        icon: <FaBook />
    },
    {
        key: 'questionSet',
        label: ' Create QuestionSet',
        path: '/admin/questionSet',
        icon: <FaFileCircleQuestion />
    },
    {
        key: 'Score',
        label: 'Score',
        path: '/admin/Score',
        icon: <GrScorecard />
    },

    {
        key: 'questionSetList',
        label: 'Question Sets',
        path: '/admin/questionList',
        icon: <PiCheckSquareOffsetFill />
    },
]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS =[
    {
        key: 'settings',
        label: 'Settings',
        path: '/admin/settings',
        icon: <MdOutlineSettings />

    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/admin/support',
        icon: <BiSupport />
    }
]
