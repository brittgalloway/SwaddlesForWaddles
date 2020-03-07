import React from "react";
// import "./style.css";

//MAKE THIS LIST A TABLE!!!!!!!!!!!!!!!!!!!!!!!

export function List(props) {
  return null;
}

export function ListItem({ transactionDate, amount }) {
  return (
    <li className="list-group-item">
      {transactionDate} | ${amount}
    </li>
  );
}
