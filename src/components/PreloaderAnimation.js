import React from "react";
import PropTypes from "prop-types";

const PreloaderAnimation = (props) => {
  const { loading } = props;
  return (
    <div className={`${loading ? "preloader" : ""}`}>
      <p className="bounceball preloader-text">Loading...</p>
    </div>
  );
};

PreloaderAnimation.propTypes = {
  loading: PropTypes.bool,
};

export default PreloaderAnimation;
