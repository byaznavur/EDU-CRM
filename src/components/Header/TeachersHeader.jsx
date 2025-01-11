import { Form, InputGroup } from "react-bootstrap";
import { levels } from "../../data/groups";

const TeachersHeader = () => {
  return (
    <InputGroup className="mt-4">
      <Form.Control placeholder="Searching" />
      <InputGroup.Text id="basic-addon2">
        <Form.Select>
          <option value="all">All Groups</option>
          {levels.map((level) => (
            <option value={level} key={level}>
              {level}
            </option>
          ))}
        </Form.Select>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default TeachersHeader;
