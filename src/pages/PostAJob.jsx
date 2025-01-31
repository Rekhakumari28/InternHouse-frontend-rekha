import React, { useState } from "react";
import Header from "../components/Header";
import toast, {Toaster} from "react-hot-toast";
const PostAJob = () => {
  const [jobTitle, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState();
  const [jobType, setJobType] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requireQualifications, setRequireQualifications] = useState("");
  
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const requestedData ={
      jobTitle: jobTitle,
      companyName: companyName,
      location: location,
      salary: parseInt(salary),
      jobType: jobType,
      jobDescription: jobDescription,
      requireQualifications:requireQualifications
    }
    try {
      const response = await fetch(
        "https://intern-house-backend-rekha.vercel.app/jobs",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(requestedData),
        }
      );
      if (!response.ok) {
        throw "Failed to add job post.";
      }
      const data = response.json();
      if (data) {        
        toast.success("Job Added Successfully");
        setTitle("")
        setCompanyName("")
        setLocation("")
        setSalary("")
        setJobType("")
        setJobDescription("")
        setRequireQualifications("")
        setTimeout(() => {
          window.location.reload()
        }, 3000);
      }
    } catch (error) {
      toast.error("Error while adding job post", error);
    }
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
            type="number"
            className="form-control"
            onChange={(event) => setSalary(event.target.value)}
          />

          <label htmlFor="jobType" className="form-label mt-1">
            Job Type:
          </label>
          <select
            type="text"
            className="form-control"
            onChange={(event) => setJobType(event.target.value)}
          >
            <option ></option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select>

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
            onChange={(event) => setRequireQualifications(event.target.value)}
          ></textarea>

          <button className="btn btn-primary my-3" type="submit">
            Post Job
          </button>
        </form>
      </div>
        <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default PostAJob;
