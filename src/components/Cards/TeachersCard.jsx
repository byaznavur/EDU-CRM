import { PropTypes } from "prop-types";
import { memo } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const TeachersCard = ({
  firstName,
  lastName,
  group,
  age,
  salary,
  order,
  level,
  id,
  deleteTeacher,
  editTeacher,
}) => {
  console.log("Teachers Card");

  return (
    <tr>
      <td>{order}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{group}</td>
      <td>{level}</td>
      <td>{age}</td>
      <td>{salary}$</td>
      <td className="text-center d-flex gap-2 justify-content-center">
        <button
          onClick={() => editTeacher(id)}
          className="btn btn-primary py-2 d-flex align-items-center justify-content-center"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => deleteTeacher(id)}
          className="btn btn-danger py-2  d-flex align-items-center justify-content-center"
        >
          {" "}
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

TeachersCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  group: PropTypes.string,
  level: PropTypes.string,
  age: PropTypes.number,
  salary: PropTypes.number,
  order: PropTypes.number,
  id: PropTypes.string,
  deleteTeacher: PropTypes.func,
  editTeacher: PropTypes.func,
};
const MemoTeachersCard = memo(TeachersCard);
export default MemoTeachersCard;
