import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";

type Props = {};

const Categories = ({}: Props) => {
     const [data, setData] = useState([]);
     const { request: getData } = useApi("get", 3001);
     const [loading, setLoading] = useState<boolean>(true);
     const handleGetData = async () => {
       try {
        setLoading(true);
         const url = `${endpoints.GET_CATEGORIES}?categoryType=Blogs&project=BillBizz`;
         const { response, error } = await getData(url);
          console.log('url',url);
          console.log('res',response);
          console.log('err',error);
          
         if (!error && response) {
           setData(response.data.data);
         }
         else{
          console.log('else error',error.response.data.message);
          
         }
       } catch (error) {
         console.log("Error", error);
       }
       finally {
        setLoading(false);
      }
     };
   
     console.log("Blog Data", data);
   
     useEffect(() => {
       handleGetData();
     }, []);
  return (
  <>
  <p className="text-[21px] mt-10  font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#CC1111] to-[#8F0100] ">
             Categories
           </p>
       <div className="overflow-y-auto scrollbar-hidden max-h-96 w-full">
       {data.length>0 ?
       loading?<p>Loading...</p>: data?.map((item:any)=>( 
         <div className=""> 
         <div className="flex w-full p-4">
           <p className="relative justify-start text-[#1c1c1c] text-[15px] font-medium font-['Inter'] capitalize leading-snug mt-4">
             {item.categoryName}
           </p>
           <p className="relative text-right justify-start text-[#1c1c1c] text-[15px] font-medium font-['Inter'] capitalize leading-snug ml-auto mt-4">
             {item.postCount}
           </p>
         </div>
         <div className="w-[320px] h-[0px] relative border-dashed border mt-2 border-[#d1e7e5]"></div>
       </div>
       ))
         :(
          <p className="text-[red] flex items-center justify-center p-10">No Categories Found</p>
         )}
       </div>
  </>
  );
};

export default Categories;
