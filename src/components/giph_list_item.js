import React from 'react';

const GiphListItem = (props) => {
  const giph = props.giph;
  // const imageUrl = giph.images.fixed_height.url;
  // const imageUrl = giph.images.fixed_height_still.url;
  // const imageUrl = giph.images.fixed_height_small.url;
  const imageUrl = giph.images.fixed_height_downsampled.url;

  return (
    
      <div className='giph-item col'>
        <img className='' src={imageUrl} />
      </div>
    
  );
};

export default GiphListItem;