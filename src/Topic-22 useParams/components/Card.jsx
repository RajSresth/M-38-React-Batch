import React from 'react'

const Card = ({card,profile,image,info,login="",avatar_url=""}) => {
   

  return (
    <div className={card} >
        <div className={profile}>
            <img className={image} src={avatar_url} alt="" />
        </div>
        <div className={info}>
            <h2 style={{textTransform:"uppercase", fontSize:"18px",color:"black"}}>{login}</h2>
        </div>
    </div>
  )
}

export default Card