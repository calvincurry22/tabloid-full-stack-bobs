/* 
Author(s): Alex Curnow
Component Responsibilty: This component generates the HTML for a single comment,
sets the currently selected comment in its parent component, and toggles the edit
and delete modal forms in its parent component.
*/
import React from "react";
import { Button } from "reactstrap";

export const Comment = ({ c, toggleEdit, toggleDelete, setComment }) => (
  <div className="comment">
    <p>
      <strong>{c.subject}</strong>
    </p>
    <p>{c.content}</p>
    <p>Author: {c.userProfile.displayName}</p>
    <p>Date Created: {c.createDateTime.toLocaleString()}</p>
    <Button
      color="primary"
      onClick={() => {
        setComment(c);
        toggleEdit();
      }}
    >
      Edit
    </Button>
    <Button
      color="danger"
      onClick={() => {
        setComment(c);
        toggleDelete();
      }}
    >
      Delete
    </Button>
  </div>
);
