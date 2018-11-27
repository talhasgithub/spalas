import React, { Component } from "react";
import HocForm from "../Shared/HocForm";
import LeadEditForm from "./LeadEditForm";
import { LeadFields } from "../../Utilities/FormsModel";
import axios from "axios";
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
        <div className="box-with-padding leads-comments-wrapper">
          <div className="comments-count">
            <i className="fos message-icon" />
            <span>3</span>Comments
            <div className="comment-fld">
              <input type="text" name="comments" />
              <button type="button" className="btn btn-outline-secondary">
                <i className="fa fa-location-arrow" />
              </button>
            </div>
            <div className="comment-list">
              <ul>
                <li>
                  <img src={require("../../images/avatar-01.jpg")} />
                  <div className="comment-box">
                    <span className="close-btn">
                      <i className="fa fa-times-circle-o" />
                    </span>
                    <div className="comment-top">
                      <label>Mark Taylor</label>
                      <i>Admin</i>
                      <i>14:50</i>
                      <i> 01 Jan 18</i>
                    </div>
                    <p>
                      I amended this memory and added in the lines about Mary’s
                      sister
                    </p>
                  </div>
                </li>
                <li>
                  <img src={require("../../images/avatar-01.jpg")} />
                  <div className="comment-box">
                    <span className="close-btn">
                      <i className="fa fa-times-circle-o" />
                    </span>
                    <div className="comment-top">
                      <label>Mark Taylor</label>
                      <i>Admin</i>
                      <i>14:50</i>
                      <i> 01 Jan 18</i>
                    </div>
                    <p>
                      I amended this memory and added in the lines about Mary’s
                      sister
                    </p>
                  </div>
                </li>
                <li>
                  <img src={require("../../images/avatar-01.jpg")} />
                  <div className="comment-box">
                    <span className="close-btn">
                      <i className="fa fa-times-circle-o" />
                    </span>
                    <div className="comment-top">
                      <label>Mark Taylor</label>
                      <i>Admin</i>
                      <i>14:50</i>
                      <i> 01 Jan 18</i>
                    </div>
                    <p>
                      I amended this memory and added in the lines about Mary’s
                      sister
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
