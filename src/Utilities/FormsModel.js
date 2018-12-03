function LeadFields() {
  this.first_name = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.surname = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.address_line_one = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
  this.address_line_two = {
    value: "",
    error: false,
    constraints: []
  };
  this.email = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "EMAIL"]
  };
  this.phone_number = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "NUMBER"]
  };
  this.city = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.postcode = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.channel = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
  this.country = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
}

function ClientFields() {
  this.first_name = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.surname = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.address_line_one = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
  this.address_line_two = {
    value: "",
    error: false,
    constraints: []
  };
  this.email = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "EMAIL"]
  };
  this.phone_number = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "NUMBER"]
  };
  this.city = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.postcode = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };

  this.country = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
}
function ClientEditFields() {
  this.first_name = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.surname = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.address_line_one = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
  this.address_line_two = {
    value: "",
    error: false,
    constraints: []
  };
  this.email = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "EMAIL"]
  };
  this.phone_number = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "NUMBER"]
  };
  this.city = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.postcode = {
    value: "",
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.country = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
}
function SubscriptionFields(
  id = "",
  subsPackage = "",
  description = "",
  start_date = ""
) {
  this.subscription_id = {
    value: id,
    error: false,
    constraints: ["REQUIRED", "NUMBER"]
  };
  this.package = {
    value: subsPackage,
    error: false,
    constraints: ["REQUIRED"]
  };
  this.description = {
    value: description,
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.start_date = {
    value: start_date,
    error: false,
    constraints: ["REQUIRED"]
  };
}
function ProjectFields(
  id = "",
  subject = "",
  date_of_birth = "",
  relationship_to_client = "",
  gender = "",
  deadline = ""
) {
  this.subject = {
    value: id,
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.date_of_birth = {
    value: date_of_birth,
    error: false,
    constraints: ["REQUIRED"]
  };
  this.relationship_to_client = {
    value: relationship_to_client,
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.gender = {
    value: gender,
    error: false,
    constraints: ["REQUIRED", "LETTER"]
  };
  this.client_subscription_id = {
    value: "",
    error: false,
    constraints: ["REQUIRED"]
  };
  this.deadline = {
    value: deadline,
    error: false,
    constraints: ["REQUIRED"]
  };
}
function LoginFields(email = "", password = "") {
  this.email = {
    value: email,
    error: false,
    constraints: ["REQUIRED", "EMAIL"]
  };
  this.password = {
    value: password,
    error: false,
    constraints: ["REQUIRED"]
  };
}

export {
  LeadFields,
  ClientFields,
  ClientEditFields,
  SubscriptionFields,
  ProjectFields,
  LoginFields
};
