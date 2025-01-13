import { Col, Container, Row } from "react-bootstrap";

import { useCallback, useState } from "react";
import { v4 } from "uuid";
import TeachersForm from "./../components/Forms/TeachersForm";
import TeachersHeader from "../components/Header/TeachersHeader";
import TeachersTable from "./../components/Tables/TeachersTable";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.getItem("teachers")) || []
  );
  const [teacher, setTeacher] = useState({
    firstName: "",
    lastName: "",
    age: "",
    salary: "",
    group: "React JS",
    level: "Middle",
  });
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("all");
  const [level, setLevel] = useState("all");

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity()) {
        let newTeacher = {
          ...teacher,
          age: +teacher.age,
          salary: +teacher.salary,
          id: v4(),
        };
        let newTeachers;
        if (selected === null) {
          newTeachers = [...teachers, newTeacher];
        } else {
          newTeachers = teachers.map((teacher) => {
            if (teacher.id === selected) {
              return newTeacher;
            } else {
              return teacher;
            }
          });
        }
        setTeachers(newTeachers);
        setTeacher({
          firstName: "",
          lastName: "",
          age: "",
          salary: "",
          group: "React JS",
          level: "Middle",
        });
        setSelected(null);
        localStorage.setItem("teachers", JSON.stringify(newTeachers));
      } else {
        setValidated(true);
      }
    },
    [teacher, teachers, selected]
  );

  const handleTeacher = useCallback(
    (e) => {
      setTeacher({ ...teacher, [e.target.id]: e.target.value });
    },
    [teacher]
  );

  const deleteTeacher = useCallback(
    (id) => {
      let newTeachers = teachers.filter((teacher) => teacher.id !== id);
      setTeachers(newTeachers);
      localStorage.setItem("teachers", JSON.stringify(newTeachers));
    },
    [teachers]
  );
  const editTeacher = useCallback(
    (id) => {
      let teacher = teachers.find((teacher) => teacher.id === id);
      setSelected(id);
      setTeacher(teacher);
    },
    [teachers]
  );

  const resetTeacher = useCallback(() => {
    setTeacher({
      firstName: "",
      lastName: "",
      age: "",
      salary: "",
      group: "React JS",
      level: "Middle",
    });
  }, []);
  const TeachersFormProps = {
    teacher,
    selected,
    validated,
    handleSubmit,
    resetTeacher,
    handleTeacher,
  };

  const TeachersHeaderProps = {
    group,
    level,
    search,
    setGroup,
    setLevel,
    setSearch,
  };

  const TeachersTableProps = {
    group,
    level,
    search,
    teachers,
    editTeacher,
    deleteTeacher,
  };
  return (
    <Container>
      <h3 className="text-center text-white alert bg-info">Teachers Control</h3>
      <Row>
        <Col md="4">
          <TeachersForm {...TeachersFormProps} />
        </Col>
        <Col md="8">
          <TeachersHeader {...TeachersHeaderProps} />
          <TeachersTable {...TeachersTableProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherPage;
