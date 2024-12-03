import React from "react";
import { FaPen } from "react-icons/fa";
import { IoEye, IoTrashOutline } from "react-icons/io5";

const Coffee = ({ coffee, setLoadedCoffees }) => {
  console.log(coffee);
  const { _id, name, chef, photo, supplier, taste, category, details } = coffee;
  return (
    <div className="flex items-center gap-5 my-8">
      {/* Image */}
      <div>
        <img src={photo} alt="" />
      </div>
      {/* Texts */}
      <div className="font-raleway">
        <h3>Name: {name}</h3>
        <h3>Chef: {chef}</h3>
        <h3>Category: {category}</h3>
      </div>

      {/* Actionable Buttons */}
      <div className="join join-vertical space-y-4">
        <button className="btn btn-warning">
          <IoEye />
        </button>
        <button className="btn btn-neutral">
          <FaPen />
        </button>
        <button className="btn btn-error">
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
};

export default Coffee;
