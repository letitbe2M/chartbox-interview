import z from "zod";


export const SearchFormSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Symbol Name is required",
  }),

});
