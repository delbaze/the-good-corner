import { AxiosError } from "axios";
import { UseFormSetError } from "react-hook-form";

export function formatAmount(
  amount: number,
  locales: string | undefined = "fr-FR",
  currency: string | undefined = "EUR"
) {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  }).format(amount);
}
interface IError {
  field: string | null;
  message: string;
}

export function errorManager(
  setError: UseFormSetError<{
    title?: string | undefined;
    description?: string | undefined;
    picture: string;
    owner: string;
    price: number;
    location: string;
    category: number;
  }>,
  err: AxiosError<any>
) {
  err.response?.data?.errors?.forEach((e: any) => {
    setError(e.field, {
      message: e.message,
    });
  });
}
