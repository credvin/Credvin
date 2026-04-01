import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const EMICalculator = () => {
    const [principal, setPrincipal] = useState(100000);
    const [interest, setInterest] = useState(10);
    const [term, setTerm] = useState(12);

    const calculateEMI = (p, r, n) => {
        const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        return Number.isNaN(emi) ? 0 : emi;
    }

    const handlePrincipalChange = (event, newValue) => { setPrincipal(newValue); };
    const handleInterestChange = (event, newValue) => { setInterest(newValue); };
    const handleTermChange = (event, newValue) => { setTerm(newValue); };

    const monthlyInterest = interest / 12 / 100;
    const emi = calculateEMI(principal, monthlyInterest, term);

    return (
        <div>
            <Typography gutterBottom>Loan Amount: ${principal}</Typography>
            <Slider
                value={principal}
                onChange={handlePrincipalChange}
                min={50000}
                max={500000}
                step={1000}
                valueLabelDisplay="auto"
            />
            <Typography gutterBottom>Interest Rate: {interest}%</Typography>
            <Slider
                value={interest}
                onChange={handleInterestChange}
                min={1}
                max={20}
                step={0.1}
                valueLabelDisplay="auto"
            />
            <Typography gutterBottom>Loan Term: {term} months</Typography>
            <Slider
                value={term}
                onChange={handleTermChange}
                min={6}
                max={60}
                step={1}
                valueLabelDisplay="auto"
            />
            <Typography variant="h6">Monthly EMI: ${emi.toFixed(2)}</Typography>
        </div>
    );
};

export default EMICalculator;