import React from "react";
import Image from "next/image";

const Bitcoin = (data: any) => {
  interface ProductProps {
    title: string;
    value: string | number;
    unit?: string;
  }

  const ProductDetailsRow: React.FC<ProductProps> = ({
    title,
    value,
    unit,
  }) => {
    const formatValue = (value: number) => {
      return value.toLocaleString();
    };

    const displayValue = typeof value === "number" ? formatValue(value) : value;

    return (
      <div className="h-8 flex justify-between items-center text-customGray">
        <p className="font-normal">{title}</p>
        <p className="font-medium">
          {displayValue}
          {unit && ` ${unit}`}
        </p>
      </div>
    );
  };

  const start = data?.data?.description?.en.indexOf(
    "Bitcoin is the first successful internet money"
  );
  const end =
    data?.data?.description?.en?.indexOf("and banks.") + "and banks.".length;
  const shortDescription = data?.data?.description?.en?.slice(start, end);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-100 rounded-3xl p-10 w-[604px] h-[618px] overflow-y-auto overflow-x-hidden">
        <h1 className="text-customGray font-semibold py-3">Bitcoin</h1>
        <hr className="text-[#F5F5F5]" />
        <div className="relative flex justify-center items-center py-8">
          <Image alt="bitcoin-pic" width={104} height={104} src={"/BTC.png"} />
        </div>
        <div className="gap-4 flex flex-col text-customGray">
          <ProductDetailsRow title={"Name"} value={data?.data?.name} />
          <ProductDetailsRow title={"Symbol"} value={data?.data?.symbol} />
          <ProductDetailsRow
            title={"Price"}
            value={data?.data?.market_data?.current_price?.usd}
            unit="$"
          />
          <p className="font-normal">Description</p>
          <p className="font-medium">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Bitcoin;
