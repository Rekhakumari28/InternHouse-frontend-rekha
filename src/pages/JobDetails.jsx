import React from "react";
import Header from "../components/Header";
import useFetch from "../../useFetch";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { data, loading, error } = useFetch(
    "https://intern-house-backend-rekha.vercel.app/jobs"
  );
  const jobId = useParams();
  const jobData = data?.find((job) => job._id == jobId.jobId);
 
  return (
    <div>
      <Header />
      <div className="container py-3">
        <h3>{jobData?.jobTitle}</h3>
        <div className="card p-4 container mt-4">
          <p className="mb-2">
            <strong>Company Name: </strong>
            {jobData?.companyName}
          </p>
          <p className="mb-2" >
            <strong>Location: </strong>
            {jobData?.location}
          </p>
          <p className="mb-2"> 
            <strong>Salary: </strong>
            {jobData?.salary}
          </p>
          <p className="mb-2">
            <strong>Job-Type: </strong>
            {jobData?.jobType}
          </p>
          <p className="mb-2">
            <strong>Description: </strong>
            {jobData?.jobDescription}
          </p>
          <ol style={{ padding: 0 }}>
            <strong>Qualification: </strong>
            {jobData?.requireQualifications.split(". ").map((qual) => (
              <li className="ms-4">{qual}</li>
            ))}
          </ol>
        </div>
      </div>
     
    </div>
  );
};

export default JobDetails;
