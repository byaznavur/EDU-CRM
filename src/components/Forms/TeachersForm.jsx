import { Button, Form } from "react-bootstrap";
import { groups, levels } from "../../data/groups";

const TeachersForm = () => {
  return (
    <Form noValidate className="mb-3">
      <Form.Group className="mb-3" md="4" controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="group">
        <Form.Label>Groups </Form.Label>
        <Form.Select>
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
        <Form.Control required type="number" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="level">
        <Form.Label>Level</Form.Label>
        <Form.Select>
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
      <Form.Group className="mb-3" md="4" controlId="salary">
        <Form.Label>Salary</Form.Label>
        <Form.Control required type="number" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Button variant="danger">Reset</Button>
        <Button type="submit" variant="primary">
          Add Students
        </Button>
      </div>
    </Form>
  );
};

export default TeachersForm;
