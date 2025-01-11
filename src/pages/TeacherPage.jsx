import { Col, Container, Row } from "react-bootstrap";
import TeachersForm from "../components/Forms/TeachersForm";
import TeachersHeader from "../components/Header/TeachersHeader";
import TeachersTable from "../components/Tables/TeachersTable";

const TeacherPage = () => {
  return (
    <Container>
      <h3 className="text-center text-white alert bg-info">Teachers Control</h3>

      <Row>
        <Col md="4">
          <TeachersForm />
        </Col>
        <Col md="8">
          <TeachersHeader />
          <TeachersTable />
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherPage;
