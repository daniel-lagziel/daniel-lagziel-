import React from 'react';
import FavoriteCard from './FavoriteCard';

export default function Favorite(props) {
const search=props.search;
const updateUI=props.updateUI;
const mapmap=props.favoriteCity.map((itam, pos)=>
{return <FavoriteCard key={pos} post={itam} search={search} updateUI={updateUI} /> });
  return <div className='favoriteCardDiv' style={{ display:'flex',alignItems:'center', justifyContent:'center'}}>
{mapmap}
   
  </div>;
}
