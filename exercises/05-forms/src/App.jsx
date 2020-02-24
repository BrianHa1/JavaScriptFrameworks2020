import React, { useState } from "react";
import "./App.css";
// Import data from "assets/countries.json" and "assets/states.json" here
import countries from "./assets/countries";
import states from "./assets/states";

function App() {
  const [values, setValues] = useState({});
  const handleSelection = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  const [displaySubmissions, setDisplaySubmissions] = useState(false);
  const handleSubmission = e => {
    e.preventDefault();
    setDisplaySubmissions(true);
  };
  
  return (
    <form className="container mt-4" onSubmit={handleSubmission}>
      <div className="form-group">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={values.firstName}
          onChange={handleSelection}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          value={values.lastName}
          onChange={handleSelection}
        />
      </div>
      <div className="form-group">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          value={values.addressLine1}
          onChange={handleSelection}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input id="city"
          name="city" 
          type="text" 
          className="form-control" 
          value={values.city}
          onChange={handleSelection}/>
      </div>
      <div className="form-group">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        <select id="state" 
          name="state" 
          className="form-control" 
          value={values.state}
          onChange={handleSelection}>
        <option value="">
        </option>
        {
          states.map((state, i) => {
            return (
            <option value={state} key={`state-${i}`}>
              {state}
            </option>);
          })
        }
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
          value={values.postalCode}
          onChange={handleSelection}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        <select id="country" 
          name="country" 
          className="form-control" 
          value={values.country}
          onChange={handleSelection}>
        {
          countries.map((country, i) => {
            return (
            <option value={country} key={`country-${i}`}>
              {country}
            </option>);
          })
        }
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {displaySubmissions && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {
              Object.values(values).map((value, i) => {
                return <li key={`value-${i}`}>{value}</li>;
              })
            }
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
