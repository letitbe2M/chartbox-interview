import React from "react";
import Bitcoin from "./_components/Bitcoin";
import { getBitcoinData } from "@/server/fetch";

const page = async () => {
  const data = await getBitcoinData();
  console.log(data);
  return (
    <div>
      <Bitcoin data={data} />
    </div>
  );
};

export default page;
