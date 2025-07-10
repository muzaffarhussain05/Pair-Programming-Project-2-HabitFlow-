const TimeTabs = ({ viewMode, setViewMode }) => {
  const tabs = ["week", "month", "year", "all"];

  return (
    <div className="flex gap-4 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setViewMode(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
            viewMode === tab ? "bg-gray-200" : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TimeTabs;
