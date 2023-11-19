import React from "react";

const Image = ({ className, source, alt }) => {
  return (
    <div>
      <img className={className} src={source} alt={alt} />
    </div>
  );
};

export default Image;
