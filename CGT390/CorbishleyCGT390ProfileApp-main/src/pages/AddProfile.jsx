import { useState, useEffect } from 'react'
import '../styles/App.css'
import Wrapper from '../components/Wrapper.jsx'
import ProfileForm from '../components/ProfileForm.jsx'


function AddProfile() {
  const [mode, setMode] = useState(false);

  return (
      <Wrapper mode={mode}>
        <h1> Add Profile </h1>
        <ProfileForm darkMode={mode}></ProfileForm>
      </Wrapper>
  )
}

export default AddProfile;