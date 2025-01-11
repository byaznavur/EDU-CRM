import { Form, InputGroup } from "react-bootstrap";
import { groups } from "../../data/groups";
import PropTypes from "prop-types";
import { memo } from "react";
const StudentsHeader = ({ search, setSearch, group, setGroup }) => {
  console.log("Students Header");
  return (
    <InputGroup className="mt-4">
      <Form.Control
        value={search}
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        placeholder="Searching"
      />
      <InputGroup.Text id="basic-addon2">
        <Form.Select value={group} onChange={(e) => setGroup(e.target.value)}>
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

StudentsHeader.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  group: PropTypes.string,
  setGroup: PropTypes.func,
};
const MemoStudentsHeader = memo(StudentsHeader);
export default MemoStudentsHeader;
