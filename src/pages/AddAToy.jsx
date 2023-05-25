/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const form = event.target;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    data.price = Number(price);
    data.quantity = Number(quantity);
    data.rating = Number(rating);
    data.seller = { name: seller_name, email: seller_email };
    // console.log(data)
    fetch(`https://xtreme-wheelz-server.vercel.app/addAToy`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then(async (apiData) => {
        // console.log(apiData)
        if (apiData.insertedId) {
          await Swal.fire({
            title: "Your toy has been successfully added",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Helmet>
        <title>XtremeWheelz | Add a Toy</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Toy Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                      <div className="md:col-span-3">
                        <label htmlFor="seller_name">Seller Name</label>
                        <input
                          {...register("seller_name")}
                          type="text"
                          name="seller_name"
                          id=""
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user?.displayName}
                          placeholder=""
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="seller_email">Seller Email</label>
                        <input
                          {...register("seller_email")}
                          type="text"
                          name="seller_email"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          value={user?.email}
                          placeholder=""
                        />
                      </div>
                      <div className="md:col-span-4">
                        <label htmlFor="name">Name of the Toy</label>
                        <input
                          {...register("name")}
                          type="text"
                          name="name"
                          id="name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="subcategory">Category</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          {/* <input name="subcategory" id="subcategory" placeholder="category" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" /> */}
                          <select
                            name="subcategory"
                            placeholder="category"
                            className="px-4 outline-none text-gray-800 w-full bg-transparent"
                            {...register("subcategory")}
                          >
                            <option value="Normal-Cars">Normal Cars</option>
                            <option value="Vintage-Cars">Vintage Cars</option>
                            <option value="Sports-Cars">Sports Cars</option>
                          </select>
                        </div>
                      </div>

                      <div className="md:col-span-6">
                        <label htmlFor="pictureURL">Photo Url of the Toy</label>
                        <input
                          required
                          {...register("pictureURL")}
                          type="url"
                          name="pictureURL"
                          id=""
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Photo Link"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="price">Price</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <span className="pl-4">$</span>
                          <input
                            required
                            type="number"
                            {...register("price")}
                            min={0}
                            name="price"
                            id="price"
                            placeholder="price"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="quantity">Available quantity</label>
                        <input
                          {...register("quantity")}
                          type="number"
                          min={1}
                          name="quantity"
                          id="quantity"
                          placeholder="Available quantity"
                          className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="rating">Rating</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            type="number"
                            {...register("rating")}
                            max={5}
                            min={1}
                            name="rating"
                            id="rating"
                            placeholder="rating"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <label htmlFor="description">Description</label>
                        <div className="h-20 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <textarea
                            {...register("description")}
                            name="description"
                            id="description"
                            placeholder="toy dexcription"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-6 mt-2 text-right">
                        <div className="inline-flex items-end">
                          <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
