import React, { useState } from "react";

const SearchUser = ({ search, setSearch }) => {
  function searchUser(e) {
    setSearch(e.target.value);
  }

  function clearInput() {
    setSearch("");
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Seach User"
        value={search}
        onChange={searchUser}
      />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
};

export default SearchUser;
