import React from "react";

const Search = (props) => {
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
      />
    </div>
  );
}

export default Search;