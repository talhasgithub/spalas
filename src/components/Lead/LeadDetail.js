import React, { Component } from "react";
import axios from "axios";

import HocForm from "../Shared/HocForm";
import LeadEditForm from "./LeadEditForm";
import { LeadFields } from "../../Utilities/FormsModel";
import Comment from "../Shared/Comment/Comment";

export default class LeadDetail extends Component {
  constructor(props) {
    super(props);
    this.initfields = this.initfields.bind(this);
    this.editLeadCall = this.editLeadCall.bind(this);
  }

  initfields() {
    let fieldState = new LeadFields();
    for (let field in fieldState) {
      fieldState[field].value = this.props.lead[field];
    }
    return fieldState;
  }

  editLeadCall(formData) {
    let $this = this;
    axios({
      method: "put",
      url: `/api/v1/leads/${this.props.lead.id}`,
      data: {
        lead: formData
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(response) {
        console.log(response);
        $this.props.updateLead(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log("why you call me");
    return (
      <div className="tab-pane fade active show" id="lead-details" role="tab">
        <HocForm
          FormView={LeadEditForm}
          formFields={this.initfields()}
          isFilled={true}
          submitCall={this.editLeadCall}
        />
        <Comment owner="leads" ownerId={this.props.lead.id} />
      </div>
    );
  }
}
