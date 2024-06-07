//Import
import { useEffect, useState } from "react";
import * as contactsService from "../services/contactsService";
const { fetchContacts, createContact, editContact, deleteContact } = contactsService;
import Form from "./Form/Form";

const Contacts = () => {

  //State
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [renderForm, setRenderForm] = useState("");

  //Functions
  const fetchContactsDatabase = async () => {
      try{
        const listOfContacts = await fetchContacts();
        setContacts(listOfContacts);
      }catch(error){
        console.error(`Error fetching players: ${error}`)
      }
    };

  const handleCreateContact = async (contactData) => {
    try{
      await createContact(contactData);
      fetchContactsDatabase();
    }catch(error){
      console.error(`Error adding player: ${error}`);
    }
  };

  const handleEditContact = async (id, contactData) => {
    try{
      await editContact(id, contactData);
      fetchContactsDatabase();
    }catch(error){
      console.error(`Error editing player: ${error}`);
    }
  };

  const handleDeleteContact = async (id) => {
    try{
      await deleteContact(id);
      fetchContactsDatabase();
    }catch(error){
      console.error(`Error deleting player: ${error}`);
    }
  }

  //useEffect()
  useEffect(()=>{
      fetchContactsDatabase();
  }, []);

  const handleEdit = (contact) => {
      setContactToEdit(contact)
  };

  const handleRenderForm = () => {
    if(renderForm === ""){
      setRenderForm("showForm")
    }
    if(renderForm === "showForm"){
      setRenderForm("");
      setContactToEdit(null);
  }
};

  return (

    <>

      <button onClick={handleRenderForm}>Form</button>
      {renderForm === "showForm" && (
        <Form 
        handleCreateContact={handleCreateContact}
        contactToEdit={contactToEdit}
        setContactToEdit={setContactToEdit}
        handleEditContact={handleEditContact}
      />)}

      <h3 style={{textDecoration: "underline"}}>Contacts</h3>
      <ol>
      {contacts.map((contact)=>{
          return(
              <li key={contact.id}>
                <h4>{contact.name}</h4>
                <h4 style={{color: "red"}}>Age: {contact.age}</h4>
                <button onClick={()=> handleEdit(contact)}>Edit</button>
                <button onClick={()=> handleDeleteContact(contact.id)}>Delete</button>
              </li>
          )
      })}
      </ol>
      
    </>

  )
}

export default Contacts;