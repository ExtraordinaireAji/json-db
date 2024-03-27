import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  // const api = "https://jsonplaceholder.typicode.com/comments"
  // const fetchApi = () => {
  //     fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err))
  // }

  // const api = "https://jsonplaceholder.typicode.com/comments"
  // const fetchComment = () => {
  //     fetch(api)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.log(error))
  // }
  const [studentsData, setStudentsData] = useState(null)
  const students = "http://localhost:8000/students";
  const fetchStudents = () => {
    fetch(students)
      .then((res) => res.json())
      .then((data) => setStudentsData(data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
      <h1 className="text-center text-secondary text-decoration-underline mt-5">CRUD OPERATION</h1>
      <Link to="/create" className="btn btn-success">Add new +</Link>
        <div className="content d-flex justify-content-center mt-5">
          <table className="table border w-75">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">actions</th>
              </tr>
            </thead>
            <tbody>
              {
                studentsData && studentsData.map((student) => (
                    <tr key={student.id}>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                    <button className="btn btn-primary me-3">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
