import Validate from "./InputValidation";
const FormValidation = {
  REQUIRED: function(value) {
    return Validate.validateRequired(value) ? true : false;
  },
  EMAIL: function(value) {
    return Validate.validateEmail(value) ? true : false;
  },
  LETTER: function(value) {
    return Validate.validateletters(value) ? true : false;
  },
  NUMBER: function(value) {
    return Validate.validateNumber(value) ? true : false;
  }
};

const FieldValidator = field => {
  let result = [];
  field.constraints.map((constraint, index) => {
    if (!FormValidation[constraint](field.value)) {
      result.push(false);
    }
  });
  return !result.includes(false);
};

export { FieldValidator };
