import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import DatePicker from "react-datepicker";

function handleDate(day, handleChange, name) {
  let e = {
    target: {
      name: name,
      value: day
    },
    preventDefault: () => {
      return "";
    }
  };
  return handleChange(e);
}
const AddMemoryForm = props => {
  const {
    modal,
    toggle,
    onModalClosed,
    handleChange,
    handleSubmit,
    fieldState
  } = props;
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      style={{ maxWidth: 1110 }}
      onClosed={onModalClosed}
    >
      <ModalHeader toggle={toggle}>Add New Memory</ModalHeader>

      <ModalBody>
        <form action="" method="post" novalidate="novalidate">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="form-group">
                <label for="" class="control-label mb-1">
                  Memory Name
                </label>
                <input
                  name="name"
                  type="text"
                  class="form-control"
                  value={fieldState.name.value}
                  onChange={handleChange}
                />
                {fieldState.name.error ? (
                  <small id="first-name-error" className="form-text form-error">
                    Name Is Not Valid
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div class="form-group">
                <label for="" class="control-label mb-1">
                  Date
                </label>
                <div className="w-100" />
                <DatePicker
                  selected={fieldState.memory_date.value}
                  onChange={date => {
                    handleDate(date, handleChange, "memory_date");
                  }}
                  placeholderText="Select Memory Date"
                />
                {fieldState.memory_date.error ? (
                  <small id="first-name-error" className="form-text form-error">
                    Memory Date Is Required
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div class="form-group">
                <label for="" class="control-label mb-1">
                  Memory
                </label>
                <textarea
                  name="description"
                  class="form-control"
                  value={fieldState.description.value}
                  onChange={handleChange}
                />
                {fieldState.description.error ? (
                  <small id="first-name-error" className="form-text form-error">
                    Description Is Not Valid
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div class="form-btn-footer">
                <button
                  id="payment-button"
                  type="submit"
                  class="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
                  <i class="zmdi zmdi-plus" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};
export default AddMemoryForm;
