import AuthUser from "../AuthUser";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function StudentWebiner() {
  const { http } = AuthUser();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    http.get("/webinerstudent").then((res) => {
      setStudents(res.data);
    });
  }, []);
  const deleteStudent = (id) =>{
    console.log("hello");
    http.delete("/webinerstudent/"+ id).then(() => {
      http.get("/webinerstudent").then((res) => {
        setStudents(res.data);
      });
    });
  }
  return (
    <div>
      <h2>Users Listing...</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Course</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <th scope="row">{++index}</th>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.course_name}</td>
              <td>{student.webiner_date}</td>
              <td>
              <Link className="btn btn-info" to={{pathname:"/studentwebineredit/"+student.id}}>
                Edit
              </Link>
              <Link className="btn btn-primary" to={{pathname:"/studentwebinerview/"+student.id}}>
                view
              </Link>
              <button type="button" className="btn btn-danger" onClick={()=>{deleteStudent(student.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
