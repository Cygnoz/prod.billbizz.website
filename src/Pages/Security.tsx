import { useEffect, useState } from "react";
import { endpoints } from "../Services/ApiEndpoints";
import useApi from "../Hooks/useApi";

type Props = {};

const Security = ({}: Props) => {
   const [data, setData] = useState([]);
    const { request: getData } = useApi("get", 3001);
  
    const handleGetData = async () => {
      try {
        const url = `${endpoints.GET_TERMS}?type=Security&project=BillBizz`;
        const { response, error } = await getData(url);
        console.log('url',url);
        console.log('response',response);
        console.log('err',error);
        
        if (!error && response) {
          console.log(response.data);
          setData(response.data.terms);
        }
        else{
          console.log(error.response.data.message);
          
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
  
  
    useEffect(() => {
      handleGetData();
    }, []);
  return (
    <div className="my-10 mx-4 sm:mx-8 space-y-6">
      <p className="text-[#3b3b3b] text-2xl font-bold">Security Terms</p>

      {/* <p className="text-xl font-semibold text-[#383838]">
        Last Update : [Insert Date]
      </p> */}
      <div className="text-2xl text-[#6d6d6d] space-y-6">
        {data.length > 0 ? (
            data.map((item:any, index:number) => (
              <div key={item._id}>
                <p className="font-bold">{index + 1}. {item.termTitle}</p>
                <p>{item.termDescription}</p>
              </div>
            ))
          ) : (
            <p className="flex items-center justify-center py-5 text-red-500">No security terms available.</p>
          )}
      </div>
    </div>
  );
};

export default Security;
