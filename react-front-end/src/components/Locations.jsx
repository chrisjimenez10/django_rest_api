//Import
import { useEffect, useState } from "react";
import * as locationService from "../services/locationService";
const { fetchLocations } = locationService;

const Locations = () => {

     //State
     const [locations, setLocations] = useState([]);

     //Functions
     const fetchLocationsDatabase = async () => {
         try{
           const listOfLocations = await fetchLocations();
           setLocations(listOfLocations);
         }catch(error){
           console.error(`Error fetching players: ${error}`)
         }
       };
 
     //useEffect()
     useEffect(()=>{
         fetchLocationsDatabase();
     }, [])


  return (

    <>
        <h3 style={{textDecoration: "underline"}}>Locations</h3>
        <ol>
        {locations.map((location)=>{
            return(
                <li key={location.id}>
                <h4><span style={{color: "green"}}>Address: </span>{location.street}, {location.city}, {location.state}</h4>
                <h5>- Companies:</h5>
                <ul>                  
                  {location.companies.map((company)=>{
                    return(
                    <li key={company.id}>
                      <h5>{company.name}</h5>
                      <h5><span style={{color: "blue"}}>Industry: </span>{company.industry}</h5>                     
                    </li>
                    )
                  })}
                </ul>
                </li>
            )
        })}
        </ol>
    </>

  )
}

export default Locations;