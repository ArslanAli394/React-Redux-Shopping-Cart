import React from "react";
import { searchItem, searchAllItem } from "../redux/actions/searchBrand";
import { useDispatch } from "react-redux";

const SideNav = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-group-flush">
        <li className="list-group-item display-3">Brand</li>
        <li className="list-group-item">
          <input
            type="button"
            name="All"
            value="All"
            onClick={(e) => {
              dispatch(searchAllItem());
            }}
            className="btn btn-outline-n one"
          />
        </li>
        <li className="list-group-item">
          <input
            type="button"
            name="Honda"
            onClick={(e) => {
              dispatch(searchItem(e.target.value));
            }}
            value="Honda"
            className="btn btn-outline-none"
          />
        </li>
        <li className="list-group-item">
          <input
            type="button"
            name="Yamaha"
            onClick={(e) => {
              dispatch(searchItem(e.target.value));
            }}
            value="Yamaha"
            className="btn btn-outline-none"
          />
        </li>
        <li className="list-group-item">
          <input
            type="button"
            name="Suzuki"
            onClick={(e) => {
              dispatch(searchItem(e.target.value));
            }}
            value="Suzuki"
            className="btn btn-outline-none"
          />
        </li>
      </ul>
    </>
  );
};

export default SideNav;
