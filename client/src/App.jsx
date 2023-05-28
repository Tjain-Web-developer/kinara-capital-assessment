import React from "react";
import StudentTable from "./componenets/StudentTable";
import NavBar from "./componenets/NavBar";
import StudentTab from "./componenets/StudentTab";
import { useState } from "react";

const App = () => {
  
  const [finalData, setFinalData] = useState([]);
  

  return (
    <div>
      <NavBar finalData={finalData} setFinalData={setFinalData}/>
      <StudentTab finalData={finalData} setFinalData={setFinalData}/>
    </div>
  );
};

export default App;
