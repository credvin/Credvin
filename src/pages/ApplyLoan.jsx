import React, { useState } from 'react';

const ApplyLoan = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: '',
        duration: '',
        purpose: '',
    });

    const nextStep = () => setStep(prevStep => prevStep + 1);
    const prevStep = () => setStep(prevStep => prevStep - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add further processing logic here
    };

    return (
        <div>
            <h1>Apply for a Loan</h1>
            <form onSubmit={handleSubmit}>
                {step === 1 && ( 
                    <div>
                        <h2>Step 1: Personal Information</h2>
                        <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                        <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
                        <button type='button' onClick={nextStep}>Next</button>
                    </div>
                )}
                {step === 2 && ( 
                    <div>
                        <h2>Step 2: Loan Details</h2>
                        <input type='number' name='amount' placeholder='Loan Amount' value={formData.amount} onChange={handleChange} required />
                        <input type='text' name='duration' placeholder='Duration (years)' value={formData.duration} onChange={handleChange} required />
                        <button type='button' onClick={prevStep}>Previous</button>
                        <button type='button' onClick={nextStep}>Next</button>
                    </div>
                )}
                {step === 3 && ( 
                    <div>
                        <h2>Step 3: Purpose of Loan</h2>
                        <input type='text' name='purpose' placeholder='Purpose' value={formData.purpose} onChange={handleChange} required />
                        <button type='button' onClick={prevStep}>Previous</button>
                        <button type='submit'>Submit</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ApplyLoan;