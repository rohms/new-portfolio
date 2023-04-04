import React from "react";
import PropTypes from "prop-types";
import "../styles/helpers.css";

const Card = ({ card }) => {
  const { name, link, image, gitrepo } = card;
  return (
    <div className="card">
      <div className="card__image">
        <a href={`${link}`} target="_blank" rel="noreferrer" key={name}>
          <img src={image} alt="card" />
        </a>
      </div>
      <div className="card__content">
        <p className="card__title">{name}</p>
        {gitrepo ? (
          <a href={`${gitrepo}`}>Repo link</a>
        ) : (
          <div className="invisible">&nbsp;</div>
        )}
        {/* <p className="card__subtitle">{subtitle}</p> */}
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    gitrepo: PropTypes.string,
  }).isRequired,
};

export { Card };
