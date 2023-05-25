import { useLoaderData } from "react-router-dom";
import TableData from "../Components/AllToysPageComponents/TableData";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const toyList = useLoaderData();
  const [allToys, setAllToys] = useState(toyList);
  const [searchNotMatched, setSeacrhNotMatched] = useState(false);

  // console.log(allToys)

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const matchedToys =
      searchText === ""
        ? toyList
        : toyList.filter((toy) =>
            toy.name.toLowerCase().includes(searchText.toLowerCase())
          );
    if (matchedToys.length === 0) {
      setSeacrhNotMatched(true);
    } else {
      setSeacrhNotMatched(false);
    }
    setAllToys(matchedToys);
  }, [searchText, toyList]);
  const handleSearch = () => {
    // console.log(searchText)
    const matchedToys =
      searchText === ""
        ? toyList
        : toyList.filter((toy) =>
            toy.name.toLowerCase().includes(searchText.toLowerCase())
          );
          if (matchedToys.length === 0) {
            setSeacrhNotMatched(true);
          } else {
            setSeacrhNotMatched(false);
          }
    // console.log(matchedToys)
    setAllToys(matchedToys);
  };
  return (
    <div>
      <Helmet>
        <title>XtremeWheelz | All Toys</title>
      </Helmet>
      <div className=" bg-gray-100 flex justify-center items-center px-20 py-10">
        <div className="space-y-10">
          <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Search your toy..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </div>

            <div
              onClick={handleSearch}
              className="bg-gray-800 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
            >
              <span>Search</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th className="pl-10">Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, i) => (
              <TableData key={toy._id} toy={toy} serial={i + 1}></TableData>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {searchNotMatched && (
          <span className="text-orange-800 text-4xl text-center pt-20">
            No toys matched your search. Please check if you entered toy name
            correctly
          </span>
        )}
      </div>
    </div>
  );
};

export default AllToys;
