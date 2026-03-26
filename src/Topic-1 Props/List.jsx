// props = { a: 10,  user: "Tinku", msg: "Good Morning" }

const List = (props) => {
  // Destructuring
  const { a, msg, user } = props;

  return (
    <>
      <h2>a:{a}</h2>
      <h2>Username:{user}</h2>
      <h2>Msg:{msg}</h2>
    </>
  );
};

export default List;
