import { PropTypes } from "prop-types";

const Badge = ({ imageSrc, altText, tag }) => {

  const capitalizedF = (tag) = tag.charAt(0).toUpperCase() + tag.slice(1); 

  return (
    <div className="badge-container gradientbg">
      <span className="badge">
        <img src={imageSrc} alt={altText} />
        <p className="tag">{capitalizedF}</p>
      </span>
    </div>
  );
};

Badge.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
};

export { Badge };
