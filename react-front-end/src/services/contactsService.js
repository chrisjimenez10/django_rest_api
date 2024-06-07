//Variables
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/contacts`;

//Functions
const fetchContacts = async () => {
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data); //Debug
        return data;
    }catch(error){
        console.error(error);
    }
};

const createContact = async (contactData) => {
    try{
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(contactData),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

const editContact = async (id, contactData) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(contactData),
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

const deleteContact = async (id) => {
    try{
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error.message);
    }
};

//Export
export {fetchContacts, createContact, editContact, deleteContact};