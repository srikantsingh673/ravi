import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [age, setAge] = useState('');
    const [isEligible, setIsEligible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (age === '' || isNaN(age)) {
            setIsEligible(false);
        } else {
            setIsEligible(parseInt(age, 10) >= 18);
        }
    };

    const handleCheckEligibility = () => {
        setSubmitted(true);

        if (age === '' || isNaN(age)) {
            setIsEligible(false);
        } else {
            setIsEligible(parseInt(age, 10) >= 18);
        }
    };

    return (
        <div className="card">
            <h2>Voting Eligibility Checker</h2><br/><br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Your Age:
                    <input
                        type="number"
                        value={age}
                        onChange={handleAgeChange}
                        placeholder="Enter your age"
                        min="0"
                        required
                    />
                </label><br/><br/><br/>
                <button type="button" onClick={handleCheckEligibility}>Check Eligibility</button><br/>
            </form>
            {submitted && age !== '' && (
                <p>
                    You are {age} years old.{' '}
                    {isEligible ? 'You are eligible for voting.' : 'You are not eligible for voting.'}
                </p>
                
            )}
            <br/>
        </div>
    );
};

export default Contact;
