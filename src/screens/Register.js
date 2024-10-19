import React, { useEffect, useState } from 'react';

function Register() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(13);

    function handleRegister(event) {
        event.preventDefault(); // Prevents page reload on form submit
        alert("You have been registered");
        console.log("Hello, You have been registered");
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Age:", age); // Log the age
    }

    function increaseAge(event){
      event.preventDefault();
      setAge(age + 1);
    }

    useEffect(() => {
        //setAge(13); // Setting the age
        console.log("Age set to:", 13); // You can also log this to check
    }, []);

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input 
                    className='form-input' 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='Enter your password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p>Age: {age}</p> {/* Displaying the age */}
                <button onClick={increaseAge}>Increase Age</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
