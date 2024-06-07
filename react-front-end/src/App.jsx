//Import
import Companies from "./components/Companies";
import Locations from "./components/Locations";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";

//Parent Component
const App = () => {

  return (

    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />}/>
        <Route path="/locations" element={<Locations />}/>
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </main>

  )
}

export default App;
