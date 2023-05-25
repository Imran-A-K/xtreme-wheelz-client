import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyToysTableData from "../Components/MyToysPageComponents/MyToysTableData";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMytoys] = useState([]);
  const [priceSort, setPriceSort] = useState(1);
  useEffect(() => {
    fetch(
      `https://xtreme-wheelz-server.vercel.app/myToys/${user?.email}?priceSort=${priceSort}`
    )
      .then((response) => {
        return response.json();
      })
      .then((apiData) => {
        console.log(apiData);
        setMytoys(apiData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email, priceSort]);
  const deleteToy = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-error mr-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Once deleted the file cannot be recovered!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://xtreme-wheelz-server.vercel.app/deleteToy/${id}`, {
            method: "DELETE",
          })
            .then((response) => {
              return response.json();
            })
            .then(async (apiData) => {
              if (apiData.deletedCount > 0) {
                await swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                const remaining = myToys.filter((toy) => toy._id !== id);
                setMytoys(remaining);
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your toy is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>XtremeWheelz | My Toys</title>
      </Helmet>
      <div className=" bg-gray-100 gap-6 flex justify-center items-center px-20 py-10">
        <p>Sort with price : </p>{" "}
        <select
          placeholder="category"
          onChange={(event) => setPriceSort(Number(event.target.value))}
          className="px-4 outline-none text-gray-800 bg-white"
        >
          <option value="1">Least Expensive</option>
          <option value="-1">Most Expensive</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th className="pl-5">Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy, i) => (
              <MyToysTableData
                key={toy._id}
                toy={toy}
                serial={i + 1}
                deleteToy={deleteToy}
              ></MyToysTableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
