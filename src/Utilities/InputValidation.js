const Validate = {
  validateEmail: function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  validateNumber: function(field) {
    let re = /^[0-9]+$/;
    return re.test(field);
  },
  validateletters: function(field) {
    let re = /^[A-Za-z ]+$/;
    return re.test(field);
  },

  validateRequired: function(field) {
    if (field == "") {
      return false;
    } else {
      return true;
    }
  }
};
export default Validate;
