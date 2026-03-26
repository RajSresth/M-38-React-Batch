import List from "./List";
import Employee from "./Employee";

const Props = () => {
  const user = {
        username:"Tinku",
        skills: ["frontend","backend"],
        designation: "SDE-2",
        salary:"12.5 LPA"
  }

  return <>
      {/* <Employee user={user} /> */}

      <Employee   {...user}/>
    </>
};

export default Props;

// <Employee   username="Tinku" skills={["frontend","backend"]} />