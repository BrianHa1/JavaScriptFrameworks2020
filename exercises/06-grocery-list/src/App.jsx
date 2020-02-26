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
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  }
  const updateList = e => {
    setItems([...items]);
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
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            value={itemCost}
            onChange={e => setItemCost(e.target.value)}
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
