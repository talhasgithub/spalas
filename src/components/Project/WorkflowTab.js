import React, { Component } from "react";
export default class WorkflowTab extends Component {
  render() {
    return (
      <div className="tab-pane fade show active" id="workflow" role="tab">
        <div className="tab-inner-wrapper">
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Onboarding</h3>
            <span id="onboarding_top" />
            <span className="expand-button ex-down">
              <button
                data-back="onboarding_top"
                data-default="onboarding_expand"
              >
                Expand
                <i className="fa fa-caret-down" />
              </button>
            </span>
          </div>
          <div className="box-wrapper bg-white border-5-rds">
            <div id="onBoardingWizard" className="wizard  box-with-padding">
              <ul className="wizard-steps" role="tablist">
                <li className="active" role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Provide Service Information
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Confirm Lead Status
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Send Contracts
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Receive Completed Contract
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Onboard Client
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Take Deposit
                  </h4>
                </li>
              </ul>
              <form id="validation" className="form-horizontal">
                <div className="wizard-content">
                  <div className="wizard-pane active" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button
                            className="au-btn au-btn-icon au-btn--pink btn-lg"
                            data-toggle="modal"
                            data-target="#addTask"
                          >
                            <i className="zmdi zmdi-plus" />
                            Add Task{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Tasks
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="table-responsive box-wrapper show-expand-box">
              <span className="scroll-placeholder" id="onboarding_expand" />
              <table className="table table-data2 table-col-last-padding">
                <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>User</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-inner-wrapper">
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Research Stage</h3>

            <span id="research_top" />
            <span className="expand-button ex-down">
              <button data-back="research_top" data-default="research_expand">
                Expand
                <i className="fa fa-caret-down" />
              </button>
            </span>
          </div>

          <div className="box-wrapper bg-white border-5-rds">
            <div id="researchWizard" className="wizard  box-with-padding">
              <ul className="wizard-steps" role="tablist">
                <li className="active" role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Interviews
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Photos Upload
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Videos Upload
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Audio Upload
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Draft Brief
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Customer Authorization
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Take Deposit
                  </h4>
                </li>
              </ul>
              <form id="validation_research" className="form-horizontal">
                <div className="wizard-content">
                  <div className="wizard-pane active" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="table-responsive box-wrapper show-expand-box">
              <span className="scroll-placeholder" id="research_expand" />
              <table className="table table-data2 table-col-last-padding">
                <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>User</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-inner-wrapper">
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Partner Stage</h3>
            <span id="partner_top" />
            <span className="expand-button ex-down">
              <button data-back="partner_top" data-default="partner_expand">
                Expand
                <i className="fa fa-caret-down" />
              </button>
            </span>
          </div>

          <div className="box-wrapper bg-white border-5-rds">
            <div id="partnerWizard" className="wizard  box-with-padding">
              <ul className="wizard-steps" role="tablist">
                <li className="active" role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Provide Service Information
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Confirm Lead Status
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Send Contracts
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Receive Completed Contract
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Onboard Client
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Take Deposit
                  </h4>
                </li>
              </ul>
              <form id="validation_partner" className="form-horizontal">
                <div className="wizard-content">
                  <div className="wizard-pane active" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="table-responsive box-wrapper show-expand-box">
              <span className="scroll-placeholder" id="partner_expand" />
              <table className="table table-data2 table-col-last-padding">
                <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>User</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-inner-wrapper">
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Production Stage</h3>
            <span id="production_top" />
            <span className="expand-button ex-down">
              <button
                data-back="production_top"
                data-default="production_expand"
              >
                Expand
                <i className="fa fa-caret-down" />
              </button>
            </span>
          </div>

          <div className="box-wrapper bg-white border-5-rds">
            <div id="productionWizard" className="wizard  box-with-padding">
              <ul className="wizard-steps" role="tablist">
                <li className="active" role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Scoping Meeting
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Production Meeting
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Brief Video Uploads
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Editorial Stage
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Draft Lifestory Finalised
                  </h4>
                </li>
              </ul>
              <form id="validation_production" className="form-horizontal">
                <div className="wizard-content">
                  <div className="wizard-pane active" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="table-responsive box-wrapper show-expand-box">
              <span className="scroll-placeholder" id="production_expand" />
              <table className="table table-data2 table-col-last-padding">
                <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>User</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="tab-inner-wrapper">
          <div className="overview-wrap wrapper-title position-relative">
            <h3>Close Out Stage</h3>

            <span id="closeout_top" />
            <span className="expand-button ex-down">
              <button data-back="closeout_top" data-default="closeout_expand">
                Expand
                <i className="fa fa-caret-down" />
              </button>
            </span>
          </div>

          <div className="box-wrapper bg-white border-5-rds">
            <div id="closeWizard" className="wizard  box-with-padding">
              <ul className="wizard-steps" role="tablist">
                <li className="active" role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Customer 1st Lifestory Review
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Edits Implementation
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Customer 2nd Lifestory Review
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Edit Implementation
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Customer Acceptance
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Deposit Taken
                  </h4>
                </li>
                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Video Released
                  </h4>
                </li>

                <li role="tab">
                  <h4>
                    <span>
                      <i className="fa fa-circle" />
                    </span>
                    Project Closed
                  </h4>
                </li>
              </ul>
              <form id="validation_close" className="form-horizontal">
                <div className="wizard-content">
                  <div className="wizard-pane active" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wizard-pane" role="tabpanel">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 col-sm-12">
                          <div className="row-inline">
                            <select className="form-control" name="service">
                              <option value="">Select Status</option>
                              <option value="1">Option1</option>
                              <option value="2">Option1</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2 col-sm-4">
                          <button className="au-btn au-btn-icon au-btn--pink btn-lg">
                            <i className="zmdi zmdi-plus" />
                            Add Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="table-responsive box-wrapper show-expand-box">
              <span className="scroll-placeholder" id="closeout_expand" />
              <table className="table table-data2 table-col-last-padding">
                <thead>
                  <tr>
                    <th>Task ID</th>
                    <th>User</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-red" />
                      56645
                    </td>
                    <td>
                      <span>Sean Murry</span>
                    </td>
                    <td>Send in Update</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Pending
                    </td>
                    <td>07 Aug 18</td>
                  </tr>

                  <tr>
                    <td className="tbl-title-lg">
                      <i className="fa fa-circle txt-lite-green" />
                      34343
                    </td>
                    <td>
                      <span>John</span>
                    </td>
                    <td>Re-Schedule</td>
                    <td>
                      <span className="circle-outline">
                        <i className="zmdi zmdi-edit" />
                      </span>
                      Completed
                    </td>
                    <td>07 Aug 18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
