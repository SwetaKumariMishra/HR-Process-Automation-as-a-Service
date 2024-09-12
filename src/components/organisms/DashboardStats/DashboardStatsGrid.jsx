import { PiExamLight } from "react-icons/pi";
import { PiUsersThreeFill } from "react-icons/pi";
import { CgInternal } from "react-icons/cg";
import { FaMarker } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { RiBook2Line } from "react-icons/ri";

const DashboardStatsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <DashboardBox
        icon={<FaMarker className="text-3xl text-white" />}
        title="Total Exams"
        value="1249"
        color="bg-sky-500"
      />
      <DashboardBox
        icon={<PiUsersThreeFill className="text-3xl text-white" />}
        title="Recruitment Pipeline"
        value="27 Candidates"
        color="bg-red-500"
      />
      <DashboardBox
        icon={<CgInternal className="text-3xl text-white" />}
        title="Applications Submitted"
        value="345"
        color="bg-amber-500"
      />
      <DashboardBox
        icon={<PiExamLight className="text-3xl text-white" />}
        title="Average Exam Score"
        value="70%"
        color="bg-green-500"
      />
      <DashboardBox
        icon={<AiOutlineClockCircle className="text-3xl text-white" />}
        title="Average Duration"
        value="45 min"
        color="bg-purple-500"
      />
      <DashboardBox
        icon={<BsFileEarmarkText className="text-3xl text-white" />}
        title="Total Questions"
        value="8500"
        color="bg-yellow-500"
      />
      <DashboardBox
        icon={<GiTeacher className="text-3xl text-white" />}
        title="Total Instructors"
        value="57"
        color="bg-blue-500"
      />
      <DashboardBox
        icon={<RiBook2Line className="text-3xl text-white" />}
        title="Courses Offered"
        value="32"
        color="bg-pink-500"
      />
    </div>
  );
};


const DashboardBox = ({ icon, title, value, color }) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center">
    <div className={`rounded-full h-16 w-16 flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div className="mt-4 text-center">
      <span className="text-sm text-gray-500 font-light">{title}</span>
      <div className="flex items-center justify-center mt-2">
        <strong className="text-3xl text-gray-700 font-semibold">{value}</strong>
      </div>
    </div>
  </div>
);

export default DashboardStatsGrid;
