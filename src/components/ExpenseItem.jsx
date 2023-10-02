import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ date, amount, title }) {
  const [titles, setTitles] = useState(title);
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titles}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button
        onClick={() => {
          setTitles("Updated!");
        }}
      >
        Change title
      </button>
    </div>
  );
}

export default ExpenseItem;
