import React from 'react'
import style from "./Shimmer.module.css"

const Shimmer = () => {
  return (
   <div className={style.home}>
          <div className={style.centerContainer}>
               <h2 className={style.title}>Shop All</h2>
               <div className={style.cardContainer}>
                     {Array(30).fill("").map((_,i) => <div key={i} className={style.card}></div>)}            
            </div>
       </div>
    </div>
  )
}

export default Shimmer