import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Feeditem = (props) => {
  return (
    <div className="feed-item">
      <h2>{props.profile}</h2>
      <p>
        <b>Description:</b> {props.desc}
      </p>
      <p>
        <b>Years of Experience:</b> {props.exp}
      </p>
      <p>
        <b>Skills:</b> {props.techs.map((tech) => tech + " | ")}
      </p>
      {props.user === "employer" ? (
        <button
          className="feed-item-delete"
          onClick={(e) => props.func(props.id, e)}
        >
          Delete
        </button>
      ) : (
        <Popup
          trigger={<button className="feed-item-apply">Apply</button>}
          modal
          nested
        >
          {(close) => (
            <div className="feed-item-modal">
              <div className="feed-item-modal-content">
                <p>
                  Please email to{" "}
                  <b>
                    <a
                      style={{ color: "#2c3968" }}
                      href="mailto: abc@example.com"
                    >
                      abc@example.com
                    </a>
                  </b>{" "}
                  with your resume and mention the{" "}
                  <b style={{ color: "#2c3968" }}>Job Id: {props.id}</b>
                </p>
              </div>
              <div>
                <button
                  className="feed-item-modal-close"
                  onClick={() => close()}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Popup>
      )}
    </div>
  );
};

export default Feeditem;
