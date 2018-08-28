import React from 'react';

const GiphListItem = (props) => {
  const giph = props.giph;
  const imageUrl = giph.images.fixed_height.url;

  return (
    
      <div className='giph-item col'>
        <img className='' src={imageUrl} />
      </div>
    
  );
};

export default GiphListItem;