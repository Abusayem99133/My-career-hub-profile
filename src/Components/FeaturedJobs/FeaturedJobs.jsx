import { useEffect } from "react";
import { useState } from "react";
import FeaturesJob from "../Category/FeaturesJob/FeaturesJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-center text-5xl">Featured Jobs {jobs.length}</h1>
        <p></p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturesJob key={job.id} job={job}></FeaturesJob>
        ))}
      </div>
      <div className="text-center mt-6">
        <div className={dataLength === jobs.length ? "hidden" : ""}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary "
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
