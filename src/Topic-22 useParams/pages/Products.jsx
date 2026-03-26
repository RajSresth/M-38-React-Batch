import style from "./Products.module.css"
import { useLoaderData } from "react-router-dom";


const Products = () => {

  const data = useLoaderData()


  return (
    <div className={style.products}>
      <div className={style.left}>
        <div className={style.imageGallery}>
            <div className={style.imgContainer}>
                <img src={data.image[0]}/>
            </div>
             <div className={style.imgContainer}>
                <img src={data.image[1]}/>
            </div>
             <div className={style.imgContainer}>
                <img src={data.image[2]}/>
            </div>
              <div className={style.imgContainer}>
                <img src={data.image[3]}/>
            </div>
        </div>
        <div className={style.mainImage}>
          <img src={data.image[0]}/>
        </div>
      </div>
      <div className={style.right}>
            <h2>{data.category}</h2>
            <h2>{data.price}</h2>
      </div>
    </div>
  )
};

export default Products;


