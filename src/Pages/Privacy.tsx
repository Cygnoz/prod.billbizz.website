import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/ApiEndpoints";

type Props = {};

function Privacy({}: Props) {
  const [data, setData] = useState([]);
  const { request: getData } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_LEGAL_PRIVACY_AND_SECURITY}?legalAndSecurityType=Legal`;
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
    <div className="my-10 mx-8 space-y-4">
      <p className="text-2xl font-bold">Privacy Policy</p>
      <p className="text-lg font-semibold py-3">Effective Date: [Insert Date]</p>

      <div className="text-2xl text-[#6d6d6d] space-y-6">
        {data.map((item:any, index) => (
        <>
            <p className="font-bold" key={item._id}>
              {index + 1}. {item.title} 
             
            </p>
            <p> {item.description}</p>
        </>
        ))}
      </div>
    </div>
  );
}

export default Privacy;
