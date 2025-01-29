import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HomePage = () => {
  const [students, setStudents] = useState(() => {
    const savedData = localStorage.getItem("students");
    return savedData ? JSON.parse(savedData) : [];
  });

  // Ma'lumotlarni LocalStorage'ga saqlash funksiyasi
  const updateLocalStorage = (data) => {
    localStorage.setItem("students", JSON.stringify(data));
  };

  // Ballni qo'shish funksiyasi
  const handleBallChange = (index, value) => {
    const updatedStudents = [...students];
    updatedStudents[index].ball = value;
    setStudents(updatedStudents);
    updateLocalStorage(updatedStudents);
  };

  // Yoqlama holatini yangilash funksiyasi
  const toggleAttendance = (index, attended) => {
    const updatedStudents = [...students];
    updatedStudents[index].attended = attended;
    setStudents(updatedStudents);
    updateLocalStorage(updatedStudents);
  };

  return (
    <div className="container">
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Ball</th>
            <th className="text-center">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>
                {student.ball !== undefined ? (
                  <span className="fw-bold">{student.ball}%</span>
                ) : (
                  <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Ball kiriting"
                    onBlur={(e) => handleBallChange(i, e.target.value)}
                    className="form-control"
                  />
                )}
              </td>
              <td className="d-flex gap-2 justify-content-center">
                <button
                  className={`btn ${
                    student.attended ? "btn-success" : "btn-outline-success"
                  }`}
                  onClick={() => toggleAttendance(i, true)}
                >
                  <FaRegCircleCheck />
                </button>
                <button
                  className={`btn ${
                    !student.attended ? "btn-danger" : "btn-outline-danger"
                  }`}
                  onClick={() => toggleAttendance(i, false)}
                >
                  <IoMdCloseCircleOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default HomePage;
