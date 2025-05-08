import React from "react";
import aarhusLogo from "../assets/aarhusUni.svg";
import articleImage from "../assets/img-29721-w1046-h700-tD.jpg";

const UICard = () => {
  return (
    <div className="ui-card">
      <div className="ui-card__header">
        <img
          src={aarhusLogo}
          alt="Aarhus University Logo"
          className="ui-card__logo"
        />
        <span className="ui-card__readtime">5 MIN READ</span>
      </div>

      <img
        src={articleImage}
        alt="Aarhus University"
        className="ui-card__image"
      />

      <div className="ui-card__content">
        <h5 className="ui-card__title">Aarhus University</h5>
        <p className="ui-card__desc">
          "UNIwise is happy to announce that Aarhus University (AU) will be doing a...
        </p>
      </div>
    </div>
  );
};

export default UICard;
