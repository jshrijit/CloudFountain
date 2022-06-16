import React, { useState } from "react";
import AppModal from "../Modal/Modal";

import "./styles.scss";

const CardContainer = (props) => {
  const { title, body, viewAttachment } = props;
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const acceptHandler = () => {
    console.log("clicked");
    setIsAcceptModalOpen(true);
  };

  return (
    <div className="card-container">
      <div className="left">
        <div className="title">{title}</div>
        <div className="body">{body}</div>
        <div className="footer">
          <button
            type="link"
            className="btn btn-collapse"
            onClick={() => {
              setIsCollapseOpen((prev) => !prev);
            }}
          >
            View Details
          </button>
          {viewAttachment && (
            <button className="btn btn-primary" style={{ marginLeft: "10px" }}>
              View Attachment
            </button>
          )}
          <div className={`collapse-body ${isCollapseOpen ? "show" : "hide"}`}>
            Find details here...
          </div>
        </div>
      </div>
      <div className="right">
        <div>
          <button className="btn btn-active" onClick={acceptHandler}>
            ACCEPT
          </button>
          <AppModal
            title="Note"
            body="Your request has been accepted"
            isModalOpen={isAcceptModalOpen}
          />
        </div>
        <div>
          <button className="btn btn-secondary">REJECT</button>
          <AppModal
            title="Note"
            body="Your request has been rejected"
            isModalOpen={isRejectModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
