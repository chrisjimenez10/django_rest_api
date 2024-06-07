import {useState, useEffect} from "react";



const Form = ({handleCreateContact, contactToEdit, setContactToEdit, handleEditContact}) => {

    //State
    const [formData, setFormData] = useState({
        name: "",
        age: "",
    });


    useEffect(()=>{
        if(contactToEdit){
            setFormData({
                name: contactToEdit.name,
                age: contactToEdit.age,
            })
        }
    }, [contactToEdit])

    //Functions
    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(contactToEdit){
            handleEditContact(contactToEdit.id, formData)
        }else{
        handleCreateContact(formData);
        }
        setFormData({
            name: "",
            age: "",
        });
        setContactToEdit(null);
    };


  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange}></input>

        <label htmlFor="age">Age: </label>
        <input id="age" name="age" type="number" min="18" max="99" required value={formData.age} onChange={handleInputChange}></input>

        
        <button type="submit" disabled={formData.name === "" || formData.age === ""}>{contactToEdit ? "Edit" : "Create"}</button>


    </form>

  )
}

export default Form;