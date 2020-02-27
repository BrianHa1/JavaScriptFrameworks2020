import React, { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [values, setValues] = useState({});
  const handleSelection = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  const [displayResults, setDisplayResults] = useState(false);
  const handleSubmission = e => {
    e.preventDefault();
    setDisplayResults(true);
  }
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */

  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return <>{displayResults ? <AddressResults /> : <AddressForm />}</>;
}

export default App;
