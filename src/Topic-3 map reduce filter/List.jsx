

const List = (props) => {
    console.log("props:",props);
    const {username} = props;
    return <li >Username: {username}</li>
}

export default List;


// props = { username: "Harsh"}