const Background = () => {
  return (
    <>
      <div
        className="bg-rose-100 -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-3xl
        sm:w-[68.75rem]
        dark:bg-[#946263]/50"
      ></div>
      <div
        className="bg-violet-100 -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-3xl 
        sm:w-[68.75rem] 
        md:left-[-33rem] 
        lg:left-[-28rem] 
        xl:left-[-15rem] 
        2xl:left-[-5rem]
        dark:bg-[#676394]/50"
      ></div>
    </>
  );
};

export default Background;
