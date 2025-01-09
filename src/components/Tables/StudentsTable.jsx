import { Table } from "react-bootstrap";

const StudentsTable = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>React JS</td>
          <td>12</td>
          <td className="text-center">
            <button className="btn btn-primary">Edit</button>{" "}
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default StudentsTable;
