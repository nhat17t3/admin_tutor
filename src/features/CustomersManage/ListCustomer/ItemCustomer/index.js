import React from "react";
import PropTypes from "prop-types";

CustomerItem.propTypes = {
  customer: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

CustomerItem.defaultProps = {
  customer: {},
  onEditClick: null,
  onRemoveClick: null,
  onViewClick: null,
};

function CustomerItem(props) {
  const { customer, onEditClick, onRemoveClick, onViewClick } = props;

  const handleEditClick = () => {
    if (onEditClick) onEditClick(customer);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(customer);
  };

  const handleViewClick = () => {
    if (onViewClick) onViewClick(customer);
  };

  return (
    <>
      <tr key={customer.id}>
        <td style={{ width: "10%" }}>{customer.id}</td>
        <td style={{ width: "20%" }}>{customer.name}</td>
        <td style={{ width: "20%" }}>{customer.email}</td>
        <td style={{ width: "20%" }}>{customer.phonenumber}</td>
        <td className="project-actions text-center" style={{ width: "20%" }}>
          <button
            className="btn btn-primary btn-sm "
            style={{ margin: 5 }}
            onClick={handleViewClick}
          >
            <i className="fas fa-folder"></i>
            View
          </button>
          <button
            className="btn btn-info btn-sm"
            style={{ margin: 5 }}
            onClick={handleEditClick}
          >
            <i className="fas fa-pencil-alt"></i>
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            style={{ margin: 5 }}
            onClick={handleRemoveClick}
          >
            <i className="fas fa-trash"></i>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default CustomerItem;
