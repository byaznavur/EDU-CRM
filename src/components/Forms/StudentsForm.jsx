import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { groups } from "../../data/groups";

const StudentsForm = ({
  selected,
  validated,
  handleSubmit,
  handleStudent,
  resetStudent,
  student: { firstName, lastName, age, group },
}) => {
  console.log("Students Form");
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" md="4" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          onChange={handleStudent}
          value={firstName}
          required
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          onChange={handleStudent}
          value={lastName}
          required
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="group">
        <Form.Label>Groups</Form.Label>
        <Form.Select onChange={handleStudent} value={group}>
          {groups.map((group) => (
            <option value={group} key={group}>
              {group}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          onChange={handleStudent}
          value={age}
          required
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button variant="danger" onClick={resetStudent}>
          Reset
        </Button>
        <Button type="submit" variant="primary">
          {selected === null ? "Add Students" : "Save Students"}
        </Button>
      </div>
    </Form>
  );
};

StudentsForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleStudent: PropTypes.func,
  resetStudent: PropTypes.func,
  student: PropTypes.object,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default StudentsForm;
