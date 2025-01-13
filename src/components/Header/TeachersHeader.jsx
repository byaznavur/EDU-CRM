import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";
import { levels } from "../../data/levels";
const TeachersHeader = ({ search, setSearch, level, setLevel }) => {
  return (
    <InputGroup className="mt-4">
      <Form.Control
        value={search}
        onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        placeholder="Searching"
      />
      <InputGroup.Text id="basic-addon2">
        <Form.Select value={level} onChange={(e) => setLevel(e.target.value)}>
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

TeachersHeader.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  level: PropTypes.string,
  setLevel: PropTypes.func,
};
const MemoTeachersHeader = memo(TeachersHeader);
export default MemoTeachersHeader;
