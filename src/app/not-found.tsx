import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type Props = {};

const Notfound = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-100 rounded-3xl p-10 w-[604px] h-[326px]">
        <h1 className="text-customGray font-semibold py-3">Not Found</h1>
        <hr className="text-[#F5F5F5]" />
        <div className="relative flex flex-col justify-center items-center py-8 gap-6">
          <IoIosCloseCircleOutline size={104} color="red" />
          <p>Symbol not found!</p>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
