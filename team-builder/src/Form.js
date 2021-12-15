import React from 'react'


function SimpleForm(props){
    const { values, update, submit } = props
    
    
    const onChange = (event) => {
        const { value, name} = event.target;

        update(name, value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
               
    }

    return (
        <div>
            <h1>Enter Information Here!</h1>
            <form onSubmit={onSubmit}>
                <label>Member Name: 
                <input
                    value = {values.username}
                    onChange={onChange}
                    name = 'username'
                    type = 'text'
                    placeholder= 'First Name'
                    maxLength='30'             
                />
                </label><br/>
                <label>Member Email: 
                <input
                    value = {values.email}
                    onChange={onChange}
                    name = 'email'
                    type = 'email'
                    placeholder='Email Address Here'
                    maxLength='30'
                />
                </label><br/>
                <label>Member Role: 
                    <select value = {values.role}
                    name = "role" onChange={onChange}>
                         <option value="">-- Select a Role --</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                        <option value="Front End Developer">Front End Developer</option>
                        <option value="Back End Developer">Back End Developer</option>
                        <option value="UIUX Developer">UI/UX Developer</option>
                    </select>
                </label>
                 
                <div className='submit'>
                <button>Submit</button>
                 </div>
                </form>
        </div>
    )





}
export default SimpleForm;