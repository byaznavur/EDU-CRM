import { Table } from "react-bootstrap";
import TeachersCard from "../Cards/TeachersCard";

const TeachersTable = () => {
  return (
    <Table striped bordered hover className="mt-3">
      <thead>
        <tr>
          <th>No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Groups</th>
          <th>Age</th>
          <th>Level</th>
          <th>Salary</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <TeachersCard />
      </tbody>
    </Table>
  );
};

export default TeachersTable;
