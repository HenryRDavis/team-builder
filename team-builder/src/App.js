import React, { useState, useEffect } from 'react';
import './App.css';
import Members from './Members'
import MembersForm from './MembersForm'

const form = {
  username: '',
  email: '',
  role: '',
  }

export default function App() {
  const [members, setMembers] = useState([])
  const [teamMem, setTeamMem] = useState(form)

  const updateForm = (inputName, inputValue) => {
    setTeamMem({ ...teamMem, [inputName]: inputValue })

    const submitForm = () => {
      const member = {
        username: teamMem.username.trim(),
        email: teamMem.email.trim(),
        role: teamMem.role,
      }
      if (!member.username || !member.email ) return
      }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <MembersForm>
        values={teamMem} 
        update ={updateForm} 
        submit ={submitForm}
      </MembersForm>
      {
        members.map(mems => {
          return (
            <Members key={mems.id} details={mems} />
          )
        })
      }
        </div>
      );
  }
}