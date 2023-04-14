import React from "react";
import User from "./components/Home";
// import ExamsRecord from "./components/ExamsRecord";
// import Registry from "./components/Registry";
// import Admin from "./components/Admin";

function App() {
  return (
    <div>
      {/** The App Entry is Currently on the User, There will be a place where when each user
       e.g Registry, ExamRecords click a button will navigate to his endpoint to access his dashboard*/}
       
      <User />
    </div>
  );
}

export default App;
