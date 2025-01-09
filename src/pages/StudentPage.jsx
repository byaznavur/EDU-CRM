import { Col, Container, Row } from "react-bootstrap";
import StudentsForm from "../components/Forms/StudentsForm";
import StudentsHeader from "../components/Header/StudentsHeader";
import StudentsTable from "../components/Tables/StudentsTable";

const StudentPage = () => {
  return (
    <Container>
      <h3 className="text-center text-white alert bg-info">Students Control</h3>
      <Row>
        <Col md="4">
          <StudentsForm />
        </Col>
        <Col md="8">
          <StudentsHeader />
          <StudentsTable />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentPage;
