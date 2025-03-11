import { useEffect, useState } from "react";
import { endpoints } from "../Services/ApiEndpoints";
import useApi from "../Hooks/useApi";

type Props = {};

const Security = ({}: Props) => {
   const [data, setData] = useState([]);
    const { request: getData } = useApi("get", 3001);
  
    const handleGetData = async () => {
      try {
        const url = `${endpoints.GET_LEGAL_PRIVACY_AND_SECURITY}?legalAndSecurityType=Security`;
        const { response, error } = await getData(url);
  
        if (!error && response) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
  
  
    useEffect(() => {
      handleGetData();
    }, []);
  return (
    <div className="m-6 space-y-4">
      <p className="text-[#3b3b3b] text-2xl font-bold">Security Terms</p>

      <p className="text-xl font-semibold text-[#383838]">
        Last Update : [Insert Date]
      </p>
      <div className="text-2xl text-[#6d6d6d] space-y-6">
        {data.length > 0 ? (
            data.map((item:any, index:number) => (
              <div key={item._id}>
                <p className="font-bold">{index + 1}. {item.title}</p>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No security terms available.</p>
          )}
      </div>
    </div>
  );
};

export default Security;
