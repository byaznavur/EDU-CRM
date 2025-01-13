import { Table } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Ball</th>
            <th className="text-center">Came</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Aziz</td>
            <td>Abduhakimov</td>
            <td>80%</td>
            <td className="d-flex gap-2 justify-content-center">
              <button className="btn d-flex align-items-center justify-content-center btn-primary">
                <FaRegCircleCheck />
              </button>
              <button className="btn d-flex align-items-center justify-content-center btn-danger">
                <IoMdCloseCircleOutline />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default HomePage;
