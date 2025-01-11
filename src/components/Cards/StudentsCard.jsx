import { PropTypes } from "prop-types";
import { memo } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const StudentsCard = ({
  firstName,
  lastName,
  group,
  age,
  order,
  id,
  deleteStudent,
  editStudent,
}) => {
  console.log("Students Card");

  return (
    <tr>
      <td>{order}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{group}</td>
      <td>{age}</td>
      <td className="text-center d-flex gap-2 justify-content-center">
        <button
          onClick={() => editStudent(id)}
          className="btn btn-primary py-2 d-flex align-items-center justify-content-center"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => deleteStudent(id)}
          className="btn btn-danger py-2  d-flex align-items-center justify-content-center"
        >
          {" "}
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

StudentsCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  group: PropTypes.string,
  age: PropTypes.number,
  order: PropTypes.number,
  id: PropTypes.string,
  deleteStudent: PropTypes.func,
  editStudent: PropTypes.func,
};
const MemoStudentsCard = memo(StudentsCard);
export default MemoStudentsCard;
