import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "./Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  // console.log(job);
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2 className="text-4xl p-4">Applying Details</h2>
          <h2>Job Details: {job.job_title} </h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2 className="text-4xl p-4">Apply Details</h2>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Applying Job
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
