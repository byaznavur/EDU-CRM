import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { memo } from "react";
import TeachersCard from "../Cards/TeachersCard";
const TeachersTable = ({
  teachers,
  deleteTeacher,
  editTeacher,
  search,
  group,
  level,
}) => {
  let results = teachers.filter((teacher) =>
    teacher.firstName.toLowerCase().includes(search)
  );
  if (level !== "all") {
    results = teachers.filter((teacher) => teacher.group === group);
  }
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Groups</th>
          <th>Level</th>
          <th>Age</th>
          <th>Salary</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {results.length !== 0 ? (
          results.map((teacher, i) => (
            <TeachersCard
              {...teacher}
              order={i + 1}
              key={teacher.id}
              editTeacher={editTeacher}
              deleteTeacher={deleteTeacher}
            />
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center">
              No Teacher
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

TeachersTable.propTypes = {
  teachers: PropTypes.array,
  search: PropTypes.string,
  group: PropTypes.string,
  level: PropTypes.string,
  deleteTeacher: PropTypes.func,
  editTeacher: PropTypes.func,
};
const MemoTeachersTable = memo(TeachersTable);
export default MemoTeachersTable;
