import { Link } from "react-router-dom";

const MyToysTableData = ({ serial , toy, deleteToy }) => {
    const {
       _id, name, subcategory, price, quantity
      } = toy;
  return (
    <tr>
    <th>{serial}</th> 
    <td>{name}</td> 
    <td>{subcategory}</td> 
    <td>{price}</td> 
    <td className="pl-16">{quantity}</td> 
    <td><Link to={`/updateToy/${_id}`}><button className="btn btn-primary btn-outline">Update</button></Link></td> 
    <td><button onClick={() => deleteToy(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
  </tr>
    )
}

export default MyToysTableData