import React from "react";
import { FaPen } from "react-icons/fa";
import { IoEye, IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, loadedCoffees, setLoadedCoffees }) => {
  const { _id, name, chef, photo, supplier, taste, category, details } = coffee;

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/coffee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = loadedCoffees.filter(
            (coffee) => coffee._id !== _id
          );
          setLoadedCoffees(remaining);
        }
      });
  };

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
          <Link to={`/updateCoffee/${_id}`}>
            <FaPen />
          </Link>
        </button>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
};

export default Coffee;
