const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center mb-6">
        <img
          src="data:image/jpeg;base64,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"
          alt="About Us"
          className="w-full md:w-1/3 rounded-lg mb-6 md:mb-0 md:mr-6"
        />
        <pre className="p-4 bg-gray-100 rounded-lg text-gray-700 whitespace-pre-wrap flex-grow">
          Recruitment is a vital yet challenging task for many organizations,
          often involving multiple platforms and considerable manual effort. This
          project presents the development of an Automated Job Posting and
          Candidate Assessment System designed to streamline and enhance the
          recruitment process. The primary objective of the system is to simplify
          job postings across various job platforms, such as LinkedIn, Naukri, and
          Indeed, using a single interface. Companies can register on the
          platform, provide their credentials, and post job vacancies
          automatically through integrated APIs. This approach eliminates the need
          to manually post job openings on multiple websites, saving time and
          reducing the possibility of errors.
        </pre>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-6">
        <pre className="p-4 bg-gray-100 rounded-lg text-gray-700 whitespace-pre-wrap flex-grow">
          Additionally, the system provides a comprehensive solution for candidate
          assessment. Companies can create and manage a question bank tailored to
          their specific needs. Once the candidates apply for the job postings,
          companies can assign tests directly through the platform. The system
          supports the creation of various types of questions, including multiple-
          choice, true/false, and descriptive questions. This flexibility allows
          companies to design tests that accurately evaluate the skills and
          knowledge required for the job.
        </pre>
        <img
          src="https://citadelsearch.org/wp-content/uploads/bb-plugin/cache/22-e1623224238943-landscape.png"
          alt="Candidate Assessment"
          className="w-full md:w-1/3 rounded-lg mb-6 md:mb-0 md:ml-6"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center mb-6">
        <img
          src="https://th.bing.com/th/id/OIP.NT5Ijg00qFHzo0m7DE9AfAHaDO?rs=1&pid=ImgDetMain"
          alt="HR Process Automation"
          className="w-full md:w-1/3 rounded-lg mb-6 md:mb-0 md:mr-6"
        />
        <pre className="p-4 bg-gray-100 rounded-lg text-gray-700 whitespace-pre-wrap flex-grow">
          In conclusion, the HR Process Automation System addresses the critical
          needs of modern recruitment processes. By automating job postings and
          integrating candidate assessments into a single platform, the system
          enhances efficiency, reduces manual workload, and improves the overall
          effectiveness of the recruitment process. The use of React, Tailwind CSS,
          and Firebase ensures a robust and scalable solution that can adapt to
          the evolving needs of organizations.
        </pre>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="h-12 w-12 mx-auto mb-4 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12c1.654 0 3 .671 3 1.5S13.654 15 12 15s-3-.671-3-1.5S10.346 12 12 12zm0 0V6m0 0a6 6 0 100 12 6 6 0 100-12z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Expertise</h2>
          <p className="text-gray-700">
            Our team consists of industry experts with extensive experience in
            recruitment and HR technology.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="h-12 w-12 mx-auto mb-4 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 12v7m12-7v7m-6-2V6m-2 2h4m-6 6h2m4 0h2m2 0h.01"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Professionalism</h2>
          <p className="text-gray-700">
            We are committed to delivering the highest standards of professionalism in all our services.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="h-12 w-12 mx-auto mb-4 text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Reliability</h2>
          <p className="text-gray-700">
            Our system is designed to be reliable and efficient, ensuring smooth recruitment processes for our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;