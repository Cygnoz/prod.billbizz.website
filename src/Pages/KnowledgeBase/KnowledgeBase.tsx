import { useNavigate } from "react-router-dom";
import DotIcon from "../../assets/icons/DotIcon";
import ArrowrightUp from "../../components/ArrowRightUp";
import LandingComponent from "./LandingComponent";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";
type Props = {};

const KnowledgeBase = ({}: Props) => {
  const [data, setData] = useState([]);
  const { request: getData } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endpoints.GET_CATEGORIES}?categoryType=KnowledgeBase&project=BillBizz`;
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

  const navigate = useNavigate();
  return (
    <div className="bg-[#f6f6f6] ">
      <LandingComponent data={data} setData={setData} />

      <div className=" p-14">
        <p
          className="text-[#303F58] font-bold "
          onClick={() => navigate("/knowledge-base")}
        >
          Knowledge Base
        </p>

        <div className="grid lg:grid-cols-3 col-span-12 gap-12 my-8 rounded-xl">
          {data ? (
            data.map((item: any) => (
              <div className="bg-[#FFFFFF] p-5 text-start rounded-xl">
                <p className="flex items-center gap-2 text-base font-bold">
                  {" "}
                  <DotIcon color={"#45A7DE"} size={15} /> {item?.categoryName}
                </p>
                <p className="text-xs text-[#4B5C79] mb-5 mt-2">
                  {item?.description}
                </p>
                <hr />
                <div className="flex items-center px-3 py-3 ">
                  <div>
                    <p className="font-bold text-[#303F58]">{item?.articleCount} Article</p>
                  </div>
                  <div className="ml-auto flex items-center justify-center">
                    {" "}
                    <div
                      className="bg-black rounded-full w-[39px] h-[37px] flex items-center justify-center"
                      onClick={() =>
                        navigate(`/knowledge-base/${item._id}`, {
                         
                        })
                      }
                    >
                      <ArrowrightUp color="white" size={22} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-red-700 flex items-center justify-center my-5">No Categories Avilable !</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
