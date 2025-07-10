import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const TimeTabs = () => {
  return (
    <>
    <div className="flex gap-4 mt-4">
      {['Week', 'Month', 'Year', 'All Time'].map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            index === 0 ? 'bg-gray-200' : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
    <div className="mt-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button className="p-2 bg-gray-100 rounded-full"><FaChevronLeft /></button>
        <span className="text-lg font-medium">Mon, 2/4 - Sun, 2/10</span>
        <button className="p-2 bg-gray-100 rounded-full"><FaChevronRight /></button>
      </div>
    </div>
    </>
  );
};

export default TimeTabs;
