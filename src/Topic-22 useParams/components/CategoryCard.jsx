import React from 'react';
import style from "./CategoryCard.module.css";
import {Link} from "react-router-dom"


const CategoryCard = ({id,query,image}) => {

  const p = new URLSearchParams({
    query:query,  // pharmacy pharmacy
    filterType:"all"
  })

  // p.toString() = query=pharmacy+pharmacy&filterType=all

  return (
   <Link to={`category/${id}?${p.toString()}`}>
       <div className={style.categoryCard}>
          <img src={image} alt="" />
       </div>
   </Link>
  )
}

export default CategoryCard