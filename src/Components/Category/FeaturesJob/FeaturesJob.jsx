import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const FeaturesJob = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="">
          <button className="px-5 text-[#7e90fe] py-2 font-extrabold border rounded border-[#7e90fe] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 text-[#7e90fe] py-2 font-extrabold border rounded border-[#7e90fe] mr-4">
            {job_type}
          </button>
        </div>
        <div className="flex">
          <h2 className="text-2xl">
            <CiLocationOn />
          </h2>
          <p>{location}</p>
          <h2 className="text-2xl">
            <CiDollar />
          </h2>
          <p> {salary}</p>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesJob;
