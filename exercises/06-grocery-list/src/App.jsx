import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {
  const [items, setItems] = useState([
    {
      name: "Bananas",
      cost: 3.99
    },
    {
      name: "Mangos",
      cost: 2.79
    }
  ]);
  const [totalCost, setTotalCost] = useState(0);
  const updateList = e => {
    setItems([...items]);
  };
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline">
          <input
            className="form-control"
            type="text"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
          />
          <div>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
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
          {items.map((item, i) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>${item.cost}</td>
                  <td>
                    {/* <button aria-label="Delete" title="Delete" ... >
                  &times;
                </button> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="lead">
          <strong>
            Total Cost: 
            {
              /* Complete me */
            }
            </strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
