import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/ApiEndpoints";

type Props = {};

function Privacy({ }: Props) {
  const [data, setData] = useState([]);
  const { request: getData } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_TERMS}?type=LegalAndPrivacy&project=BillBizz`;
      const { response, error } = await getData(url);
      console.log('url', url);
      console.log('res', response);
      console.log('err', error);

      if (!error && response) {
        console.log(response.data);

        setData(response.data.terms);
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
        {data.length > 0 ? (
          data.map((item: any, index) => (
            <div key={item._id}>
              <p className="font-bold">
                {index + 1}. {item.termTitle}
              </p>
              <p>{item.termDescription}</p>
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
