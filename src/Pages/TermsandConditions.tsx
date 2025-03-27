import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/ApiEndpoints";

type Props = {};

function TermsandConditions({}: Props) {
  const [data, setData] = useState([]);
  const { request: getData } = useApi("get", 3001);
  const [loading, setLoading] = useState<boolean>(true);
  const handleGetData = async () => {
    try {
      setLoading(true); 
      const url = `${endpoints.GET_TERMS}?type=TermsAndConditions&project=BillBizz`;
      const { response, error } = await getData(url);
      console.log('url',url);
      console.log('res',response);
      console.log('err',error);
      
      if (!error && response) {
        setData(response.data.terms);
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
    <div className="m-8 space-y-8 text-[18px] text-[#353d44] poppins-medium">
      <p className="text-2xl   font-semibold text-black poppins-semibold">
        Terms And Conditions
      </p>

      <p className="mt-9 text-[#646464]">
        Your use of the Bill Bizz platform is governed by the following terms
        and conditions (“Terms of Use”), as well as the Bill Bizz Privacy Policy
        and other operational guidelines provided within the platform
        (collectively, the “Terms”). Bill Bizz reserves the right to update or
        modify these Terms at any time without prior notice. You are responsible
        for reviewing these Terms periodically, as your continued use of the
        platform signifies your acceptance of any changes. If you do not agree
        with these Terms, you should discontinue using the platform immediately.
      </p>

      {data.length > 0 ? (
        loading?<p>Loading...</p>:
  data.map((item: any) => (
    <div className="" key={item.id}>
      <p className="text-2xl font-semibold poppins-semibold">
        {item.termTitle}
      </p>
      <p className="text-[#646464]">
        {item.termDescription}
      </p>
    </div>
  ))
) : (
  <p className="flex items-center justify-center py-5 text-red-500">
    No terms and conditions available.
  </p>
)}

   
    </div>
  );
}

export default TermsandConditions;
