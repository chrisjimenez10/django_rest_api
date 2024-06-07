//Import
import { useState } from "react";
import "./App.css";
import Companies from "./components/Companies";
import Locations from "./components/Locations";

//Parent Component
const App = () => {

  //State
  const [renderCompany, setRenderCompany] = useState("");
  const [renderLocation, setRenderLocation] = useState("")


  //Functions
  const handleRenderCompanies = () => {
    if(renderCompany === ""){
      setRenderCompany("companies")
    }
    if(renderCompany === "companies"){
      setRenderCompany("")
    }
  };

  const handleRenderLocations = () => {
    if(renderLocation === ""){
      setRenderLocation("locations")
    }
    if(renderLocation === "locations"){
      setRenderLocation("")
    }
  };

  const handleRenderContacts = () => {

  };


  return (

    <main>

      <button onClick={handleRenderCompanies}>Companies</button>
      {renderCompany === "companies" && (
          <Companies />
      )}

      <button onClick={handleRenderLocations}>Locations</button>
      {renderLocation === "locations" && (
        <Locations />
      )}

      <button onClick={handleRenderContacts}>Contacts</button>
      
      

    </main>

  )
}

export default App;
