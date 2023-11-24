import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaDollarSign, FaUser } from 'react-icons/fa';
import { useEffect } from "react";

const Featured = () => {

  const [jobData,setdata] = useState([])
      useEffect(() => {
      fetch(`https://career-canvas-backend.vercel.app/jobs`)
      .then((res) => res.json())
      .then((data) => {
      setdata(data);
      })
      .catch((error) => {
      console.error("Error fetching data:", error);
      });
      }, []);
          const [showCard, setShowCard] = useState("all");

          const handlejobs = (category) => {
           setShowCard(category);
          };

  return (
    <div className="max-w-7xl mx-auto px-3 lg:px-0 " style={{ overflowX: 'hidden' }}>
      <div className="text-center my-6">
      <h2 className="text-black mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
      Most popular dishes
      </h2>
      <p className="text-body-color text-base dark:text-dark-6">
      There are many variations of passages of Lorem Ipsum available
      but the majority have suffered alteration in some form.
      </p>
      </div>
      <ul className="flex flex-wrap justify-center mb-12 space-x-1">
        <li className="mb-1">
          <button
            onClick={() => handlejobs("all")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "all"
                ? "activeClasses bg-yellow-400 text-black"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-yellow-400 hover:text-black"
            }`}
          >
             Breakfast
          </button>
        </li>
        <li className="mb-1">
          <button
            onClick={() => handlejobs("Branding")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "Branding"
                ? "activeClasses bg-yellow-400 text-black"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-yellow-400 hover:text-black"
            }`}
          >
           Lunch
          </button>
        </li>
        <li className="mb-1">
          <button
            onClick={() => handlejobs("Marketing")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "Marketing"
                ? "activeClasses bg-yellow-400 text-black"
                : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            Dinner
          </button>
        </li>
        {/* <li className="mb-1">
          <button
            onClick={() => handlejobs("Development")}
            className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
              showCard === "Development"
                ? "activeClasses bg-yellow-400 text-black"
                : "inactiveClasses text-body-color  hover:bg-yellow-400 hover:text-black"
            }`}
          >
           Dinner
          </button>
        </li> */}
        
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        {jobData.slice(0,6).map((job, index) => (
          <PortfolioCard
            key={index}
            showCard={showCard}
            category={job.category}
            brandImg={job.brandImg}
            title={job.jobTitle}
            jobType={job.jobType}
            employer={job.employer}
            postingDate={job.postingDate}
            deadline={job.deadline}
            salary={job.salary}
            applicantsNumber={job.applicantsNumber}
            id={job._id}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to= "/allmeals" >
        <button className="btn bg-violet-500 text-white hover:bg-violet-400">See All</button>
        </Link>
      </div>
    </div>
  );
};

const PortfolioCard = ({
  id,
  showCard,
  category,
  brandImg,
  title,
  jobType,
  employer,
  postingDate,
  deadline,
  salary,
  applicantsNumber,

}) => {
  return (
    <div
      className={`${
        showCard === "all" || showCard === category
          ? "block"
          : "hidden"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-transform hover:-translate-y-2 animate__animated animate__fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
        <div className="flex items-center">
          <div className="mr-4">
            <img src={brandImg} className="w-16 h-16 rounded-full border-none" />
          </div>
          <div>
            <h6 className="text-xl font-bold">
              {title}
            </h6>
            <div className="text-gray-600 text-sm">
              <h1 className="text-violet-400">{employer}</h1>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xl">
  <div className=" text-gray-600">
    <FaClock className="inline mr-2" />Posted: {postingDate} Days ago
  </div>
  <div className=" text-gray-600">
    <FaCalendarAlt className="inline mr-2" /> {deadline}
  </div>
  <div className=" text-gray-600">
    <FaDollarSign className="inline mr-2" /> Salary Range: {salary}$
  </div>
  <div className=" text-gray-600">
    <FaUser className="inline mr-2" /> {applicantsNumber} Applicants
  </div>
</div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex-grow">
              <button className="btn btn-small bg-green-600 text-white mr-2">{jobType}</button>
              <Link to={`/details/${id}`} className="btn mb-1 btn-small bg-violet-500 text-white mr-2">
        View Details
        </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
  
};

export default Featured;