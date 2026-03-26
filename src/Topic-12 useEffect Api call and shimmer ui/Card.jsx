const Card = ({
                category="",
                description="",
                image="",
                price="",
                rating=""
              }) => {

  const words = description? description.split(" "): description;
  const customizedDescription =  words.length > 6 ? words.slice(0, 6).join(" ") + "..." : description

  return (
    <div className="card">
        <div className="profile">
          <img src={image[0]} alt="" />
        </div>
        <div className="info">
            <h4>{category}</h4>
            <h4>{customizedDescription}</h4>
           <div>
              <h5>Price: {price}</h5>
              <h5>Rating: {rating}</h5>
           </div>
        </div>
    </div>
  )
}

export default Card