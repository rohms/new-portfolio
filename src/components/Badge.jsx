import { PropTypes } from "prop-types";

const Badge = ({ imageSrc, altText }) => {
  return (
    <>
      <span className="badge-container">
        <img src={imageSrc} alt={altText} />
      </span>
    </>
  );
};

Badge.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string,
};

export { Badge };
