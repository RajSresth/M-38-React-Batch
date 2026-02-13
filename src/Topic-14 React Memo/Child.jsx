import React from 'react'

const Child = React.memo((props) => {
    console.log("Child Render", props.user);
  return (
    <div>
        <h1>Child Component</h1>
    </div>
  )
}
)
export default Child