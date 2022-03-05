import React from 'react';

export default function Header(props) {
  const change=(value)=>{
    props.setScrnFlag(value)
  }
  return <div className='headerDiv' style={{ display:'flex', justifyContent:'space-between'}}>
      <p>Herolo Weather Task</p>
      <div>
      <button className='buttonHome' style={{margin:'10px'}} value={'home'} onClick={()=>change('home')}>HOME</button>
      <button className='buttonHome' style={{margin:'10px'}} value={'favorite'} onClick={()=>change('favorite')}>FAVORITE</button>
      </div>
  </div>;
}
