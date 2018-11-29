import React, { Component } from "react";
import axios from "axios";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      isError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange({ target }) {
    console.log(target.value);
    if (target.value == "") {
      this.setState({
        isError: true,
        commentText: ""
      });
    } else {
      this.setState({
        commentText: target.value,
        isError: false
      });
    }
    console.log(this.state.commentText);
  }
  handleSubmit(e) {
    const $this = this;
    if (this.state.commentText == "") {
      this.setState({
        isError: true
      });
      return;
    }
    e.preventDefault();
    axios({
      method: "post",
      url: `/api/v1/leads/${this.props.ownerId}/submit_comment`,
      data: {
        comment: {
          comment_text: this.state.commentText,
          user_id: 1
        }
      },
      headers: { "Access-Control-Allow-Origin": "*" }
    })
      .then(function(response) {
        console.log(response);
        $this.setState({
          commentText: ""
        });
        $this.props.updateContent(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="comment-fld">
        <input
          type="text"
          name="comments"
          onChange={this.handleChange}
          value={this.state.commentText}
        />
        {this.state.isError ? (
          <small id="comment-error" className="form-text form-error">
            Comment Is Required
          </small>
        ) : (
          ""
        )}
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={this.handleSubmit}
          disabled={this.state.isError}
        >
          <i className="fa fa-location-arrow" />
        </button>
      </div>
    );
  }
}
export default CommentForm;
