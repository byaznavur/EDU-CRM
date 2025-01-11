import { Col, Container, Row } from "react-bootstrap";
import StudentsForm from "../components/Forms/StudentsForm";
import StudentsHeader from "../components/Header/StudentsHeader";
import StudentsTable from "../components/Tables/StudentsTable";
import { useCallback, useState } from "react";
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
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("all");

  const handleSubmit = useCallback(
    (event) => {
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
    },
    [student, students, selected]
  );

  const handleStudent = useCallback(
    (e) => {
      setStudent({ ...student, [e.target.id]: e.target.value });
    },
    [student]
  );

  const deleteStudent = useCallback(
    (id) => {
      let newStudents = students.filter((student) => student.id !== id);
      setStudents(newStudents);
      localStorage.setItem("students", JSON.stringify(newStudents));
    },
    [students]
  );
  const editStudent = useCallback(
    (id) => {
      let student = students.find((student) => student.id === id);
      setSelected(id);
      setStudent(student);
    },
    [students]
  );

  const resetStudent = useCallback(() => {
    setStudent({ firstName: "", lastName: "", age: "", group: "React JS" });
  }, []);
  const StudentsFormProps = {
    student,
    selected,
    validated,
    handleSubmit,
    resetStudent,
    handleStudent,
  };

  const StudentsHeaderProps = {
    group,
    search,
    setGroup,
    setSearch,
  };

  const StudentsTableProps = {
    group,
    search,
    students,
    editStudent,
    deleteStudent,
  };
  return (
    <Container>
      <h3 className="text-center text-white alert bg-info">Students Control</h3>
      <Row>
        <Col md="4">
          <StudentsForm {...StudentsFormProps} />
        </Col>
        <Col md="8">
          <StudentsHeader {...StudentsHeaderProps} />
          <StudentsTable {...StudentsTableProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentPage;
