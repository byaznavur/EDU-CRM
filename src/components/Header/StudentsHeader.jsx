import { Form, InputGroup } from "react-bootstrap";
import { groups } from "../../data/groups";

const StudentsHeader = () => {
  return (
    <InputGroup className="mt-4">
      <Form.Control placeholder="Searching" />
      <InputGroup.Text id="basic-addon2">
        <Form.Select>
          <option value="all">All Groups</option>
          {groups.map((group) => (
            <option value={group} key={group}>
              {group}
            </option>
          ))}
        </Form.Select>
      </InputGroup.Text>
    </InputGroup>
  );
};

export default StudentsHeader;
