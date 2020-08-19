import React from 'react'

export default function MembersForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
      }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group submit'>
            <h2>Add a Member</h2>
            <button>submit</button>
          </div>
    
          <div className='form-group inputs'>
            <h4>General information</h4>
    
            <label>Username:&nbsp;
            <input 
            value={values.username}
            onChange={onChange}
            name='username' 
            placeholder='type username' 
            maxLength='' 
            type="text">
            </input>
    
            </label>
    
            <label>Email:&nbsp;
              <input
              value={values.email}
              onChange={onChange}
              name='email' 
              placeholder='insert email' 
              maxLength='' 
              type="email">
            </input>
            </label>
            <label>Role:&nbsp;
              <select onChange={onChange} value={values.role} name="role">
              <option value="">-- Select a role --</option>
              <option value="student">Student</option>
              <option value="team_lead">Team Lead</option>
              <option value="alumni">Alumni</option>
            </select>
            </label>
          </div>
        </form>
      )
}

