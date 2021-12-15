import React, { useState } from 'react';
import './App.css';
import SimpleForm from './Form';
import Member from './Member'
import styled from 'styled-components';

const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;
    
`
const StyledDiv = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #f3f3f3;
`

const StyledH1 = styled.h1`

margin: 16px;
padding: 16px 8px 12px 16px;
color: #2D82B7;
font-size: 4rem;
`
const StyledH2 = styled.h2`
color: red;
`

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}


function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName] : inputValue})
  }
  
  const submitForm = () => {
  const newMember = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
  if (!newMember.username || !newMember.email || !newMember.role) {
    setError("All fields are required before submitting!");
  } else {
  setTeamMembers([ newMember, ...teamMembers ]);
  setFormValues(initialFormValues);
  setError('');
  }  
 
  // setTeamMembers(newMember)
  // setFormValues(initialFormValues)

  }
  return (
    <StyledApp className="App">
      <StyledDiv>
       <StyledH1>Form Application</StyledH1>
       <StyledH2>{error}</StyledH2>
       <SimpleForm
        values = {formValues}
        update = {updateForm}
        submit = {submitForm}
       />
       </StyledDiv>
       <StyledDiv>
      {
        teamMembers.map((member, idx)=> {
          return (
            <Member key={idx} details={member} />
          )
        })
      }
      </StyledDiv>
    </StyledApp>
  );
}

export default App;
