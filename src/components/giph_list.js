import React from 'react';

const GiphList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.giphs.length}
    </ul>
  );
};

export default GiphList;