import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  return (
    <div className='App'>
      <div className='container'>
        <div className='generator'>
          <h2 className='generator__header'>
            Password Generator
          </h2>
          <div className='generator__password'>
            <h3>Password</h3>
            <button className="copy__btn">
              <i className='far fa-clipboard'></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password Strength</label>
            <input
            type="number"
            id="password-strength"
            name="password-strength"
            max='20'
            min='10'/>
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Uppercase letters</label>
            <input
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Include Lowercase letters</label>
            <input
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            />
          </div>
          <button className="generator__btn">Generate Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;