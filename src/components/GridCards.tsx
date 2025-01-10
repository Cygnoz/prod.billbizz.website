import React from "react";

interface GridCards {
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  textcolor?: string;
  descriptioncolor?:string
}

const GridCards: React.FC<GridCards> = ({ title, description, color,textcolor,descriptioncolor, icon }) => (
  <div className={`p-6 rounded-lg ${color} h-full flex flex-col justify-between`}>
    <div>
      <div className="mb-4">{icon}</div>
      <h3 className={`text-lg font-medium mb-2 ${textcolor || 'text-white'}`}>{title}</h3>
      <p className={`text-sm ${descriptioncolor || "text-white"}`}>{description}</p>
    </div>
    <div className="flex justify-end mt-4">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
      <svg width="79" height="79" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="34.082" cy="33" r="30.5" fill="#EFEFEF"/>
<rect y="34.0815" width="48.1986" height="48.1986" rx="24.0993" transform="rotate(-45 0 34.0815)" fill="#FBF0EF"/>
<path d="M24.1397 44.022L44.0206 24.1411M44.0206 24.1411H24.1397M44.0206 24.1411V44.022" stroke="#1A1A1A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </div>
    </div>
  </div>
);

export default GridCards;
