const UseTitle = ({ title, colorTitle, subTitle, titleImg }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center py-2 space-x-1 text-2xl font-bold text-title lg:text-3xl md:text-3xl">
        <h2 className="text-title">{title}</h2>
        <h2 className="text-[#1a79ff] text-title">{colorTitle}</h2>
      </div>
      <p className="font-medium text-gray-400">{subTitle}</p>
      <img className="py-6" src={titleImg} alt="" />
    </div>
  );
};

export default UseTitle;
