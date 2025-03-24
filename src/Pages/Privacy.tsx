import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/ApiEndpoints";

type Props = {};

function Privacy({}: Props) {
  const [data, setData] = useState([]);
  const { request: getData } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_TERMS}?type=LegalAndPrivacy&project=BillBizz`;
      const { response, error } = await getData(url);

      if (!error && response) {
        setData(response.data.terms);
      }
    } catch (error) {
      console.error("Error fetching privacy terms:", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div className="my-10 mx-4 sm:mx-8 space-y-6">
      <p className="text-3xl sm:text-4xl font-bold ">Privacy Policy</p>
      <p className="text-lg sm:text-xl font-semibold py-3">
        Effective Date: [Insert Date]
      </p>

      <div className="text-lg sm:text-xl text-[#6d6d6d] space-y-8">
        {data.length > 0 ? (
          data.map((item: any, index) => (
            <div key={item._id} className="p-4 rounded-lg shadow-sm">
              <p className="font-bold mb-2">
                {index + 1}. {item.termTitle}
              </p>
              <p className="leading-relaxed">{item.termDescription}</p>
            </div>
          ))
        ) : (
          <p className="flex items-center justify-center py-5 text-red-500">
            No privacy terms available.
          </p>
        )}
      </div>
    </div>
  );
}

export default Privacy;
