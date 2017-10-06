import React from "react";
import "./List.css";

const List = ({ children }) => {
  return (
    <div>
      <ul>
        {children}
      </ul>
    </div>
  );
};

export default List;
