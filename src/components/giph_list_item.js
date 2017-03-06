import React from 'react';

const GiphListItem = (props) => {
  const giph = props.giph;
  const imageUrl = giph.images.fixed_height.url;
  
  return (
    <li className=''>
      <div className=''>
        <img className='' src={imageUrl} />
      </div>
    </li>
  );
};

export default GiphListItem;