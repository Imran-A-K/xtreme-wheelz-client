import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const TabPanelCard = ({ category }) => {
    const { name,price,rating,pictureURL  } = category;
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const handleClick = async (id) =>{
        if(user == null){
           await Swal.fire({
                title: 'You have to log in first to view details',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            return navigate(`/toy/${id}`)
        }
        navigate(`/toy/${id}`)
    }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
        
  <figure><img className="h-60 w-full" src={pictureURL} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
    <p className="font-semibold">Price: ${price}</p>
    <div className="flex justify-between items-center gap-2">
          
          <span className=" pt-2 text-lg">Rating: {rating}</span>
          {/* <Link to={`/toy/${category._id}`}><button className="btn bg-sky-50 btn-outline btn-secondary">View Details</button></Link> */}
          <button onClick={() => handleClick(category._id)} className="btn bg-sky-50 btn-outline btn-secondary">View Details</button>
        </div>
  </div>
</div>
  )
}

export default TabPanelCard