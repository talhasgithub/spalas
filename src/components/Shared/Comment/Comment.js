import React, { Component } from "react";
import axios from "axios";

import CommentForm from "./CommentForm";
import CommentRow from "./CommentRow";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.updateContent = this.updateContent.bind(this);
    this.removeCommentCall = this.removeCommentCall.bind(this);
    this.removeContent = this.removeContent.bind(this);
    this.renderCommentRow = this.renderCommentRow.bind(this);
  }

  componentDidMount() {
    const $this = this;
    axios({
      method: "get",
      url: `/api/v1/${this.props.owner}/${this.props.ownerId}/comments`
    }).then(function(response) {
      $this.setState({
        comments: response.data.data
      });
    });
  }

  updateContent(comment) {
    console.log(comment);
    let comments = this.state.comments;
    comments.push(comment);
    this.setState({
      comments: comments
    });
  }

  removeCommentCall(commentId) {
    const $this = this;
    console.log("remove component");
    axios({
      method: "delete",
      url: `/api/v1/${this.props.owner}/${commentId}/remove_comment`
    }).then(function(response) {
      $this.removeContent(commentId);
    });
  }

  removeContent(commentId) {
    let comments = this.state.comments;
    comments.map((comment, index) => {
      if (comment.id == commentId) {
        comments.splice(index, 1);
        this.setState({
          comments: comments
        });
      }
    });
  }

  renderCommentRow(comment) {
    return (
      <CommentRow
        comment={comment}
        key={comment.id}
        removeCommentCall={this.removeCommentCall}
      />
    );
  }

  render() {
    return (
      <div className="box-with-padding leads-comments-wrapper">
        <div className="comments-count">
          <i className="fos message-icon" />
          <span>{this.state.comments.length}</span>Comments
          <CommentForm
            updateContent={this.updateContent}
            ownerId={this.props.ownerId}
          />
          <div className="comment-list">
            <ul>{this.state.comments.map(this.renderCommentRow)}</ul>
          </div>
        </div>
      </div>
    );
  }
}
