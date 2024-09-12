import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";

const AboutUs = () => {
  return (
    <div id="aboutSection" className="relative min-h-screen flex items-center justify-center p-8">
    <div className="relative max-w-6xl w-full bg-white bg-opacity-90 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden z-10">
      <div className="md:w-1/2">
        <img className="h-[100%] w-[100%] object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" />
      </div>
      <div className="p-8 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h1>
        <p className="text-gray-700 mb-4">
        An exam portal is an online platform designed to facilitate the administration, delivery, and management of examinations. It offers a comprehensive solution for educational institutions, certification bodies, and training organizations to conduct assessments efficiently and securely. Through user authentication, students, teachers, and administrators can securely log in and access the portal according to their roles, ensuring that appropriate permissions are granted for each user.
        </p>
        <p className="text-gray-700 mb-4">
        One of the primary features of an exam portal is the ability to create and manage exams. Teachers and administrators can easily design various types of questions, including multiple-choice, short answer, and essay formats. They can also set time limits, randomize questions, and schedule exams to suit their needs. This flexibility ensures that exams can be tailored to different subjects and difficulty levels.
        </p>
        <p className="text-gray-700 mb-4">
        The delivery of exams is seamless and user-friendly, allowing students to take their tests on various devices such as desktops, laptops, tablets, and smartphones. To maintain the integrity of the examination process, many portals integrate proctoring features like webcam monitoring, screen recording, and plagiarism detection. These measures help prevent cheating and ensure that the exams are conducted in a fair manner.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://twitter.com" target="blank" className="text-gray-700 hover:text-gray-900">
            <RiTwitterXLine size={30} />
          </a>
          <a href="https://facebook.com" target="blank" className="text-gray-700 hover:text-gray-900">
            <CiFacebook size={30}/>
          </a>
          <a href="https://instagram.com" target="blank" className="text-gray-700 hover:text-gray-900">
          <FaInstagram size={30}/>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUs;
