import React, { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [values, setValues] = useState({});
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return 
    <>
    {
      displayResults ? (
        <AddressResults values={values}/>
      ) : <AddressForm
            values={values}
            setValues={setValues}
            setDisplayResults={setDisplayResults}
          />
    }
    </>;
}

export default App;
