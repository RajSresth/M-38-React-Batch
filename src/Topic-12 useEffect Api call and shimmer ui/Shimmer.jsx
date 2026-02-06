import "./style.css"

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        {Array(10).fill("").map(element =>  <div className="card"></div>)}
    </div>
  )
}
       
      


export default Shimmer