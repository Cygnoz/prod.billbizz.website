import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";

type Props = {};

const Categories = ({}: Props) => {
     const [data, setData] = useState([]);
     const { request: getData } = useApi("get", 3001);
   
     const handleGetData = async () => {
       try {
         const url = `${endpoints.GET_CATEGORIES}/?categoryType=Blogs`;
         const { response, error } = await getData(url);
   
         if (!error && response) {
           setData(response.data.data);
         }
       } catch (error) {
         console.log("Error", error);
       }
     };
   
     console.log("Blog Data", data);
   
     useEffect(() => {
       handleGetData();
     }, []);
  return (
  <>
  <p className="text-[21px] mt-10 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#CC1111] to-[#8F0100] ">
             Categories
           </p>
        { data?.map((item:any)=>( <div>
           
     
           <div className="flex w-full mt-">
             <p className="relative justify-start text-[#1c1c1c] text-[15px] font-medium font-['Inter'] capitalize leading-snug mt-4">
              {item.categoryName}
             </p>
             <p className="relative text-right justify-start text-[#1c1c1c] text-[15px] font-medium font-['Inter'] capitalize leading-snug ml-auto mt-4">
              {item.postCount}
             </p>
           </div>
           <div className="w-[360px] h-[0px] relative border-dashed border mt-2 border-[#d1e7e5]"></div>
           
         </div>))}
  </>
  );
};

export default Categories;
