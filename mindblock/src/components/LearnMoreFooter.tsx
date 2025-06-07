const LearnMoreFooter = () => {
  return (
    <div className="pt-6 sm:pt-8 text-center px-4 sm:px-6">
      <h1 className="text-[24px] sm:text-[28px] md:text-[30px] font-semibold pb-3 sm:pb-4 leading-tight">
        Ready to Start Playing?
      </h1>
      <p className="text-neutral-400 pb-5 sm:pb-6 text-sm sm:text-base max-w-md mx-auto">
        Now that you understand how Mind Block works, it's time to put your
        skills to test.
      </p>
      <div className="pb-6">
        <button className="text-black bg-white text-[16px] sm:text-[18px] font-semibold px-6 sm:px-8 py-3 sm:py-4 md:p-6 rounded-lg hover:bg-gray-100 transition-colors active:scale-95 transform">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default LearnMoreFooter;
