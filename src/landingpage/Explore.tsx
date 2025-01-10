import bgimage from '../assets/images/explorebg.png';
import purchase from '../assets/icons/explore/purchase.png';
import accounting from '../assets/icons/explore/accounting.png';
import inventory from '../assets/icons/explore/inventory_17225959 1.png';
import invoice from '../assets/icons/explore/invoice.png';
import reports from '../assets/icons/explore/report.png';
import quotes from '../assets/icons/explore/quotes.png';
import sales from '../assets/icons/explore/sales.png';
import pos from '../assets/icons/explore/pos.png';

interface ModuleCardProps {
  icons: string; // Or a specific type depending on what 'icons' represents
  title: string;
  color: string; // You might want to specify a set of possible colors, or use a more specific type
}

const Dashboard = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  bg-cover bg-center h-[571px]"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="text-center rounded-md">
      <h1 
  className="text-center text-[60px]  leading-[70.8px] font-semibold text-[#393939]  decoration-skip-ink-none text-sans mb-4"
>
  Explore, Access, and Manage <br />
  <span className="text-[#820000]  font-bold">All Your</span> Modules in One Place
</h1>

        <p className="text-[#5F5E5E] font-sans mb-8">
          Our platform offers a centralized hub for managing your <br /> modules. Explore, access, and update them with ease.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4  rounded-md ">
        <ModuleCard icons={purchase} title="Purchase" color="bg-[#D6FFEB]" />
        <ModuleCard icons={accounting} title="Accounting" color="bg-[#FFE7FE]" />
        <ModuleCard icons={inventory} title="Inventory" color="bg-[#EBE7FF]" />
        <ModuleCard icons={invoice} title="Invoice" color="bg-[#FFE7E7]" />
        <ModuleCard icons={reports} title="Report" color="bg-[#CDE9FF]"  />
        <ModuleCard icons={quotes} title="Quotes" color="bg-[#FFF0E7]" />
        <ModuleCard icons={sales} title="Sales" color="bg-[#E0EEFE]" />
        <ModuleCard icons={pos} title="POS" color="bg-[#D6FFEB]" />
      </div>
    </div>
  );
};


const ModuleCard: React.FC<ModuleCardProps> = ({ icons, title, color }) => {
    return (
      <div
        className={`flex items-center justify-center p-[10px] rounded-[16px_16px_16px_0px] shadow-md ${color}`}
        style={{
          width: '180px',
          height: '52px',
          gap: '10px',
          opacity: '1', // Adjusted to make the card visible
        }}
      >
        <img src={icons} alt={title} className="h-[32px] w-[32px] mr-[10px]" />
        <span className="text-lg font-medium">{title}</span>
      </div>
    );
  };
  

export default Dashboard;
