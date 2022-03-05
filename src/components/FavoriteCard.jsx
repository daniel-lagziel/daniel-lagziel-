import React from 'react'

export default function FavoriteCard(props) {
    const post=props.post
    const ok=()=>{
        props.search(post.cityName)
.then(data=>props.updateUI(data))
.catch(err=> console.log(err));
    }
  return (
      <div className='favoriteCardDiv'>
        <button className='favoriteCard' onClick={ok} style={{border:'solid 1px black', margin:'10px', padding:'5px', borderRadius:'10px', padding:'5px'}}>
        <div>
        <p>{post.cityName}</p>
        <p>{post.temp+ ' c'}</p>
    </div>

          </button>

      </div>
  )
}
