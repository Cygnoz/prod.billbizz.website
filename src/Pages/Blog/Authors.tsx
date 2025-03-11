import img4 from "../../assets/images/image (9).png";
import { useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { endpoints } from "../../Services/ApiEndpoints";

type Author = {
  id: number;
  name: string;
  designation: string;
  profileImage?: string;
};

function Authors() {
  const [data, setData] = useState<Author[]>([]);
  const { request: getData } = useApi("get", 3001);

  const handleGetData = async () => {
    try {
      const url = `${endpoints.AUTHORS}`;
      const { response, error } = await getData(url);

      if (!error && response) {
        setData(response.data.authors);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <div>
      <h3 className="text-[21px] font-semibold capitalize mb-5">
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#EE3FD8] to-[#FFDD65]">
          Our
        </span>
        <span className="text-[#222222]"> Authors</span>
      </h3>

      {data.map((author: any) => (
        <div key={author.id} className="flex mb-4 items-center">
          <img
            src={author.userImage ? author.userImage : img4}
            alt={author.name}
            className="h-20 w-20 rounded-full object-cover"
          />
          <div className="ps-3 space-y-2">
            <p className="text-[#222222] text-[17px] font-semibold capitalize leading-[17px]">
              {author.userName}
            </p>
            <p className="text-[#666666] text-xs font-light capitalize leading-[18px]">
              {author.role}
            </p>
            {/* <div className="flex gap-2 pt-2">
              <div className="border p-1 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#FFDD65] hover:text-white">
                <Facebook />
              </div>
              <div className="border p-1 w-6 h-6 flex items-center justify-center rounded-md hover:bg-[#FFDD65] hover:text-white">
                <Twitter />
              </div>
              <div className="border p-1 w-6 h-6 flex items-center justify-center hover:bg-[#FFDD65] rounded-md hover:text-white">
                <Instagram />
              </div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Authors;
