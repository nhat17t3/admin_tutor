import React from 'react';
import PropTypes from 'prop-types';

ItemStudent.propTypes = {
  student: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

ItemStudent.defaultProps = {
  student: {},
  onEditClick: null,
  onRemoveClick: null,
}

function ItemStudent(props) {
  const { student, onEditClick, onRemoveClick } = props;

//   const handleEditClick = () => {
//     if (onEditClick) onEditClick(student);
//   }

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(student);
  }

  return (
    <>
        <tr key={student.id}>
                        <td style={{width: '10%'}}>
                        {student.id}
                        </td>
                        <td style={{width: '20%'}}>
                        {student.name}
                        </td>
                        <td style={{width: '20%'}}>
                        {student.email}
                        </td>
                        <td style={{width: '20%'}}>
                        {student.phonenumber}
                        </td>
                        <td className="project-actions text-center" style={{width: '30%'}}>
                        <button className="btn btn-primary btn-sm "  style={{margin:5}} >
                            <i className="fas fa-folder">
                            </i>
                            View
                        </button>
                        <button className="btn btn-info btn-sm"  style={{margin:5}} >
                            <i className="fas fa-pencil-alt">
                            </i>
                            Edit
                        </button>
                        <button className="btn btn-danger btn-sm"  style={{margin:5}} onClick={handleRemoveClick}>
                            <i className="fas fa-trash">
                            </i>
                            Delete
                        </button>
                        </td>
                    </tr>
    </>
  );
}

export default ItemStudent;