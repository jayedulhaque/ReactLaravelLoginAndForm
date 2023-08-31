import { useState, useEffect } from "react";
import AuthUser from "../AuthUser";
import { useNavigate, useParams } from "react-router-dom";
export default function StudentWebinerEdit(props) {
  const navigate = useNavigate();
  const { http} = AuthUser();
  const [inputs, setInputs] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [semister, setSemister] = useState("");
  const [course_name, setCourse] = useState("");
  const [webiner_date, setWebinerDate] = useState("");
  const {id} =useParams();
  useEffect(() => {
    http.get('/webinerstudent/'+id+'/edit').then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setUniversity(res.data.university);
      setSemister(res.data.semister);
      setCourse(res.data.course_name);
      setWebinerDate(res.data.webiner_date);
      setInputs(res.data);
      console.log(res);
    });
  }, []);
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
    http.put("/webinerstudent/"+id, {name:name, email: email, phone: phone, university: university, semister: semister, course_name: course_name, webiner_date: webiner_date }).then((res) => {
      navigate('/studentwebiner');
      console.log(res.data);
    });
  };
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={handleName}
              id="name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmail}
              id="email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone:</label>
            <input
              type="number"
              className="form-control"
              value={phone}
              onChange={handlePhone}
              id="phone"
            />
          </div>
          <div className="form-group mt-3">
            <label>University:</label>
            <input
              type="text"
              className="form-control"
              value={university}
              onChange={handleUniversity}
              id="uni"
            />
          </div>
          <div className="form-group mt-3">
            <label>Semister:</label>
            <input
              type="number"
              className="form-control"
              value={semister}
              onChange={handleSemister}
              id="semi"
            />
          </div>
          <div className="form-group mt-3">
            <label>CourseName:</label>
            <input
              type="text"
              className="form-control"
              value={course_name}
              onChange={handleCourse}
              id="course"
            />
          </div>
          <div className="form-group mt-3">
            <label>Webiner Date:</label>
            <input
              type="date"
              className="form-control"
             value={webiner_date}
              onChange={handleWebinerDate}
              id="webdate"
            />
          </div>
          <button
            type="button"
            onClick={submitForm}
            className="btn btn-primary mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
