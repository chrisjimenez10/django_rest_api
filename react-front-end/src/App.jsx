//Import
import { useState } from "react";
import "./App.css";
import Companies from "./components/Companies";
import Locations from "./components/Locations";
import Contacts from "./components/Contacts";

//Parent Component
const App = () => {

  //State
  const [renderCompany, setRenderCompany] = useState("");
  const [renderLocation, setRenderLocation] = useState("");
  const [renderContact, setRenderContact] = useState("");


  //Functions
  const handleRenderCompanies = () => {
    if(renderCompany === ""){
      setRenderCompany("companies");
    }
    if(renderCompany === "companies"){
      setRenderCompany("");
    }
  };

  const handleRenderLocations = () => {
    if(renderLocation === ""){
      setRenderLocation("locations");
    }
    if(renderLocation === "locations"){
      setRenderLocation("");
    }
  };

  const handleRenderContacts = () => {
    if(renderContact === ""){
      setRenderContact("contacts");
    }
    if(renderContact === "contacts"){
      setRenderContact("");
    }
  };


  return (

    <main>

      <div className="left-cell">
        <button onClick={handleRenderCompanies}>Companies</button>
        {renderCompany === "companies" && (
            <Companies />
        )}
      </div>

      <div className="middle-cell">
        <button onClick={handleRenderLocations}>Locations</button>
        {renderLocation === "locations" && (
          <Locations />
        )}
      </div>

      <div className="right-cell">
        <button onClick={handleRenderContacts}>Contacts</button>
        {renderContact === "contacts" && (
          <Contacts />
        )}
      </div>
      

    </main>

  )
}

export default App;
