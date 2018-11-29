import React from "react";

export default class CommentRow extends React.PureComponent {
  onRemoveContent = () => {
    this.props.removeCommentCall(this.props.comment.id);
  };
  render() {
    const { comment } = this.props;
    return (
      <li>
        <img src={require("../../../images/avatar-01.jpg")} alt="o" />
        <div className="comment-box">
          <button className="close-btn" onClick={this.onRemoveContent}>
            <i className="fa fa-times" />
          </button>
          <div className="comment-top">
            <label>Mark Taylor</label>
            <i>Admin</i>
            <i>14:50</i>
            <i>{comment.created_at}</i>
          </div>
          <p>{comment.comment_text}</p>
        </div>
      </li>
    );
  }
}
