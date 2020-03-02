import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
    setGroceryList([
      ...groceryList,
      {
        name,
        cost: parseFloat(cost)
      }
    ]);
    setName("");
    setCost("");
  };

  const removeFromList = indexToRemove => {
    setGroceryList(
      [...groceryList].filter((item, i) => i !== indexToRemove)
    );
  };

  const clearList = () => setGroceryList([]);

  const calculateTotal = () => {
    return groceryList.reduce((total, item) => {
      return total + item.cost;
    }, 0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name && (cost || cost === 0)){
      addToList();
      setHasError(false);
    }
    else{
      setHasError(true);
    }
  };

  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            value={cost}
            onChange={e => setCost(parseFloat(e.target.value))}
          />
          <div>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
        {hasError && (
          <p className="help-block text-danger">You must fill in both fields.</p>
        )}
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {groceryList.map((item, i) => {
              return (
                <tr key={`item-${item}`}>
                  <td>{item.name}</td>
                  <td>${item.cost.toFixed(2)}</td>
                  <td>
                    <button
                      aria-label="Delete"
                      title="Delete"
                      className="btn"
                      onClick={() => removeFromList(i)}
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>
            Total Cost: ${calculateTotal().toFixed(2)}
          </strong>
        </p>
        <div className="text-right">
          <button
            type="button" 
            className="btn btn-outline-success"
            onClick={clearList}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
