const List = ({ data }: any) => {
  console.log("🚀 ~ file: list.tsx:2 ~ List ~ data:", Object.keys(data));
  return (
    <div className="flex w-full p-5 flex-col gap-5">
      {Object.keys(data)?.length > 0 &&
        Object.keys(data)?.map((item: any) => {
          return (
            <div className="rounded-md p-5 bg-white w-full items-center flex">
              <h2 className="text-2xl text-black font-bold px-5 uppercase">
                {item}
              </h2>
              <p className="text-xl text-black font-normal px-5">
                {data[item]}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default List;
