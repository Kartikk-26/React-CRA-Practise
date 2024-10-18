import React from 'react'

function Register() {
    
    function handleRegister(event){
        event.preventDefault(event)
        alert("You have been registered");
        console.log("Hello You have been resgistered")
    }

  return (
    <div>
        <input type = "email" placeholder='Enter your email'></input>
        <button onClick={handleRegister}>Sumbit</button>
    </div>
  )
}

export default Register