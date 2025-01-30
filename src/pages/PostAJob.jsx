import React, { useState } from "react";
import Header from "../components/Header";

const PostAJob = () => {
  const [jobTitle, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobQualifications, setJobQualifications] = useState("");
  const [formData, setFormData] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mt-2">Post a Job</h2>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="jobTitle" className="form-label mt-1">
            Job Title:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setTitle(event.target.value)}
          />

          <label htmlFor="companyName" className="form-label mt-1">
            Company Name:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setCompanyName(event.target.value)}
          />

          <label htmlFor="location" className="form-label mt-1">
            Location:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setLocation(event.target.value)}
          />

          <label htmlFor="salary" className="form-label mt-1">
            Salary:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setSalary(event.target.value)}
          />

          <label htmlFor="jobType" className="form-label mt-1">
            Job Type:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setJobType(event.target.value)}
          />

          <label htmlFor="jobDescription" className="form-label mt-1">
            Job Description:
          </label>
          <textarea
            type="text"
            className="form-control"
            onChange={(event) => setJobDescription(event.target.value)}
          ></textarea>

          <label htmlFor="jobQualifications" className="form-label mt-1">
            Job Qualifications:
          </label>
          <textarea
            type="text"
            className="form-control"
            onChange={(event) => setJobQualifications(event.target.value)}
          ></textarea>

          <button className="btn btn-primary my-3" type="submit">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostAJob;
