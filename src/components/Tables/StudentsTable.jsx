import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import StudentsCard from "../Cards/StudentsCard";
const StudentsTable = ({ students, deleteStudent, editStudent }) => {
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
        {students.length !== 0 ? (
          students.map((student, i) => (
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
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
};

export default StudentsTable;
