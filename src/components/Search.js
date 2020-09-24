import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { searchBarItem } from "../redux/actions/searchBrand";
const Search = () => {
  const dispatch = useDispatch();
  return (
    <Form inline className="my-3 mr-5 justify-content-end">
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        onChange={(e) => {
          dispatch(searchBarItem(e.target.value));
        }}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default Search;
