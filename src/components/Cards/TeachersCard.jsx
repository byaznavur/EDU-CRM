import { MdDelete, MdEdit } from "react-icons/md";

const TeachersCard = () => {
  return (
    <tr>
      <td>1</td>
      <td>Ibrohim</td>
      <td>Turaboyev</td>
      <td>React JS</td>
      <td>24</td>
      <td>Senior</td>
      <td>3000</td>
      <td className="text-center d-flex gap-2 justify-content-center">
        <button className="btn btn-primary py-2 d-flex align-items-center justify-content-center">
          <MdEdit />
        </button>
        <button className="btn btn-danger py-2  d-flex align-items-center justify-content-center">
          {" "}
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

export default TeachersCard;
