import React, { useState } from 'react';
import './App.css';
import SimpleForm from './Form';
import Member from './Member'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName] : inputValue})
  }
  
  const submitForm = () => {
  const newMember = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  
  setTeamMembers([ newMember, ...teamMembers ]);
  setFormValues(initialFormValues);
    
 
  // setTeamMembers(newMember)
  // setFormValues(initialFormValues)

  }
  return (
    <div className="App">
       <h1>Form App</h1>
       <SimpleForm
        values = {formValues}
        update = {updateForm}
        submit = {submitForm}
       />
      {
        teamMembers.map((member, idx)=> {
          return (
            <Member key={idx} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
