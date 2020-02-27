import React from "react";

/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults(props) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {
          /* Add <li></li> tags here */
          Object.values(props.values).map((value, i) => {
            return <li key={`value-${i}`}>{value}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default AddressResults;
