/* 
    props = {
              person: {
                    fullname: "Chombu Singh",
                    age:23
                }
            }
 */   
const Child = (props) => {

    props.person = {
        fullname: "Chombu Singh",
        age:23
    }
    // props.person.age = 26
    console.log(props.person)
    return <div>Child Component </div>
}

export default Child;