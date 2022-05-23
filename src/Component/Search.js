import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PlayerList from "./PlayerList";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Form.Label>Search</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter Movie name or rating"
        onChange={(e) => setSearch(e.target.value)}
      />
      <PlayerList input={search} />
    </div>
  );
};

export default Search;
