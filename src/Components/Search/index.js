import React from "react";
import { Input } from "antd";

const Search = Input.Search;

const SearchBar = () => (
  <div>
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: '30vw'}}
    />
  </div>
);

export default SearchBar;
