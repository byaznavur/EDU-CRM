import { Col, Container, Row } from "react-bootstrap";
import StudentsForm from "../components/Forms/StudentsForm";
import StudentsHeader from "../components/Header/StudentsHeader";
import StudentsTable from "../components/Tables/StudentsTable";
import { useState } from "react";
import { v4 } from "uuid";

const StudentPage = () => {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    group: "React JS",
  });
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      let newStudent = { ...student, age: +student.age, id: v4() };
      let newStudents;
      if (selected === null) {
        newStudents = [...students, newStudent];
      } else {
        newStudents = students.map((student) => {
          if (student.id === selected) {
            return newStudent;
          } else {
            return student;
          }
        });
      }
      setStudents(newStudents);
      setStudent({ firstName: "", lastName: "", age: "", group: "React JS" });
      setSelected(null);
      localStorage.setItem("students", JSON.stringify(newStudents));
    } else {
      setValidated(true);
    }
  };

  const handleStudent = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };
  const deleteStudent = (id) => {
    let newStudents = students.filter((student) => student.id !== id);
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));
  };
  const editStudent = (id) => {
    let student = students.find((student) => student.id === id);
    setSelected(id);
    setStudent(student);
  };

  const resetStudent = () => {
    setStudent({ firstName: "", lastName: "", age: "", group: "React JS" });
  };
  return (
    <Container>
      <h3 className="text-center text-white alert bg-info">Students Control</h3>
      <Row>
        <Col md="4">
          <StudentsForm
            student={student}
            selected={selected}
            validated={validated}
            handleSubmit={handleSubmit}
            resetStudent={resetStudent}
            handleStudent={handleStudent}
          />
        </Col>
        <Col md="8">
          <StudentsHeader />
          <StudentsTable
            editStudent={editStudent}
            deleteStudent={deleteStudent}
            students={students}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentPage;
