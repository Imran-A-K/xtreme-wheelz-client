import { Link } from "react-router-dom";

const TableData = ({serial , toy}) => {
    
     const {
        name, seller, subcategory, price, quantity
      } = toy;
  return (
    <tr>
        <th>{serial}</th> 
        <td>{seller.name}</td> 
        <td>{name}</td> 
        <td>{subcategory}</td> 
        <td>{price}</td> 
        <td className="sm:pl-20">{quantity}</td> 
        <td><Link to={`/toy/${toy._id}`}><button className="btn bg-indigo-100 btn-outline btn-primary">View Details</button></Link></td>
      </tr> 
  )
}

export default TableData