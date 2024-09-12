import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="homeSection" className="hero min-h-screen bg-gradient-to-r from-[#76ABAE] to-[#222831]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://user-images.githubusercontent.com/46227193/133924458-d6f66df8-f0f8-4d56-951e-213200a2ad83.jpeg" alt="Exam Portal Image" className="w-full lg:w-1/2 lg:mr-6" />
        <div className="flex flex-col justify-center lg:w-1/2">
          <h1 className="text-5xl font-bold mb-4">Welcome to Exam Portal!</h1>
          <p className="text-lg mb-6">Get prepared for your exams with our comprehensive study materials and practice tests. Score high and achieve your academic goals!</p>
        <Link to={'/card'}><button className="rounded-lg w-[50%]  h-12 bg-[#31363F] hover:bg-[#49505d] text-white font-bold">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
