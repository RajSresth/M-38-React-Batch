import React from 'react'

const Card = ({card,profile,pic,info,category,image}) => {
   

  return (
    <div className={card} >
        <div className={profile}>
            <img className={pic} src={image[0]} alt="" />
        </div>
        <div className={info}>
            <h2 style={{textTransform:"uppercase", fontSize:"18px",color:"black"}}>{category}</h2>
        </div>
    </div>
  )
}

export default Card