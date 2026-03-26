import "./style.css"

const Shimmer = () => {
  return (
    <div id="shimmer-container">
         <div className="top-banner">
            <button >
              Top Rated Crafts
            </button>

            <button >
            High To Low
            </button>

            <button >
            Low To High
            </button>

            <button>
              Reset
            </button>

      </div>
      <div className="shimmer-card-container">
        {Array(18).fill("").map((_,index) =>  <div key={index} className="card"></div>)}
    </div>
  </div>
  )
}
       
      


export default Shimmer;