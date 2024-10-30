import React, { useEffect, useState } from 'react';
import './Register.css'; // Assuming you add styles in a Register.css file

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState(13);
    const [error, setError] = useState('');

    function handleRegister(event) {
        event.preventDefault();

        // Basic validation for empty fields
        if (!email || !password) {
            setError('Please fill out all fields.');
            return;
        }

        // Reset error and display confirmation
        setError('');
        alert("You have been registered");
        console.log("Registration Details:", { email, password, age });

        // Clear input fields
        setEmail('');
        setPassword('');
        setAge(13);
    }

    function increaseAge(event) {
        event.preventDefault();
        if (age < 120) { // Setting a reasonable age limit
            setAge(age + 1);
        }
    }

    useEffect(() => {
        console.log("Initial Age set to:", age);
    }, []);

    return (
        <div className="register-container">
            <form onSubmit={handleRegister} className="register-form">
                <h2>Register</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    className="form-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="form-input"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <p>Age: {age}</p>
                <button onClick={increaseAge} className="age-button">Increase Age</button>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Register;
