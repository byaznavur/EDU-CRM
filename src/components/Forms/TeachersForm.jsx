import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { groups } from "../../data/groups";
import { levels } from "../../data/levels";

const TeachersForm = ({
  selected,
  validated,
  handleSubmit,
  handleTeacher,
  resetTeacher,
  teacher: { firstName, lastName, age, group, salary, level },
}) => {
  return (
    <Form
      noValidate
      validated={validated}
      className="mb-3"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" md="4" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          onChange={handleTeacher}
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
          onChange={handleTeacher}
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
        <Form.Select onChange={handleTeacher} value={group}>
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
      <Form.Group className="mb-3" md="4" controlId="level">
        <Form.Label>Levels</Form.Label>
        <Form.Select onChange={handleTeacher} value={level}>
          {levels.map((level) => (
            <option value={level} key={level}>
              {level}
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
          onChange={handleTeacher}
          value={age}
          required
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" md="4" controlId="salary">
        <Form.Label>Salary</Form.Label>
        <Form.Control
          onChange={handleTeacher}
          value={salary}
          required
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button variant="danger" onClick={resetTeacher}>
          Reset
        </Button>
        <Button type="submit" variant="primary">
          {selected === null ? "Add Teachers" : "Save Teachers"}
        </Button>
      </div>
    </Form>
  );
};

TeachersForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleTeacher: PropTypes.func,
  resetTeacher: PropTypes.func,
  teacher: PropTypes.object,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default TeachersForm;
