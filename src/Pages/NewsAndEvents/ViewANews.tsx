import { useNavigate, useParams } from "react-router-dom"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import Calendar from "../../assets/icons/Calendar"
import Clock from "../../assets/icons/Clock"
// import image from '../../assets/images/ViewNewsImage.png'
import image2 from '../../assets/images/ViewNewsFooter.png'
import useApi from "../../Hooks/useApi"
import { useEffect, useState } from "react"
import { endpoints } from "../../Services/ApiEndpoints"

type Props = {}

const ViewANews = ({ }: Props) => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [aNews, setANews] = useState([])
    const { request: getNews } = useApi('get', 3001)

    const handleAGetNews = async () => {
        try {
            const url = `${endpoints.GET_POSTS}/${id}`
            console.log('id', id);

            const { response, error } = await getNews(url)
            console.log('url', url);
            console.log('res', response);
            console.log('err', error);
            if (response && !error) {
                console.log(response.data?.data);
                setANews(response.data?.data)
            }
            else {
                console.log(error.response.data.message);
            }
        }
        catch (error) {
            console.log('error occured', error);

        }
    }

    useEffect(() => {
        handleAGetNews()
    }, [])

    const getTimeAgo = (timestamp: string | number | Date | null | undefined): string => {
        if (!timestamp) return "Invalid date";
    
        const now = new Date().getTime(); // Get current time in milliseconds
        const createdAt = new Date(timestamp).getTime(); // Convert timestamp to milliseconds
    
        if (isNaN(createdAt)) return "Invalid date"; // Ensure timestamp is valid
    
        const diffInMs = now - createdAt; // Difference in milliseconds
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)); // Convert to hours
    
        return diffInHours > 0 ? `${diffInHours} Hours Ago` : "Just now";
    };

    return (
        <div className="p-6">
            {aNews.length > 0 ? (
                aNews.map((item: any) => (
                    <div>
                        <div className="flex gap-4 items-center">
                            <div onClick={() => navigate("/news-and-events/view-all-news")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                                <ChevronLeft size={20} />
                            </div>
                            <p className="text-2xl font-bold text-black">
                                {item.title ? item.title:'N/A'}
                            </p>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mt-1 space-x-3 px-16">
                            <div className="bg-[#EAD1D1] rounded-3xl w-44 h-7 flex gap-3 items-center px-4">
                                <div className="bg-[#393939] rounded-full w-2 h-2"></div>
                                <p>ERP Software</p>
                            </div>
                            <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                            <div className="flex items-center gap-2 me-2">
                                <Calendar />
                                <span>{new Date(item?.createdAt).toLocaleDateString("en-US", {
                                            month: "2-digit",
                                            day: "2-digit",
                                            year: "numeric"
                                        })}</span>
                            </div>
                            <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                            <div className="flex items-center gap-2">
                                <Clock />
                                <span>{getTimeAgo(item?.createdAt)}</span>
                            </div>
                        </div>

                        <div className="my-6 px-4 py-4">
                            <img className="h-[540px]" src={item.image[0]} alt="" />
                            <p className="my-6">
                                {item.content}
                            </p>
                        </div>

                        <div className="mt-10">
                            <img className="" src={image2} alt="" />
                        </div>
                    </div>
                ))
            )
                : (
                    <p>no news available</p>
                )}
        </div>
    )
}

export default ViewANews