import "./style.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">

      <div className="top-banner">

        <button>Top Rated Crafts</button>

        <button >highToLow</button>

        <button >lowToHigh</button>

        <button >Reset</button>

      </div>


      <div className="shimmer-card-container">
        {Array(18).fill("").map((_,index) =>  <div key={index} className="card"></div>)}
      </div>
      
  </div>
  )
}
    
export default Shimmer;




