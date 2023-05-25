/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>XtremeWheelz | Page Not Found</title>
      </Helmet>
      <div className="lg:px-24 lg:py-24 md:gap-28 gap-16 md:py-20 flex justify-center md:px-44 px-4 py-24 items-center flex-col lg:flex-row ">
        <div>
          <img src="https://media.istockphoto.com/id/1207750534/photo/404-error-internet-page-not-found-hand-with-magnifier-concept-picture.jpg?b=1&s=612x612&w=0&k=20&c=LCa3sH4YETq54JMXnrVjl2iCQQNBj-DXrorIhu71NBI=" />
        </div>
        <div className="relative pb-12 lg:pb-0 xl:pt-24 w-full xl:w-1/2 ">
          <div className="">
            <h1 className="my-2 text-orange-800 font-bold uppercase text-3xl lg:text-5xl mb-10">
              Un expected error occured!
            </h1>
            <p className="my-2 text-gra-800">
              Please visit our homepage to get where you need to go.
            </p>
            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-orange-500 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
              <Link to="/">Let's go!</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
