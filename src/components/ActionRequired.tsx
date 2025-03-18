import warningsign from '../assets/images/warning sign.png'
import frame from '../assets/images/Frame 630359.png'

interface ActionRequiredProps {
  message?: string
}

export default function ActionRequired({ 
  message = "Action Required: Please verify this transaction or contact support" 
}: ActionRequiredProps) {
  return (
    <div className="relative w-full max-w-sm -mb-8">
      {/* Background Frame */}
      <img
        src={frame}
        alt=""
        className="w-full h-[500px] mt-28"
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 gap-10 p-8">
      <img
  src={warningsign}
  alt="Warning"
  className="h-24 w-24"
/>

        <p className="text-center mt-28 text-sm text-gray-600">
          {message}
        </p>
      </div>
    </div>
  )
}

