import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { groups } from "../../data/groups";

const StudentsForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      console.log("Work");
    } else {
      setValidated(true);
    }
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" md="4" controlId="firstname">
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="lastname">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" />
        <Form.Control.Feedback type="invalid">
          Please fill !
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" md="4" controlId="groups">
        <Form.Label>Groups</Form.Label>
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
      <div className="d-flex justify-content-between">
        <Button variant="danger">Reset</Button>
        <Button variant="primary">Add Students</Button>
      </div>
    </Form>
  );
};

export default StudentsForm;
