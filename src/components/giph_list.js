import React from 'react';
import GiphListItem from './giph_list_item';

const GiphList = (props) => {

  const giphItems = props.giphs.map((giph) => {
    return <GiphListItem key={giph.id} giph={giph} />
  })

  return (
    <ul className="">
      {giphItems}
    </ul>
  );
};

export default GiphList;