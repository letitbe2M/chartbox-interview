"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "@/app/_components/CustomInput";
import CustomButton2 from "@/app/_components/CustomButton2";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormSchema } from "@/lib/schemas";
import { useRouter } from "next/navigation";
import CustomForm from "../_components/CustomForm";

type Inputs = z.infer<typeof SearchFormSchema>;

const LoginForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(SearchFormSchema),
  });
  const processForm: SubmitHandler<Inputs> = async (data) => {
    if (
      data.name.toLowerCase() === "bitcoin" ||
      data.name.toLowerCase() === "btc"
    ) {
      await router.push("/coin/bitcoin");
    } else {
      await router.push(`/coin/${data.name.toLowerCase()}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-100 rounded-3xl p-10 w-[604px] h-[358px]">
        <h1 className="text-customGray font-semibold py-3">Crypto</h1>
        <hr className="text-[#F5F5F5]" />
        <CustomForm onSubmit={handleSubmit(processForm)}>
          <div className="mt-8">
            <p className="mb-4">Enter Symbol Name and Search:</p>
            <CustomInput
              id="name"
              register={register}
              errors={errors}
              placeholder=" Symbol Name"
              maxLength={11}
              onChange={() => clearErrors("name")}
            />

            <div className="my-6 w-full">
              <CustomButton2
                type="submit"
                title={" Search "}
                isLoading={isSubmitting}
              />
            </div>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default LoginForm;
