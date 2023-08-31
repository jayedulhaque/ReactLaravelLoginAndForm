import { useState } from "react";
import AuthUser from "../AuthUser";
import { useNavigate } from "react-router-dom";
export default function WebinerForm() {
  const navigate = useNavigate();
  const { http } = AuthUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [university, setUniversity] = useState();
  const [semister, setSemister] = useState();
  const [course_name, setCourse] = useState();
  const [webiner_date, setWebinerDate] = useState();
  const handleName = (e) => {
    const nValue = e.target.value;
    setName(nValue);
  };
  const handleEmail = (e) => {
    const eValue = e.target.value;
    setEmail(eValue);
  };
  const handlePhone = (e) => {
    const pValue = e.target.value;
    setPhone(pValue);
  };
  const handleUniversity = (e) => {
    const pValue = e.target.value;
    setUniversity(pValue);
  };
  const handleSemister = (e) => {
    const pValue = e.target.value;
    setSemister(pValue);
  };
  const handleCourse = (e) => {
    const pValue = e.target.value;
    setCourse(pValue);
  };
  const handleWebinerDate = (e) => {
    const pValue = e.target.value;
    setWebinerDate(pValue);
  };
  const submitForm = () => {
    http
      .post("/webinerstudent", {
        name: name,
        email: email,
        phone: phone,
        university: university,
        semister: semister,
        course_name: course_name,
        webiner_date: webiner_date,
      })
      .then((res) => {
        navigate("/login");
      });
  };
  return (
    // <div className="row justify-content-center pt-5">
    //   <div className="col-sm-6">
    //     <div className="card p-4">
    //       <div className="form-group">
    //         <label>Name:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           onChange={handleName}
    //           id="name"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Email address:</label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           onChange={handleEmail}
    //           id="email"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Phone:</label>
    //         <input
    //           type="number"
    //           className="form-control"
    //           onChange={handlePhone}
    //           id="phone"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>University:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           onChange={handleUniversity}
    //           id="uni"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Semister:</label>
    //         <input
    //           type="number"
    //           className="form-control"
    //           onChange={handleSemister}
    //           id="semi"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>CourseName:</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           onChange={handleCourse}
    //           id="course"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Webiner Date:</label>
    //         <input
    //           type="date"
    //           className="form-control"
    //           onChange={handleWebinerDate}
    //           id="webdate"
    //         />
    //       </div>
    //       <button
    //         type="button"
    //         onClick={submitForm}
    //         className="btn btn-primary mt-4"
    //       >
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="card py-5 mt-3">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <form>
            <div className="form-group row">
              <div className="col-sm-6">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleName}
                  id="name"
                />
              </div>
              <div className="col-sm-6">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleEmail}
                  id="email"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <label>Phone:</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handlePhone}
                  id="phone"
                />
              </div>
              <div className="col-sm-6">
                <label>University:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleUniversity}
                  id="uni"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <label>Semister:</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleSemister}
                  id="semister"
                />
              </div>
              <div className="col-sm-3">
                <label>Course:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleCourse}
                  id="course"
                />
              </div>
              <div className="col-sm-3">
                <label>Webiner Date:</label>
                <input
                  type="date"
                  className="form-control"
                  onChange={handleWebinerDate}
                  id="webdatee"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={submitForm}
              className="btn btn-primary mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
