import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
export default function JobList({ data }) {
  const handleDelete = async (jobId) => {
    try {
      const response = await fetch(
        `https://intern-house-backend-rekha.vercel.app/jobs/${jobId}`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw "Failed to delete job post.";
      }
      const data = response.json();
      if (data) {
        toast.success("Post removed successfully.");
        setTimeout(() => {
          window.location.reload()
        }, 3000);
      }
    } catch (error) {
      toast.error("Error occured while deleting job post.", error);
    }
  };

  return (
    <div className="row">
      {data?.map((job) => (
        <div className="col-md-4 my-2" key={job._id}>
          <div className="card p-2">
            <div className="card-body ">
              <h3>{job.jobTitle}</h3>
              <p>
                <strong>Company: </strong>
                {job.companyName}
              </p>
              <p>
                <strong>Location: </strong>
                {job.location}
              </p>
              <p>
                <strong>Job-Type: </strong>
                {job.jobType}
              </p>

              <div className="row">
              <div className="col-md-6 mt-2 px-1">
                <Link
                  className="btn btn-primary" style={{width: "100%"}}
                  to={`/jobDetails/${job._id}`}
                >
                  See Details
                </Link>
                </div>
                <div className="col-md-6 mt-2 px-1">
                <button
                  className="btn btn-danger" style={{width: "100%"}}
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
              </div>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      ))}
    </div>
  );
}
