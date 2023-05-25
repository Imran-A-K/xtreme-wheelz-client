import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toy = useLoaderData();

  const {
    _id,
    pictureURL,
    name,
    seller,
    price,
    rating,
    quantity,
    description,
  } = toy;

  return (
    <div className=" flex flex-col">
      <Helmet>
        <title>XtremeWheelz | Toy Details</title>
      </Helmet>
      <img src={pictureURL} className="px-56 " />
      <div className="px-56">
        <h1 className="text-4xl text-center font-bold py-10">{name}</h1>
        <p className="text-3xl">
          <span className="font-semibold">Seller Email:</span> {seller.email}
        </p>
        <p className="text-3xl">
          <span className="font-semibold">Seller:</span> {seller.name}
        </p>
        <p className="text-3xl">
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p className="text-3xl">
          <span className="font-semibold">Rating:</span> {rating}
        </p>
        <p className="text-3xl">
          <span className="font-semibold">Available quantity:</span> {quantity}
        </p>
        <p className="text-3xl ">
          <span className="font-semibold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default SingleToy;
