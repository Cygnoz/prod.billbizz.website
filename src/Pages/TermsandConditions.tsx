import { useEffect, useState } from "react";
import useApi from "../Hooks/useApi";
import { endpoints } from "../Services/ApiEndpoints";

type Props = {};

function TermsandConditions({}: Props) {
  const [data, setData] = useState([]);
  const { request: getData } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_TERMS_AND_CONDITIONS}`;
      const { response, error } = await getData(url);

      if (!error && response) {
        setData(response.data.terms);
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

   {  data.map((item: any) => (
     <div className="" key={item.id}>
        <p className="text-2xl   font-semibold  poppins-semibold">
         {item.termTitle}
        </p>
  
        <p className="text-[#646464]">
        {item.termDescription}
        </p>
     </div>
   ))
}
   
    </div>
  );
}

export default TermsandConditions;
