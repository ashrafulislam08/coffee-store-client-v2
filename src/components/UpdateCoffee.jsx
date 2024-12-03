import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, photo, supplier, taste, category, details } = coffee;
  const navigate = useNavigate();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated successfully");
          navigate("/");
        }
      });
  };
  return (
    <div className=" form-container">
      <div>
        <form
          className="card-body max-w-6xl mx-auto"
          onSubmit={handleUpdateCoffee}
        >
          <h2 className="font-rancho text-3xl">
            <Link to="/" className="flex gap-2 items-center">
              <FaArrowLeft />
              Back to Home
            </Link>
          </h2>
          <div className="text-center my-5 p-3">
            <h2 className="font-rancho text-[#374151] text-4xl mb-2">
              Update Existing Coffee Details
            </h2>
            <p className="font-raleway text-sm">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center">
            <div className="form-control col-span-1 w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                placeholder="Chef"
                defaultValue={chef}
                name="chef"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Supplier"
                name="supplier"
                className="input input-bordered"
                defaultValue={supplier}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="taste"
                name="taste"
                className="input input-bordered"
                defaultValue={taste}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                defaultValue={category}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input input-bordered"
                defaultValue={details}
                required
              />
            </div>
            <div className="form-control lg:col-span-2 w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                defaultValue={photo}
                required
              />
            </div>
            <div className="form-control mt-6 w-full lg:col-span-2">
              <button className="btn btn-primary font-rancho text-lg border-2 border-[#331A15] text-[#331A15] bg-[#D2B48C]">
                Update Coffee
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
