import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const invoiceFormSchema = z.object({
  from_street_address: z.string().min(1, "invalid input"),
  from_post_code: z.string().min(1, "invalid input"),
  from_city: z.string().min(1, "invalid input"),
  from_country: z.string().min(1, "invalid input"),
  to_client_name: z.string().min(1, "invalid input"),
  to_client_email: z.string().email("invalid input"),
  to_street_address: z.string().min(1, "invalid input"),
  to_post_code: z.string().min(1, "invalid input"),
  to_city: z.string().min(1, "invalid input"),
  to_country: z.string().min(1, "invalid input"),
  date: z.string().min(1, "invalid input"),
  payment_terms: z.string().min(1, "invalid input"),
  project_description: z.string().min(1, "invalid input"),
});

export type TInvoiceFormSchema = z.infer<typeof invoiceFormSchema>;

const useValidation = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TInvoiceFormSchema>({
    resolver: zodResolver(invoiceFormSchema),
  });

  const fromAddress = {
    ...register("from_street_address"),
    reference: register("from_street_address").ref,
    errorMessage: errors.from_street_address?.message,
    error: !!errors.from_street_address?.message,
  };

  const fromCity = {
    ...register("from_city"),
    reference: register("from_city").ref,
    errorMessage: errors.from_city?.message,
    error: !!errors.from_city?.message,
  };

  const fromPostalCode = {
    ...register("from_post_code"),
    reference: register("from_post_code").ref,
    errorMessage: errors.from_post_code?.message,
    error: !!errors.from_post_code?.message,
  };

  const fromCountry = {
    ...register("from_country"),
    reference: register("from_country").ref,
    errorMessage: errors.from_country?.message,
    error: !!errors.from_country?.message,
  };

  const clientName = {
    ...register("to_client_name"),
    reference: register("to_client_name").ref,
    errorMessage: errors.to_client_name?.message,
    error: !!errors.to_client_name?.message,
  };

  const clientEmail = {
    ...register("to_client_email"),
    reference: register("to_client_email").ref,
    errorMessage: errors.to_client_email?.message,
    error: !!errors.to_client_email?.message,
  };

  const toStreetAddress = {
    ...register("to_street_address"),
    reference: register("to_street_address").ref,
    errorMessage: errors.to_street_address?.message,
    error: !!errors.to_street_address?.message,
  };

  const toPostCode = {
    ...register("to_post_code"),
    reference: register("to_post_code").ref,
    errorMessage: errors.to_post_code?.message,
    error: !!errors.to_post_code?.message,
  };

  const toCity = {
    ...register("to_city"),
    reference: register("to_city").ref,
    errorMessage: errors.to_city?.message,
    error: !!errors.to_city?.message,
  };

  const toCountry = {
    ...register("to_country"),
    reference: register("to_country").ref,
    errorMessage: errors.to_country?.message,
    error: !!errors.to_country?.message,
  };

  const date = {
    ...register("date"),
    reference: register("date").ref,
    errorMessage: errors.date?.message,
    error: !!errors.date?.message,
  };

  const paymentTerms = {
    ...register("payment_terms"),
    reference: register("payment_terms").ref,
    errorMessage: errors.payment_terms?.message,
    error: !!errors.payment_terms?.message,
  };

  const projectDescription = {
    ...register("project_description"),
    reference: register("project_description").ref,
    errorMessage: errors.project_description?.message,
    error: !!errors.project_description?.message,
  };

  const onSubmit = async (data: TInvoiceFormSchema) => {
    // TODO: SUBMIT FORM
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  };

  return {
    inputs: {
      fromAddress,
      fromCity,
      fromPostalCode,
      fromCountry,
      clientName,
      clientEmail,
      toStreetAddress,
      toPostCode,
      toCity,
      toCountry,
      date,
      paymentTerms,
      projectDescription,
    },
    isSubmitting,
    reset,
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useValidation;
