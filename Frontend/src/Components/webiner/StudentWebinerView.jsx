import { useState, useEffect } from "react";
import AuthUser from "../AuthUser";
import { useNavigate, useParams } from "react-router-dom";
export default function StudentWebinerEdit(props) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [semister, setSemister] = useState("");
  const [course_name, setCourse] = useState("");
  const [webiner_date, setWebinerDate] = useState("");
  const { http } = AuthUser();
  const { id } = useParams();
  useEffect(() => {
    http.get("/webinerstudent/" + id).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setUniversity(res.data.university);
      setSemister(res.data.semister);
      setCourse(res.data.course_name);
      setWebinerDate(res.data.webiner_date);
      console.log(res);
    });
  }, []);
  return (
    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4">
          <h4>Name</h4>
          <p>{name}</p>
          <h4>Email</h4>
          <p>{email}</p>
          <h4>Phone</h4>
          <p>{phone}</p>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card p-4">
          <h4>University</h4>
          <p>{university}</p>
          <h4>Course</h4>
          <p>{course_name}</p>
          <h4>Webiner Date</h4>
          <p>{webiner_date}</p>
        </div>
      </div>
    </div>
  );
}
