/**
 * 
 props =  { 
    user : {
               username:"Tinku", 
               skills: ["frontend","backend"],
               designation: "SDE-2",
               salary:"12.5 LPA"
            }
 }


  props = {
               username:"Tinku", 
               skills: ["frontend","backend"],
               designation: "SDE-2",
               salary:"12.5 LPA"
            }

            Object.values()
 */

const Employee = (props) => {
 
  // const {username,skills,designation,salary} = props.user;
  const {username,skills,designation,salary} = props;


  return (
    <>
      <h1>Employee Component</h1>
      <h2>Username: {username}</h2>
      <h2>Skills: {skills}</h2>
      <h2>Designation: {designation}</h2>
      <h2>Salary: {salary}</h2>
    </>
  );
};

export default Employee;
