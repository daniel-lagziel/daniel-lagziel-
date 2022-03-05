import React from 'react'

export default function FiveDaysComponenta(props) {
  return (
    <div className='fiveDaysCard' style={{backgroundColor:'whitesmoke' ,border:'solid 1px black', margin:'10px', padding:'5px'}}>
    <p>date: {props.post.date}</p>
      <p>min temp: {props.post.minTemp}</p>
      <p>max temp: {props.post.maxTemp}</p> 

    </div>
  )
}
