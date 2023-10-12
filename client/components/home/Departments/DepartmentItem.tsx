const DepartmentItem = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#d2d8f3] rounded-3xl">
        <img src="/images/departments/department1.png" alt="department" />
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-lg">Travel Kits</h2>
        <span className="text-sm">20+ categories</span>
      </div>
    </div>
  );
};

export default DepartmentItem;
