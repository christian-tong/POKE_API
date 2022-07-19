import React from "react";

import "./Pagination.css";

function Pagination({ onLeftClick, onRightClick, page, totalPages }) {
  return (
    <div className="pagination">
      <button onClick={onLeftClick}>👈 </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>👉 </button>
    </div>
  );
}

export default Pagination;
