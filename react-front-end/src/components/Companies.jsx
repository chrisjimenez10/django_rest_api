//Import
import { useEffect, useState } from "react";
import * as companyService from "../services/companyService";
const { fetchCompanies } = companyService;


//Child Component
const Companies = () => {

    //State
    const [companies, setCompanies] = useState([]);

    //Functions
    const fetchCompaniesDatabase = async () => {
        try{
          const listOfCompanies = await fetchCompanies();
          setCompanies(listOfCompanies);
        }catch(error){
          console.error(`Error fetching players: ${error}`)
        }
      };

    //useEffect()
    useEffect(()=>{
        fetchCompaniesDatabase();
    }, [])


  return (

    <>
        <h3 style={{textDecoration: "underline"}}>Companies</h3>
        <ol>
        {companies.map((company)=>{
            return(
                <li key={company.id}>
                <h4>{company.name}</h4>
                <h4><span style={{color: "blue"}}>Industry: </span>{company.industry}</h4>
                </li>
            )
        })}
        </ol>
      </>

  )
}

export default Companies;