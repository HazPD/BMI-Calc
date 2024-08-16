import React from 'react';
import { useState } from 'react';


const BmiCalculator = () => {
  const[weight,setWeight] = useState('');
  const[height,setHeight] = useState('');
  const[bmi,setBMI] = useState(null);
  const[category,setCategory] = useState('');

  const goCalculate = () => {
    if (!weight || !height) {
        alert('You need to enter both weight and height')
        return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / heightInMeters**2).toFixed(2);
    setBMI(bmiValue);

    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue < 24.9) {
      bmiCategory = 'Healthy Weight';
    } else if (bmiValue < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
    setCategory(bmiCategory);

    setWeight('');
    setHeight('');
};

    return (
        <div className='container'>        
                <h1>BMI Calculator</h1>
                <div className='labels'>
                    <input 
                            type="number"
                            value={weight}
                            placeholder="  Enter weight in KG..."
                            onChange={(e) => setWeight(e.target.value)}>
                    </input>
                    

                    <input
                        type="number"
                        value={height}
                        placeholder="  Enter height in CM..."
                        onChange={(e) => setHeight(e.target.value)}>
                    </input>                   
                </div>
                <button onClick={goCalculate}>Calculate</button>
                    {bmi && (
                        <div className='result'>
                        <h3>Your BMI is : {bmi}</h3>
                        <h3>Category : {category}</h3>
                        </div>
                    )}
        </div>   
  )};

export default BmiCalculator;