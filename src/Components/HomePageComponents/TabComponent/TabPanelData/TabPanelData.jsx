import { useEffect, useState } from "react"
import TabPanelCard from "./TabPanelCard";

const TabPanelData = ({ subCategory }) => {
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        fetch(`https://xtreme-wheelz-server.vercel.app/allToys/${subCategory}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setCategoryData(data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [subCategory])
    // console.log(categoryData)
  return (
    <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {
            categoryData.map(category => <TabPanelCard
            key={category._id}
            category={category}
            ></TabPanelCard>)
        }
        </div>
    </div>
  )
}

export default TabPanelData