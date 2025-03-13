import { useNavigate } from "react-router-dom"
import ChevronLeft from "../../assets/icons/ChevronLeft"
import Calendar from "../../assets/icons/Calendar"
import Clock from "../../assets/icons/Clock"
import image from '../../assets/images/ViewNewsImage.png'
import image2 from '../../assets/images/ViewNewsFooter.png'

type Props = {}

const ViewANews = ({ }: Props) => {

    const navigate = useNavigate()

    return (
        <div className="p-6">
            <div className="flex gap-4 items-center">
                <div onClick={() => navigate("/news-and-events/view-all-news")} className="bg-[#5D5D5D1A] w-12 h-12 cursor-pointer rounded-full border-2 border-[#FFFFFFA6] items-center flex justify-center">
                    <ChevronLeft size={20} />
                </div>
                <p className="text-2xl font-bold text-black">
                    Exciting Launch Ahead: BizTrack ERP Software Set to Transform Inventory Management!
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
                    <span>02 december 2022</span>
                </div>
                <div className="bg-[#5F5E5E] w-[1px] h-5"></div>
                <div className="flex items-center gap-2">
                    <Clock />
                    <span>8 Hours Ago</span>
                </div>
            </div>

            <div className="my-6 px-4 py-4">
                <img className="h-[540px]" src={image} alt="" />
                <p className="my-6">
                    Join industry leaders, business owners, and financial experts at the Bill Bizz Annual Business Summit 2025. This event will cover the latest trends in billing and financial management, product updates, and networking opportunities.urus egestas sit nisl lacinia ornare adipiscing pellentesque quis suscipit. Aliquet non vel quis nulla mattis elementum sed ante. Dolor sit dolor imperdiet porttitor morbi nibh. Risus proin mattis senectus pellentesque viverra.
                    Amet in et pellentesque tempor netus nec. Phasellus est aenean ac lectus vulputate varius euismod turpis eget. Pharetra odio pulvinar eget nec neque sapien elit ipsum. Aliquet a sit ipsum donec cras nisl morbi. Aenean tortor blandit dignissim amet turpis. Fringilla pellentesque sed malesuada dis aliquet nec dictum sed tellus. Sapien ac proin velit ipsum vitae velit sed tincidunt. Aenean gravida amet amet elit molestie. Sed semper at eu velit metus elit. Scelerisque eu gravida risus sit sit pretium vitae. Auctor malesuada malesuada arcu sit. Vel scelerisque ultrices ut vitae elit feugiat. Est a vehicula dictum amet eget.
                    <br />
                    Sem etiam interdum ultricies amet urna tortor ullamcorper. A aliquet purus nibh a. Velit diam nunc tellus eget dolor pellentesque. Auctor vitae ullamcorper vitae urna arcu lorem nunc urna faucibus. Malesuada cursus neque velit non suspendisse. Tempus nibh sed quis sagittis metus iaculis amet amet magna. Lobortis neque odio viverra augue ut. Gravida aliquet diam in ut morbi sit dictumst. Pharetra elementum urna urna elementum lacus enim bibendum. A turpis volutpat.
                </p>
            </div>

            <div className="mt-10">
                <img className="" src={image2} alt="" />
            </div>
        </div>
    )
}

export default ViewANews