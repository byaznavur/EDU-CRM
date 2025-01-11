import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import StudentsCard from "../Cards/StudentsCard";
import { memo } from "react";
const StudentsTable = ({
  students,
  deleteStudent,
  editStudent,
  search,
  group,
}) => {
  console.log("Students Table");
  let results = students.filter((student) =>
    student.firstName.toLowerCase().includes(search)
  );
  if (group !== "all") {
    results = students.filter((student) => student.group === group);
  }
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Groups</th>
          <th>Age</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {results.length !== 0 ? (
          results.map((student, i) => (
            <StudentsCard
              {...student}
              order={i + 1}
              key={student.id}
              editStudent={editStudent}
              deleteStudent={deleteStudent}
            />
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center">
              No Students
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

StudentsTable.propTypes = {
  students: PropTypes.array,
  search: PropTypes.string,
  group: PropTypes.string,
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
};
const MemoStudentsTable = memo(StudentsTable);
export default MemoStudentsTable;
