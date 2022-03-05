import React from 'react';
import FavoriteCard from './FavoriteCard';

export default function Favorite(props) {
const search=props.search;
const updateUI=props.updateUI;
  return <div className='favoriteCardDiv' style={{ display:'flex',alignItems:'center', justifyContent:'center'}}>
{props.favoriteCity.map((post)=>{return <FavoriteCard post={post} search={search} updateUI={updateUI} /> })}
   
  </div>;
}
